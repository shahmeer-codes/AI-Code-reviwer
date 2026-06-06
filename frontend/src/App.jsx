import Markdown from "react-markdown";
import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import axios from "axios";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const App = () => {
  const [code, setCode] = useState(`function greet(name) {
  const message = \`Hello, \${name}!\`;
  return message;
}`);

  const [aiReview, setAiReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getReview = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post("http://localhost:5000/ai/send-code", {
        code,
      });

      const reviewText =
        response.data?.text ||
        response.data?.data ||
        response.data?.message ||
        "";

      setAiReview(String(reviewText));
    } catch (err) {
      console.error(err);
      setError("Failed to get AI review. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex bg-slate-100">
      <div className="w-1/2 flex flex-col bg-slate-950 p-6 border-r border-slate-800">
        <h2 className="text-white text-lg font-semibold mb-4">Code Editor</h2>

        <div className="flex-1 rounded-lg border border-slate-700 overflow-hidden">
          <div className="h-full overflow-auto">
            <CodeEditor
              value={code}
              language="javascript"
              onChange={(e) => setCode(e.target.value)}
              padding={16}
              style={{
                fontSize: 14,
                fontFamily: "monospace",
                backgroundColor: "#0f172a",
                color: "#fff",
                minHeight: "100%",
              }}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={getReview}
            disabled={loading}
            className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Review Code"}
          </button>
        </div>
      </div>

      <div className="w-1/2 bg-white p-6 overflow-auto">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          AI Code Review
        </h2>

        {loading && (
          <p className="text-blue-500 text-xl">
            AI is analyzing your code...
          </p>
        )}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && aiReview && (
          <div className="prose max-w-none">
            <Markdown rehypePlugins={[rehypeHighlight]}>{aiReview}</Markdown>
          </div>
        )}

        {!loading && !aiReview && !error && (
          <p className="text-slate-500">Submit your code to get AI review.</p>
        )}
      </div>
    </div>
  );
};

export default App;
