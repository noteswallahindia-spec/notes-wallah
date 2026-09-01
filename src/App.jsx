import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <header className="topbar">
        <div>
          <h1>Notes Wallah</h1>
          <p>Learn • Practice • Grow</p>
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <main>

        <section className="hero">
          <div className="hero-icon">
            📚
          </div>

          <h2>Your Learning Journey Starts Here</h2>

          <p>
            Notes, tests and smart learning — all in one place.
          </p>
        </section>

        <section className="cards">

          <div className="card">
            <div className="card-icon">📖</div>
            <h3>Notes</h3>
            <p>
              Study your class and chapter notes.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📝</div>
            <h3>Tests</h3>
            <p>
              Practice questions and improve your score.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">⭐</div>
            <h3>XP</h3>
            <p>
              Earn XP by completing tests.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">👤</div>
            <h3>Profile</h3>
            <p>
              Track your learning progress.
            </p>
          </div>

        </section>

      </main>

      <nav className="bottom-nav">

        <button>
          🏠
          <span>Home</span>
        </button>

        <button>
          📚
          <span>Notes</span>
        </button>

        <button>
          📝
          <span>Tests</span>
        </button>

        <button>
          ⭐
          <span>XP</span>
        </button>

        <button>
          👤
          <span>Profile</span>
        </button>

      </nav>

    </div>
  );
}

export default App;
