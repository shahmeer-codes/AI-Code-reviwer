const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="flex h-full">
        <div className="relative w-1/2 border-r border-slate-200 bg-slate-950 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Code Editor
            </h2>
          </div>

          <div className="h-[calc(100%-80px)] rounded-xl border border-slate-800 bg-slate-900 p-4">
            <pre className="text-sm text-slate-300">
              Start writing your code here...
            </pre>
          </div>

          <div className="absolute bottom-6 right-6">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg">
              Review Code
            </button>
          </div>
        </div>

        <div className="w-1/2 bg-white p-6">
          <div className="mb-4 border-b border-slate-200 pb-4">
            <h2 className="text-lg font-semibold text-slate-800">
              AI Code Review
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Review results and suggestions will appear here.
            </p>
          </div>

          <div className="flex h-[calc(100%-80px)] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50">
            <p className="text-center text-slate-400">
              No review generated yet.
              <br />
              Submit your code to receive feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;