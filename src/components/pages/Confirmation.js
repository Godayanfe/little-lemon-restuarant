import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <div className="confirmation-page">
      <div className="confirmation-card">
        <div className="confirmation-icon">🍋</div>
        <h1>You're All Set!</h1>
        <p>Your reservation at Little Lemon has been confirmed. We'll see you soon — a confirmation has been sent to your email.</p>
        <Link className="btn-primary" to="/">Back to Home</Link>
      </div>
    </div>
  );
}
