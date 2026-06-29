# Little Lemon Restaurant Website

A React web app for Little Lemon, a family-owned Mediterranean restaurant based in Chicago. The site includes a homepage, online menu, table reservation system, and order page.

## Features

- Browse this week's specials and full menu
- Reserve a table with a full booking form (date, time, guests, occasion, seating preference)
- Order food online for delivery
- Responsive design — works on mobile, tablet, and desktop
- Client-side routing with React Router

## Tech Stack

- React JS
- External Css

## Getting Started

# Install dependencies

npm install

# Start the dev server

npm start

```

App runs at [http://localhost:3000](http://localhost:3000)

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, specials, testimonials, about |
| `/about` | Restaurant story and background |
| `/reservations` | Table booking form |
| `/confirmation` | Booking confirmation screen |
| `/order` | Order online page |
| `/login` | User login |

---

## Project Structure

```

src/
├── assets/
│ └── food/ # Food and UI images
├── components/
│ ├── Navbar.js
│ ├── Footer.js
│ ├── Routing.js
│ ├── pages/
│ │ ├── HomePage.js
│ │ ├── About.js
│ │ ├── BookingPage.js
│ │ ├── Order.js
│ │ ├── Login.js
│ │ └── Confirmation.js
│ └── sections/
│ ├── headingPages/
│ │ ├── Heading.js
│ │ ├── Specials.js
│ │ ├── Testimonials.js
│ │ ├── About.js
│ │ └── CardInfo/
│ │ ├── SpecialCard.js
│ │ └── TestimonialCard.js
│ └── reservePages/
│ ├── Heading.js
│ └── BookingForm.js
├── App.js
└── index.css

````

---

## Scripts

```bash
npm start       # Run development server
npm test        # Run tests
npm run build   # Build for production
````

---

## License

This project was built as part of the Meta Front-End Developer Certificate capstone.
