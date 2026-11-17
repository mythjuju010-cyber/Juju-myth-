import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

function DashboardPage() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="avatar">✦</div>
          <div className="brand-text">
            XEROF <span>256</span> PRO
          </div>
        </div>
        <span className="status-pill">LIVE</span>
      </header>

      <main className="dashboard">
        <section className="card hero-card">
          <div className="eyebrow">Capital Circuit</div>
          <h1>Secure robo-trading with instant liquidity.</h1>
          <p className="subtext">
            Deploy precision strategies across AI-driven markets with real-time execution and shielded protection.
          </p>

          <div className="stats-grid">
            <div>
              <small>Balance</small>
              <strong>$26.4K</strong>
            </div>
            <div>
              <small>ROI</small>
              <strong>+18.4%</strong>
            </div>
            <div>
              <small>Risk</small>
              <strong>Low</strong>
            </div>
          </div>

          <div className="quick-tiles">
            <Link to="/login">Buy 256</Link>
            <Link to="/login">Convert</Link>
            <Link to="/login">Withdraw</Link>
          </div>
        </section>

        <section className="card">
          <div className="section-heading">Portfolio</div>
          <div className="money-box">
            <div className="money-row">
              <span>Wallet</span>
              <strong>$18,900</strong>
            </div>
            <div className="money-row">
              <span>Staking</span>
              <strong>$4,800</strong>
            </div>
            <div className="money-row">
              <span>Rewards</span>
              <strong>$2,700</strong>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="section-heading">Quick Actions</div>
          <div className="quick-tiles small">
            <Link to="/login">Fund</Link>
            <Link to="/login">Route</Link>
            <Link to="/login">Audit</Link>
          </div>
          <div className="action-row">
            <Link className="btn btn-green" to="/login">Activate</Link>
            <Link className="btn btn-dark" to="/login">Account</Link>
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button className="tab active" type="button">Overview</button>
        <button className="tab" type="button">Trades</button>
        <button className="tab" type="button">Vaults</button>
        <button className="tab" type="button">Profile</button>
      </nav>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-shell">
        <div className="brand-wrap centered">
          <div className="avatar">✦</div>
          <div className="brand-text">
            XEROF <span>256</span> PRO
          </div>
        </div>

        <div className="login-eyebrow">Secure Portal</div>
        <h2>Welcome back</h2>
        <p className="login-sub">Access your trading vault, monitor strategy flow, and manage allocations securely.</p>

        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" defaultValue="operator@xerof.pro" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" defaultValue="password123" />

          <div className="form-row">
            <label className="check-row"><input type="checkbox" defaultChecked /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="button" className="btn btn-gold full-width">Log in</button>
          <div className="divider">or</div>
          <button type="button" className="btn btn-dark full-width">Create account</button>
        </form>

        <div className="back-link">
          <Link to="/">← Back to dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
