import React, {useState} from 'react';
// Import the Slate components and React plugin.
import {Editor, Sidebar} from "../ui";

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div style={{display: 'flex'}}>
      <Sidebar onSelectFile={setSelectedFile}/>
      <Editor file={selectedFile}/>
    </div>
  );
};

export default App;
