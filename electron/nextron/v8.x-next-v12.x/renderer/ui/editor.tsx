import React, {useEffect, useState} from "react";
import {Editable, Slate, withReact} from "slate-react";
import {createEditor} from "slate";
import {api} from "../api";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

const EditorPane = styled.div`
  width: 75%;
  height: 100vh;
  padding: 1em;
`;

const Title = styled.h1`
  width: 100%;
  border: none;
  outline: none;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1em;
`;

const EditorContent = styled.div`
  width: 100%;
  height: 90%;
  border: 1px solid #ddd;
  padding: 1em;
  overflow: auto;
  font-size: 1em;
  line-height: 1.5em;
`;

export const Editor = ({file}) => {
  const [loading, setLoading] = useState(true);
  const [initialContent, setInitialContent] = useState(null);
  // Create a Slate editor object that won't change across renders.
  const [editor] = useState(() => withReact(createEditor()))

  const [title, setTitle] = useState('');

  useEffect(() => {
    setLoading(true);
    console.log('attempting to load file', file);
    api.readFile(`${file}`).then((content) => {
      setTitle(file);
      setInitialContent(content);
      setLoading(false);
    }).catch(() => {
      setInitialContent([{
        type: 'paragraph',
        children: [{text: ''}],
      }]);
    }).finally(() => {
      setTitle(file);
      setLoading(false);
      setLoading(false);

      console.log('loaded file', file, initialContent);
    });
  }, [file]);

  const handleContentChange = (value) => {
    console.log('newContent', value);

    const isAstChange = editor.operations.some(
      op => 'set_selection' !== op.type
    )
    if (isAstChange) {
      // Save the value to Local Storage.
      const content = JSON.stringify(value)

      // Defer
      setTimeout(() => {
        api.writeFile(`${file}`, content);
      }, 0);
    }
  };

  return (
    <EditorPane>
      <Title>{title}</Title>
      {!loading && <EditorContent> <Slate editor={editor} value={initialContent} onChange={handleContentChange}>
        <Editable
          css={css`
            & > * + * {
              margin-top: 0.5em;
            }
          `}
        />
      </Slate></EditorContent>}
    </EditorPane>
  );
};
