import "./App.css";

/*
==================================================
MUM'S CELEBRATION WEBSITE
EDIT YOUR EVENT DETAILS HERE
==================================================
*/

const eventDetails = {
  name: "Alhaja N. A. Abdulsalam",

  eventTitle: "A Vintage Affair",

  subtitle: "A Birthday & Retirement Celebration",

  introduction:
    "Celebrating a beautiful life, a remarkable journey, and the beginning of a wonderful new chapter.",

  date: "12 December 2026",

  time: "12:00 PM",

  venue: "VENUE NAME HERE",

  address: "Enter the full event address here",

  // Replace this with the actual venue address.
  // Google Maps will use it to generate directions.
  mapAddress: "VENUE NAME, CITY, STATE, NIGERIA",

  // Replace with your Google Drive programme link.
  programmeLink: "https://drive.google.com/",

  // We'll connect this to the menu website later.
  menuLink: "#menu-coming-soon",

  // Optional venue coordinates can be used later
  // if you want to link directly to a precise location.
};

/*
==================================================
REUSABLE ICONS
==================================================
*/

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/*
==================================================
MAIN WEBSITE
==================================================
*/

function App() {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    eventDetails.mapAddress
  )}`;

  const googleMapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
    eventDetails.mapAddress
  )}&output=embed`;

  const isMenuAvailable = eventDetails.menuLink !== "#menu-coming-soon";

  const isProgrammeAvailable =
    eventDetails.programmeLink !== "https://drive.google.com/";

  return (
    <div className="website">
      {/* =========================================
          NAVIGATION
      ========================================== */}

      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">N.A.</span>

          <span className="brand-text">A Vintage Affair</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#celebration">Celebration</a>
          <a href="#details">Event Details</a>
          <a href="#location">Location</a>
          <a href="#menu">Menu</a>
          <a href="#programme">Programme</a>
        </nav>

        <a href="#details" className="nav-button">
          Event Information
          <ArrowIcon />
        </a>
      </header>

      {/* =========================================
          HERO SECTION
      ========================================== */}

      <main>
        <section className="hero" id="home">
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />

          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              A DAY WORTH CELEBRATING
              <span className="eyebrow-line" />
            </div>

            <p className="hero-pretitle">Honouring a beautiful life</p>

            <h1>
              A Vintage
              <br />
              <span>Affair.</span>
            </h1>

            <div className="hero-divider">
              <span />
              <span className="divider-diamond">✦</span>
              <span />
            </div>

            <p className="hero-name">{eventDetails.name}</p>

            <p className="hero-description">{eventDetails.introduction}</p>

            <div className="hero-date">
              <CalendarIcon />

              <span>{eventDetails.date}</span>

              <span className="date-separator">·</span>

              <span>{eventDetails.time}</span>
            </div>

            <a href="#details" className="primary-button">
              Discover the Celebration
              <ArrowIcon />
            </a>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-border">
                <img
                  src={`${import.meta.env.BASE_URL}images/mum-portrait.jpg`}
                  alt={`${eventDetails.name}, celebrating her birthday and retirement`}
                  className="hero-portrait"
                />
              </div>

              <div className="portrait-caption">
                <span className="caption-small">A life beautifully lived</span>

                <span className="caption-large">A legacy that lives on.</span>
              </div>
            </div>

            <div className="floating-note">
              <span className="floating-star">✦</span>

              <span>
                Celebrating
                <br />
                her next chapter
              </span>
            </div>
          </div>

          <div className="hero-bottom-note">
            A BIRTHDAY CELEBRATION &nbsp;·&nbsp; A RETIREMENT HONOUR
          </div>
        </section>

        {/* =========================================
            CELEBRATION INTRODUCTION
        ========================================== */}

        <section
          className="celebration-section section-padding"
          id="celebration">
          <div className="section-label">THE OCCASION</div>

          <div className="celebration-content">
            <div className="celebration-heading">
              <p className="script-text">A moment to remember</p>

              <h2>
                Celebrating her
                <br />
                <span>beautiful journey.</span>
              </h2>
            </div>

            <div className="celebration-message">
              <p>
                Some milestones deserve more than a passing celebration. They
                deserve a gathering filled with gratitude, laughter, cherished
                memories, and the people who have made the journey meaningful.
              </p>

              <p>
                Join us as we celebrate an extraordinary woman, honour the
                legacy of her working years, and welcome a new chapter filled
                with possibility, joy, and well-deserved rest.
              </p>

              <p className="closing-script">
                We look forward to celebrating with you.
              </p>
            </div>
          </div>

          <div className="celebration-bottom">
            <span>LOVE</span>
            <span className="bottom-flower">✿</span>
            <span>GRATITUDE</span>
            <span className="bottom-flower">✿</span>
            <span>NEW BEGINNINGS</span>
          </div>
        </section>

        {/* =========================================
            EVENT DETAILS
        ========================================== */}

        <section className="details-section section-padding" id="details">
          <div className="section-label">SAVE THE DATE</div>

          <div className="details-heading">
            <p className="script-text">We have a date with you</p>

            <h2>
              The celebration
              <br />
              <span>awaits.</span>
            </h2>

            <p className="section-description">
              Here is everything you need to know before joining us for this
              special day.
            </p>
          </div>

          <div className="details-grid">
            <article className="detail-card">
              <div className="detail-icon">
                <CalendarIcon />
              </div>

              <p className="detail-label">THE DATE</p>

              <h3>{eventDetails.date}</h3>

              <p className="detail-note">A special day on the calendar.</p>
            </article>

            <article className="detail-card">
              <div className="detail-icon">
                <ClockIcon />
              </div>

              <p className="detail-label">THE TIME</p>

              <h3>{eventDetails.time}</h3>

              <p className="detail-note">Kindly arrive on time.</p>
            </article>

            <article className="detail-card">
              <div className="detail-icon">
                <LocationIcon />
              </div>

              <p className="detail-label">THE VENUE</p>

              <h3>{eventDetails.venue}</h3>

              <p className="detail-note">{eventDetails.address}</p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link">
                Get directions
                <ArrowIcon />
              </a>
            </article>
          </div>
        </section>

        {/* =========================================
            LOCATION & MAP
        ========================================== */}

        <section className="location-section section-padding" id="location">
          <div className="location-heading">
            <div>
              <div className="section-label">FIND YOUR WAY</div>

              <p className="script-text">We'll save you a seat</p>

              <h2>
                See you
                <br />
                <span>there.</span>
              </h2>

              <p className="location-address">
                <LocationIcon />

                <span>
                  <strong>{eventDetails.venue}</strong>
                  <br />
                  {eventDetails.address}
                </span>
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button directions-button">
              Open Google Maps
              <ArrowIcon />
            </a>
          </div>

          <div className="map-container">
            <iframe
              title="Map showing the event venue"
              src={googleMapsEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className="map-caption">
            Need directions? Open the map to plan your journey directly from
            your current location.
          </p>
        </section>

        {/* =========================================
            MENU & PROGRAMME
        ========================================== */}

        <section className="resources-section section-padding">
          <div className="resources-heading">
            <div className="section-label">MAKE YOUR PLANS</div>

            <p className="script-text">Everything in its place</p>

            <h2>
              A little more
              <br />
              <span>to look forward to.</span>
            </h2>
          </div>

          <div className="resources-grid">
            <article className="resource-card menu-card" id="menu">
              <div className="resource-number">01</div>

              <div className="resource-symbol">✿</div>

              <p className="resource-overline">THE DINING EXPERIENCE</p>

              <h3>The Menu</h3>

              <p className="resource-description">
                A delightful celebration deserves a memorable dining experience.
                Discover what's on the menu.
              </p>

              <a
                href={eventDetails.menuLink}
                className="resource-button"
                onClick={(event) => {
                  if (!isMenuAvailable) {
                    event.preventDefault();

                    alert(
                      "Our celebration menu is coming soon. Please check back later!"
                    );
                  }
                }}>
                Explore the Menu
                <ArrowIcon />
              </a>

              <span className="resource-decoration">MENU</span>
            </article>

            <article className="resource-card programme-card" id="programme">
              <div className="resource-number">02</div>

              <div className="resource-symbol">✧</div>

              <p className="resource-overline">THE ORDER OF EVENTS</p>

              <h3>The Programme</h3>

              <p className="resource-description">
                From the opening moments to the final celebration, discover the
                day's programme and the moments we will share.
              </p>

              <a
                href={eventDetails.programmeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-button"
                onClick={(event) => {
                  if (!isProgrammeAvailable) {
                    event.preventDefault();

                    alert("The event programme will be available here soon.");
                  }
                }}>
                View the Programme
                <ArrowIcon />
              </a>

              <span className="resource-decoration">PROGRAMME</span>
            </article>
          </div>
        </section>

        {/* =========================================
            CLOSING SECTION
        ========================================== */}

        <section className="closing-section">
          <div className="closing-decoration">✦</div>

          <p className="script-text">
            A life to celebrate. A legacy to honour.
          </p>

          <h2>
            Here's to her
            <br />
            <span>next beautiful chapter.</span>
          </h2>

          <div className="closing-divider">
            <span />
            ✧
            <span />
          </div>

          <p className="closing-name">{eventDetails.name}</p>

          <p className="closing-date">{eventDetails.date.toUpperCase()}</p>

          <p className="closing-thanks">
            Thank you for being part of this special occasion.
          </p>
        </section>
      </main>

      {/* =========================================
          FOOTER
      ========================================== */}

      <footer className="footer">
        <a href="#home" className="footer-brand">
          A Vintage Affair
        </a>

        <p>Celebrating a remarkable life and a beautiful new beginning.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>

        <div className="footer-bottom">
          <span>{eventDetails.name}</span>

          <span>{eventDetails.date}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
