# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





import { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

const App = () => {
  const [code, setCode] = useState(`function greet(name) {
  const message = \`Hello, \${name}!\`;
  return message;
}`);

  const highlight = (code) => {
    if (!Prism.languages.javascript) return code;

    return Prism.highlight(
      code,
      Prism.languages.javascript,
      "javascript"
    );
  };

  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="flex h-full">

        {/* Editor */}
        <div className="relative w-1/2 border-r border-slate-200 bg-slate-950 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">
            Code Editor
          </h2>

          <div className="h-[calc(100%-80px)] rounded-xl border border-slate-800 bg-slate-900">
            {/* <Editor
              value={code}
              onValueChange={setCode}
              highlight={highlight}
              padding={16}
              style={{
                fontFamily: "monospace",
                fontSize: 14,
                minHeight: "100%",
                backgroundColor: "transparent",
                color: "white",
              }}
            /> */}
          </div>

          <div className="absolute bottom-6 right-6">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              Review Code
            </button>
          </div>
        </div>

        {/* Review Panel */}
        <div className="w-1/2 bg-white p-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-800">
            AI Code Review
          </h2>

          <p className="text-sm text-slate-500">
            Review results will appear here.
          </p>
        </div>

      </div>
    </div>
  );
};

export default App;