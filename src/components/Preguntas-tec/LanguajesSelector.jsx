import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const LanguajesSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
  };

  const languages = Object.entries(LANGUAGE_VERSIONS);

  const CODE_SNIPPETS = {
    javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
    python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    csharp:
      'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
    php: "<?php\n\n$name = 'Alex';\necho $name;\n",
  };

  return (
    <div>
      <div>
        <div className="flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex  items-center text-gray-100 border-2 border-blue-500/[0.5] rounded-md cursor-pointer px-4 py-1">
            {language}
            {isOpen ? (
              <ChevronUpIcon className="h-5 w-5 ml-1" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 ml-1" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="flex ">
            <div className="absolute mt-2 p-1 border-2 border-blue-500/[0.5] rounded-md z-10 bg-primary">
              {languages.map(([lang, version]) => (
                <button
                  key={lang}
                  onClick={() => {
                    onSelect(lang);
                    setIsOpen(false);
                  }}
                  className={`flex px-4 mt-1 w-full hover:bg-blue-500/[0.5] rounded-md ${
                    lang == language ? "bg-blue-500/[0.5]" : ""
                  }`}>
                  <span>{lang}</span>
                  {/* <span>({version})</span> */}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguajesSelector;
