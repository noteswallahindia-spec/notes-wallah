import { useState } from "react";

/* =========================
   LOGIN
========================= */

function Login({ onLogin, onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    onLogin();
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand-icon">📚</div>

        <h1>Notes Wallah</h1>
        <p className="auth-subtitle">Welcome back!</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button className="primary-button" type="submit">
            Login
          </button>
        </form>

        <p className="switch-text">
          Don't have an account?

          <button onClick={onSignup}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

/* =========================
   SIGNUP
========================= */

function Signup({ onLogin, onSignupComplete }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    onSignupComplete(name);
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand-icon">📚</div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Start your learning journey
        </p>

        <form onSubmit={handleSignup}>
          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="form-error">{error}</p>}

          <button className="primary-button" type="submit">
            Create Account
          </button>
        </form>

        <p className="switch-text">
          Already have an account?

          <button onClick={onLogin}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

/* =========================
   NORMAL NOTES DATA
========================= */

const lifeProcessesNotes = [
  {
    title: "1. What Are Life Processes?",
    text:
      "Life processes are the basic activities that living organisms perform to maintain life. The major life processes studied in this chapter are nutrition, respiration, transportation and excretion."
  },

  {
    title: "2. Nutrition",
    text:
      "Nutrition is the process by which organisms obtain food and use it for energy, growth, repair and maintenance. Green plants generally prepare their own food by photosynthesis, while animals obtain food from other organisms."
  },

  {
    title: "3. Photosynthesis",
    text:
      "Photosynthesis is the process by which green plants prepare food using carbon dioxide and water in the presence of sunlight and chlorophyll. Glucose is formed and oxygen is released."
  },

  {
    title: "4. Human Digestive System",
    text:
      "Digestion breaks complex food into simpler substances that can be absorbed and used by the body. The main parts involved are the mouth, oesophagus, stomach, small intestine, large intestine, rectum and anus."
  },

  {
    title: "5. Respiration",
    text:
      "Respiration is the process through which cells obtain usable energy from food. Aerobic respiration occurs in the presence of oxygen, while anaerobic respiration occurs without oxygen."
  },

  {
    title: "6. Transportation in Humans",
    text:
      "The human transport system consists mainly of the heart, blood and blood vessels. Arteries generally carry blood away from the heart, veins generally carry blood towards the heart, and capillaries allow exchange of materials with tissues."
  },

  {
    title: "7. Transportation in Plants",
    text:
      "Xylem transports water and minerals from the roots towards the aerial parts of the plant. Phloem transports food made by leaves to other parts of the plant."
  },

  {
    title: "8. Excretion",
    text:
      "Excretion is the removal of metabolic waste products from the body. In humans, the kidneys are major excretory organs. The nephron is the functional unit of the kidney and is involved in filtration and urine formation."
  }
];

/* =========================
   NOTES HOME
========================= */

function NotesHome({ onBack, onClass10 }) {
  return (
    <div className="app notes-page">
      <header className="notes-header">
        <button className="back-button" onClick={onBack}>
          ←
        </button>

        <div>
          <h1>Notes</h1>
          <p>Choose your class</p>
        </div>
      </header>

      <main className="notes-main">
        <section className="notes-hero">
          <div className="notes-hero-icon">📚</div>

          <h2>Study Notes</h2>

          <p>
            Easy-to-understand notes for your classes,
            subjects and chapters.
          </p>
        </section>

        <h3 className="section-title">
          Classes
        </h3>

        <button
          className="class-card"
          onClick={onClass10}
        >
          <div className="class-icon">
            10
          </div>

          <div className="class-info">
            <strong>Class 10</strong>

            <span>
              Science, Mathematics, Social Science & more
            </span>
          </div>

          <span className="arrow">
            →
          </span>
        </button>

        <div className="coming-card">
          <span>🎓</span>

          <div>
            <strong>More classes coming soon</strong>

            <p>
              Classes 8, 9, 11 and 12 will be added.
            </p>
          </div>
        </div>
      </main>

      <BottomNav active="notes" />
    </div>
  );
}

/* =========================
   CLASS 10 SUBJECTS
========================= */

function Class10Subjects({ onBack, onScience }) {
  return (
    <div className="app notes-page">
      <header className="notes-header">
        <button className="back-button" onClick={onBack}>
          ←
        </button>

        <div>
          <h1>Class 10</h1>
          <p>Select a subject</p>
        </div>
      </header>

      <main className="notes-main">
        <div className="class-title-card">
          <div className="big-class-number">
            10
          </div>

          <div>
            <h2>Class 10 Notes</h2>
            <p>Choose your subject to continue.</p>
          </div>
        </div>

        <h3 className="section-title">
          Subjects
        </h3>

        <div className="subject-grid">
          <button
            className="subject-card"
            onClick={onScience}
          >
            <div className="subject-icon science">
              🔬
            </div>

            <strong>Science</strong>

            <span>
              Physics • Chemistry • Biology
            </span>

            <b>→</b>
          </button>

          <button className="subject-card">
            <div className="subject-icon math">
              📐
            </div>

            <strong>Mathematics</strong>

            <span>
              Maths notes & concepts
            </span>

            <b>→</b>
          </button>

          <button className="subject-card">
            <div className="subject-icon social">
              🌍
            </div>

            <strong>Social Science</strong>

            <span>
              History • Geography • Civics
            </span>

            <b>→</b>
          </button>

          <button className="subject-card">
            <div className="subject-icon english">
              📖
            </div>

            <strong>English</strong>

            <span>
              Literature & language
            </span>

            <b>→</b>
          </button>
        </div>
      </main>

      <BottomNav active="notes" />
    </div>
  );
}

/* =========================
   SCIENCE CHAPTERS
========================= */

function ScienceChapters({ onBack, onLifeProcesses }) {
  return (
    <div className="app notes-page">
      <header className="notes-header">
        <button className="back-button" onClick={onBack}>
          ←
        </button>

        <div>
          <h1>Science</h1>
          <p>Class 10 chapters</p>
        </div>
      </header>

      <main className="notes-main">
        <section className="subject-banner">
          <div className="subject-banner-icon">
            🔬
          </div>

          <div>
            <h2>Class 10 Science</h2>

            <p>
              Select a chapter to start learning.
            </p>
          </div>
        </section>

        <h3 className="section-title">
          Chapters
        </h3>

        <div className="chapter-list">
          <button
            className="chapter-card"
            onClick={onLifeProcesses}
          >
            <div className="chapter-number">
              1
            </div>

            <div className="chapter-info">
              <strong>Life Processes</strong>

              <span>
                Nutrition • Respiration • Transportation • Excretion
              </span>

              <small>
                Normal Notes available
              </small>
            </div>

            <span className="chapter-arrow">
              →
            </span>
          </button>

          {[
            "Control and Coordination",
            "How do Organisms Reproduce?",
            "Heredity",
            "Light – Reflection and Refraction"
          ].map((chapter, index) => (
            <button
              className="chapter-card disabled-chapter"
              key={chapter}
            >
              <div className="chapter-number">
                {index + 2}
              </div>

              <div className="chapter-info">
                <strong>{chapter}</strong>

                <span>
                  Notes will be added in upcoming parts.
                </span>
              </div>

              <span className="chapter-arrow">
                🔒
              </span>
            </button>
          ))}
        </div>
      </main>

      <BottomNav active="notes" />
    </div>
  );
}

/* =========================
   NOTE READER
========================= */

function LifeProcessesReader({ onBack }) {
  const [fontSize, setFontSize] = useState(17);

  return (
    <div className="app reader-page">
      <header className="reader-header">
        <button
          className="back-button"
          onClick={onBack}
        >
          ←
        </button>

        <div>
          <h1>Life Processes</h1>
          <p>Class 10 • Science</p>
        </div>
      </header>

      <main className="reader-main">
        <section className="reader-cover">
          <div className="reader-book-icon">
            📖
          </div>

          <div>
            <span className="normal-badge">
              NORMAL NOTES
            </span>

            <h2>
              Life Processes
            </h2>

            <p>
              Class 10 Science
            </p>
          </div>
        </section>

        <div className="reader-tools">
          <span>
            Reading controls
          </span>

          <div>
            <button
              onClick={() =>
                setFontSize(Math.max(14, fontSize - 1))
              }
            >
              A−
            </button>

            <button
              onClick={() =>
                setFontSize(Math.min(22, fontSize + 1))
              }
            >
              A+
            </button>
          </div>
        </div>

        <article
          className="note-content"
          style={{ fontSize: `${fontSize}px` }}
        >
          <div className="note-intro">
            <strong>
              Chapter Overview
            </strong>

            <p>
              Living organisms perform several basic
              activities to maintain life. These activities
              are called life processes.
            </p>
          </div>

          {lifeProcessesNotes.map((item) => (
            <section
              className="note-section"
              key={item.title}
            >
              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>
            </section>
          ))}

          <section className="quick-revision">
            <h3>
              ⚡ Quick Revision
            </h3>

            <ul>
              <li>
                Nutrition → obtaining and using food
              </li>

              <li>
                Respiration → releasing usable energy
              </li>

              <li>
                Transportation → moving materials
              </li>

              <li>
                Excretion → removing metabolic wastes
              </li>

              <li>
                Xylem → water and minerals
              </li>

              <li>
                Phloem → food transport
              </li>

              <li>
                Alveoli → gas exchange
              </li>

              <li>
                Nephron → functional unit of kidney
              </li>
            </ul>
          </section>

          <div className="notes-footer">
            <strong>
              Notes Wallah
            </strong>

            <p>
              Original simplified study notes based on
              NCERT concepts.
            </p>
          </div>
        </article>
      </main>

      <BottomNav active="notes" />
    </div>
  );
}

/* =========================
   BOTTOM NAV
========================= */

function BottomNav({ active }) {
  return (
    <nav className="bottom-nav">
      <button
        className={active === "home" ? "active" : ""}
      >
        🏠
        <span>Home</span>
      </button>

      <button
        className={active === "notes" ? "active" : ""}
      >
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
  );
}

/* =========================
   HOME
========================= */

function Home({
  userName,
  onLogout,
  onNotes
}) {
  return (
    <div className="app">
      <header className="topbar">
        <div>
          <h1>Notes Wallah</h1>
          <p>Learn • Practice • Grow</p>
        </div>

        <button
          className="theme-button"
          onClick={() => {
            document.documentElement.classList.toggle(
              "dark-mode"
            );
          }}
        >
          🌙
        </button>
      </header>

      <main>
        <section className="welcome-card">
          <div className="welcome-icon">
            👋
          </div>

          <h2>
            Hello, {userName || "Student"}!
          </h2>

          <p>
            Ready to continue your learning journey?
          </p>
        </section>

        <section className="cards">
          <button
            className="card clickable-card"
            onClick={onNotes}
          >
            <div className="card-icon">
              📖
            </div>

            <h3>Notes</h3>

            <p>
              Study your class and chapter notes.
            </p>
          </button>

          <div className="card">
            <div className="card-icon">
              📝
            </div>

            <h3>Tests</h3>

            <p>
              Practice questions and improve your score.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              ⭐
            </div>

            <h3>XP</h3>

            <p>
              Your current XP: 0
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              👤
            </div>

            <h3>Profile</h3>

            <p>
              Manage your learning profile.
            </p>
          </div>
        </section>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          Logout
        </button>
      </main>

      <BottomNav active="home" />
    </div>
  );
}

/* =========================
   MAIN APP
========================= */

export default function App() {
  const [screen, setScreen] = useState("login");
  const [userName, setUserName] = useState("");

  function handleLogin() {
    setUserName("Student");
    setScreen("home");
  }

  function handleSignup(name) {
    setUserName(name);
    setScreen("home");
  }

  function handleLogout() {
    setUserName("");
    setScreen("login");
  }

  if (screen === "signup") {
    return (
      <Signup
        onLogin={() => setScreen("login")}
        onSignupComplete={handleSignup}
      />
    );
  }

  if (screen === "home") {
    return (
      <Home
        userName={userName}
        onLogout={handleLogout}
        onNotes={() => setScreen("notes")}
      />
    );
  }

  if (screen === "notes") {
    return (
      <NotesHome
        onBack={() => setScreen("home")}
        onClass10={() => setScreen("class10")}
      />
    );
  }

  if (screen === "class10") {
    return (
      <Class10Subjects
        onBack={() => setScreen("notes")}
        o
