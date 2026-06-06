import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import axios from "axios";
const App = () => { 
    const [ai_review, setai_review] = useState(null)
    const [code, setCode] = useState(`function greet(name) {
    const message = \`Hello, \${name}!\`;
    return message;
  }`);

  const getReview = async () => {
    try {
      const response =await axios.post("http://localhost:3000/ai/send-code",{code})
      setai_review(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
    }
  }
  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="flex h-full">
        {/* Editor */}
        <div className="relative flex w-1/2 flex-col border-r border-slate-200 bg-slate-950 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">Code Editor</h2>

          <div className="flex-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <CodeEditor
              value={code}
              language="js"
              placeholder="Please enter JS code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={16}
              style={{
                fontSize: 14,
                backgroundColor: "transparent",
                fontFamily: "monospace",
                height: "100%",
              }}
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button onClick={getReview} className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              Review Code
            </button>
          </div>
        </div>

        {/* Review Panel */}
        <div className="flex w-1/2 flex-col bg-white p-6">
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
