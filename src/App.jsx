import { useState } from "react";

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
          <button onClick={onSignup}>Sign Up</button>
        </p>

      </div>
    </div>
  );
}


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
          <button onClick={onLogin}>Login</button>
        </p>

      </div>
    </div>
  );
}


function Home({ userName, onLogout }) {
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
            document.documentElement.classList.toggle("dark-mode");
          }}
        >
          🌙
        </button>

      </header>

      <main>

        <section className="welcome-card">
          <div className="welcome-icon">👋</div>

          <h2>Hello, {userName || "Student"}!</h2>

          <p>
            Ready to continue your learning journey?
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
              Your current XP: 0
            </p>
          </div>

          <div className="card">
            <div className="card-icon">👤</div>
            <h3>Profile</h3>
            <p>
              Manage your learning profile.
            </p>
          </div>

        </section>

        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>

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
      />
    );
  }

  return (
    <Login
      onLogin={handleLogin}
      onSignup={() => setScreen("signup")}
    />
  );
}
