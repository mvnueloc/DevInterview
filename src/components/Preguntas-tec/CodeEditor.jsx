import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import LanguajesSelector from "./LanguajesSelector";

const CodeEditor = ({
  setRespuesta,
  respuestaDisabled,
  language,
  setLanguajes,
}) => {
  const [value, setValue] = useState("");
  const editorRef = useRef("");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguajes(language);
  };

  useEffect(() => {
    // console.log(value);
    setRespuesta(value);
  }, [value]);

  return (
    <div className="relative bg-primary border-2 text-white border-blue-500/[0.5] p-4 md:p-8 rounded-lg w-5/6 lg:w-5/12 h-[650px]">
      <LanguajesSelector language={language} onSelect={onSelect} />
      <Editor
        options={{
          minimap: {
            enabled: false,
          },
          readOnly: respuestaDisabled,
        }}
        key={language}
        height="93%"
        defaultLanguage={language}
        defaultValue=""
        theme="vs-dark"
        value={value}
        onChange={(value) => setValue(value)}
        onMount={onMount}
        className="mt-6"
      />
    </div>
  );
};

export default CodeEditor;
