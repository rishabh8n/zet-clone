import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src="/zet_logo_white.svg" alt="logo" />
      </div>
      <hr className={styles.line} />
      <div className={styles.container}>
        <div className={styles.company}>
          <h3>COMPANY</h3>
          <Link href="/about">About Us</Link>
          <Link href="/pws">Partner With Us</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className={styles.legal}>
          <h3>LEGAL</h3>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
        <div className={styles.contact}>
          <h3>CONTACT</h3>
          <Link href="/email">hi@zetapp.in</Link>
          <Link href="/number">+91-7417274072</Link>
        </div>
        <div className={styles.social}>
          <h3>SOCIAL</h3>
          <div className={styles.socialLinks}>
            <Link href="/email">
              <img src="facebook.svg" alt="facebook" />
            </Link>
            <Link href="/number">
              <img src="instagram.svg" alt="instagram" />
            </Link>
            <Link href="/number">
              <img src="linkedin.svg" alt="linkedin" />
            </Link>
            <Link href="/number">
              <img src="TelegramImg.svg" alt="Telegram" />
            </Link>
            <Link href="/number">
              <img src="WhatsappImg.svg" alt="Whatsapp" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
