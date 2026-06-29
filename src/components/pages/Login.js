import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Sign in to manage your reservations.</p>
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input id="login-email" type="email" placeholder="you@email.com"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="login-pass">Password</label>
            <input id="login-pass" type="password" placeholder="••••••••"
              value={pass} onChange={(e) => setPass(e.target.value)} />
          </div>
          <button className="btn-primary" style={{marginTop:'8px'}}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
