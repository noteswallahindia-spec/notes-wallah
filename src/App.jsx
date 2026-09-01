import { useState } from "react";

function App() {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px 20px",
        fontFamily: "Arial, sans-serif",
        background: "#f5f7fb",
      }}
    >
      <h1>📚 Notes Wallah</h1>

      <p>Part 3 - Notes Section</p>

      {!showNotes ? (
        <button
          onClick={() => setShowNotes(true)}
          style={{
            padding: "14px 22px",
            border: "none",
            borderRadius: "12px",
            background: "#111827",
            color: "white",
            fontSize: "16px",
          }}
        >
          📖 Open Notes
        </button>
      ) : (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "white",
            borderRadius: "16px",
          }}
        >
          <h2>Class 10</h2>
          <p>Science</p>

          <button
            onClick={() => setShowNotes(false)}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "10px",
            }}
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
