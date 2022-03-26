import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="social-links__2">
          <section className="about__about__4">
            <h2>ABOUT</h2>
            <p>
              After the popularisation of print media in the late 18th Century,
              newspapers become a regular thing. The printing press brought with
              itself the advent of the era of information and knowledge.
            </p>
            <div className="social-icons-footer">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram-square"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-google-plus-square"></i>
              <i className="fab fa-telegram"></i>
            </div>
          </section>
          <section className="subscription__subs__class">
            <h2>Subscribe to Iconic News</h2>
            <p>
              Enter your email address to subscribe to this blog and receive
              notification of new posts by email
            </p>
            <input type="email" placeholder="Email Address" />
            <button type="button" className="footer-button">
              Subscribe
            </button>
          </section>
        </div>
        <div className="copyright">
          <p>copyright © 2022 Iconic News. Designed by IconicNews</p>
        </div>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
