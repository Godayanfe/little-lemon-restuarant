import BookingHero from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm";
import { useReducer } from "react";

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
function updateTimes(state) { return state; }

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <div className="booking-page">
      <BookingHero />
      <div style={{padding: '40px 5vw 80px'}}>
        <div className="booking-card">
          <ReservationForm availableTimes={availableTimes} dispatch={dispatch}
            updateTimes={(date) => dispatch(date)} />
        </div>
      </div>
    </div>
  );
}
