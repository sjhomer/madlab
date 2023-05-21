import React, {useEffect, useState} from "react";
import {api} from "../api";
import styled from "@emotion/styled";

const SidebarContainer = styled.div`
  width: 25%;
  height: 100vh;
  overflow: auto;
  border-right: 1px solid #ddd;
  padding: 1em;
`;

const File = styled.div`
  padding: 0.5em 0;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Sidebar = ({onSelectFile}) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    (async() => {
      try {
        api.readDirectory().then((files) => {
          setFiles(files);
          if(files.length === 1) {
            onSelectFile(files[0]);
          }
        })
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <SidebarContainer>
      <h2>File List</h2>
      {files.map((file) => (
        <File key={file} onClick={() => onSelectFile(file)}>
          {file}
        </File>
      ))}
    </SidebarContainer>
  );
};
