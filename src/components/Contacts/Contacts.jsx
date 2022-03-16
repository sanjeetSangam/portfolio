import "./contacts.css";

export const Contacts = () => {
  return (
    <div className="contact" id="Contacts">

      <div className="contact-main">
        <div className="main-PR">
          <h1>Contact me</h1>
        </div>

        <div className="links-social">
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/sanjeet-kumar-sangam-09097421a/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a href="https://github.com/sanjeetSangam" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://twitter.com/saninfo4" target="_blank">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/san_arts_official_/"
              target="_blank"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>

        <div className="email-no">
          <p>
            Email : <span>asanjeetsangam15@gmail.com</span>
          </p>
          <p>
            Phone : <span>+91 9006079833</span>
          </p>
        </div>
      </div>
    </div>
  );
};
