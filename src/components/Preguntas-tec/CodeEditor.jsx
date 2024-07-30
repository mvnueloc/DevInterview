import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import LanguajesSelector from "./LanguajesSelector";

const CodeEditor = ({
  setRespuesta,
  respuestaDisabled,
  language,
  setLanguajes,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ lineNumber: 1, column: 1 });
  const [value, setValue] = useState("");
  const editorRef = useRef("");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    editor.onDidChangeCursorPosition(() => {
      const position = editor.getPosition();
      setCursorPosition({ lineNumber: position.lineNumber, column: position.column });
    });
  };

  const onSelect = (language) => {
    setLanguajes(language);
  };

  useEffect(() => {
    // console.log(value);
    setRespuesta(value);
  }, [value]);

  const handleEditorChange = (value, event) => {
    setValue(value);
    const position = event.changes[0].range.startLineNumber;
    const column = event.changes[0].range.startColumn;
    setCursorPosition({ lineNumber: position, column: column });
  };

  return (
    <div className="bg-[#1B1D20] h-[30rem] flex flex-col text-white base:h-full rounded-lg w-full">
      <div className="px-2 py-2 inline-flex gap-2 items-center bg-[#28292c] w-full rounded-t-lg">
        <label className="text-sm font-medium text-gray-200">
          Código
        </label>
      </div>
      <LanguajesSelector language={language} onSelect={onSelect} />
      <div className="border border-gray-400/40 "/>
      <div className="flex-1 overflow-hidden rounded-b-lg">
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
            readOnly: respuestaDisabled,
          }}
          key={language}
          // height="100%"
          defaultLanguage={language}
          defaultValue=""
          theme="vs-dark"
          value={value}
          onChange={(value) => setValue(value)}
          onMount={onMount}
          height="100%"
        />
      </div>
      <div className="text-sm text-gray-400 py-1 px-2 text-end">
          Ln: {cursorPosition.lineNumber}, Col: {cursorPosition.column}
      </div>
    </div>
  );
};

export default CodeEditor;
