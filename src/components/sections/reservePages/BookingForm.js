import { useState } from "react";
import { Link } from "react-router-dom";

export default function ReservationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("None");
  const [preferences, setPreferences] = useState("None");
  const [comments, setComments] = useState("");
  const [finalTime, setFinalTime] = useState(
    (props.availableTimes || []).map((t) => <option key={t}>{t}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);
    if (props.updateTimes) {
      props.updateTimes(new Date(e.target.value));
      setFinalTime((props.availableTimes || []).map((t) => <option key={t}>{t}</option>));
    }
  }

  return (
    <form className="reservation-form">
      <div className="form-group">
        <label htmlFor="fName">First Name</label>
        <input id="fName" type="text" placeholder="Adrian" required minLength={2} maxLength={50}
          value={fName} onChange={(e) => setFName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="lName">Last Name</label>
        <input id="lName" type="text" placeholder="Rossi" minLength={2} maxLength={50}
          value={lName} onChange={(e) => setLName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="you@email.com" required
          value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="tel">Phone Number</label>
        <input id="tel" type="tel" placeholder="(xxx) xxx-xxxx" required
          value={tel} onChange={(e) => setTel(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input id="date" type="date" required value={date} onChange={handleDateChange} />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <select id="time" required>{finalTime}</select>
      </div>
      <div className="form-group">
        <label htmlFor="people">Guests</label>
        <input id="people" type="number" min={1} max={100} value={people}
          onChange={(e) => setPeople(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group full-width">
        <label htmlFor="preferences">Seating Preference</label>
        <select id="preferences" value={preferences} onChange={(e) => setPreferences(e.target.value)}>
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>
      <div className="form-group full-width">
        <label htmlFor="comments">Additional Notes</label>
        <textarea id="comments" rows={4} placeholder="Dietary restrictions, special requests..."
          value={comments} onChange={(e) => setComments(e.target.value)} />
      </div>
      <div className="form-submit-wrap">
        <small>Please double-check your details — reservations cannot be edited after submission.</small>
        <Link className="btn-primary" to="/confirmation" style={{display:'inline-block'}}>Confirm Reservation</Link>
      </div>
    </form>
  );
}
