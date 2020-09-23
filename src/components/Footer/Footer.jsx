import React from "react";
import styles from "./Footer.module.css";
import image from "./logo.png";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <section className={styles.bg_white}>
        <div className={styles.brand}>
          <a target="_blank" href="https://github.com/thedaviddev">
            <img className={styles.brand} src={image} />
          </a>
        </div>
        <div className={styles.right}>
          <a href="/about"> About </a>
          <a href="/faq"> FAQ </a>
          <a href="/contact"> Contact </a>
          <a href="/blog"> Blog </a>
        </div>
        <div className={styles.right}>
          <a href="https://twitter.com" target="_blank">
            <span class="icon">
              <i class="fab fa-twitter"></i>
            </span>
          </a>
          <a href="https://facebook.com" target="_blank">
            <span class="icon">
              <i class="fab fa-facebook"></i>
            </span>
          </a>
          <a href="https://instagram.com" target="_blank">
            <span class="icon">
              <i class="fab fa-instagram"></i>
            </span>
          </a>
        </div>
        <div class="copyright left">
          Created By © 2020
          <a href="https://linkedin.com/in/TheDavidDev">The David Developer</a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
