"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { animate, motion, useScroll } from "framer-motion";
import Tilt from "react-vanilla-tilt";

const AboutPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.aboutPage}>
      {/* Our Mission */}
      <div className={styles.ourMission}>
        <img src="/OurMission.webp" alt="our mission" />
        <div className={styles.text}>
          <h2>OUR MISSION</h2>
          <p>
            Enabling financial inclusion for the next billion Indians & making
            their Zindagi Set. Building a platform that enables you to sell
            financial products & earn up to Rs. 1 lakh every month.
          </p>
          <h3>EARN BETTER. LIVE BETTER.</h3>
        </div>
      </div>
      <div className={styles.evolve}>
        <h2>How we evolved over the years</h2>
        <img src="/Growth.webp" alt="growth" />
      </div>

      {/* Got Featured */}
      <div className={styles.gotFeatured}>
        <h2>Got Featured</h2>
        <div className={styles.featuredContainer}>
          <div className={styles.featuredCard}>
            <img src="/EconomicTimes.webp" alt="Economic times" />
          </div>
          <div className={styles.featuredCard}>
            <img src="/Inc42.webp" alt="Inc 42" />
          </div>
          <div className={styles.featuredCard}>
            <img src="/mint.webp" alt="Mint" />
          </div>
          <div className={styles.featuredCard}>
            <img src="/YourStory.webp" alt="Your Story" />
          </div>
          <div className={styles.featuredCard}>
            <img src="/BusinessStandard.webp" alt="Business Standard" />
          </div>
        </div>
      </div>

      {/* Meet Investers  */}
      <div className={styles.meetInvestors}>
        <h2>Meet the Investors</h2>
        <motion.div
          className={styles.investmentCompanies}
          onViewportEnter={(e) => {
            let sc = scrollYProgress.current - scrollYProgress.prev;
            if (sc >= 0) {
              animate(
                ".sa",
                { opacity: [0, 1], y: [100, 0] },
                { duration: 0.6, ease: "easeInOut" }
              );
            }
          }}
        >
          <Tilt className={styles.invCompCard}>
            <motion.img
              className="sa"
              src="/InvCompany1.webp"
              alt="Investment Company 1"
            />
          </Tilt>
          <Tilt className={styles.invCompCard}>
            <motion.img
              className="sa"
              src="/InvCompany2.webp"
              alt="Investment Company 2"
            />
          </Tilt>

          <Tilt className={styles.invCompCard}>
            <motion.img
              className="sa"
              src="/InvCompany3.webp"
              alt="Investment Company 3"
            />
          </Tilt>

          <Tilt className={styles.invCompCard}>
            <motion.img
              className="sa"
              src="/InvCompany4.webp"
              alt="Investment Company 4"
            />
          </Tilt>
        </motion.div>

        {/* Investers  */}
        <div className={styles.investors}>
          <Tilt className={styles.investor}>
            <img src="Inv1.webp" alt="Inv1" />
            <h3>Kunal Shah</h3>
            <p>Founder, CRED</p>
          </Tilt>

          <Tilt className={styles.investor}>
            <img src="Inv2.webp" alt="Inv1" />
            <h3>Gaurav Munjal</h3>
            <p>Founder, UNACADEMY</p>
          </Tilt>
          <Tilt className={styles.investor}>
            <img src="Inv3.webp" alt="Inv1" />
            <h3>Aakrit Vaish</h3>
            <p>Co-Founder, HAPTIK</p>
          </Tilt>
          <Tilt className={styles.investor}>
            <img src="Inv4.webp" alt="Inv1" />
            <h3>Harshil Mathur</h3>
            <p>Founder, RAZORPAY</p>
          </Tilt>
          <Tilt className={styles.investor}>
            <img src="Inv5.webp" alt="Inv1" />
            <h3>Vidit Aatrey</h3>
            <p>Founder & CEO, MEESHO</p>
          </Tilt>
          <Tilt className={styles.investor}>
            <img src="Inv6.webp" alt="Inv1" />
            <h3>Amrish Rau</h3>
            <p>CEO, PINELABS</p>
          </Tilt>
          <Tilt className={styles.investor}>
            <img src="Inv7.webp" alt="Inv1" />
            <h3>Lalit Keshre</h3>
            <p>CEO, GROWW</p>
          </Tilt>
          <Tilt className={styles.investor}>
            <img src="Inv8.webp" alt="Inv1" />
            <h3>Gokul Rajaram</h3>
            <p>Product, DOORDASH</p>
          </Tilt>
        </div>
      </div>

      {/* Meet Founders  */}
      <div className={styles.meetFounders}>
        <h2>Meet the Founders</h2>
        <p>Few words from founders desk</p>
        <div className={styles.founders}>
          <Tilt className={styles.founder}>
            <img src="/Manish.webp" alt="Manish" />
            <h3>Manish Shara</h3>
            <p>Co- Founder & CEO</p>
          </Tilt>
          <Tilt className={styles.founder}>
            <img src="/Yash.webp" alt="Manish" />
            <h3>Yash Desai</h3>
            <p>Co- Founder</p>
          </Tilt>
          <Tilt className={styles.founder}>
            <img src="/Lokesh.webp" alt="Manish" />
            <h3>Lokesh Agarwal</h3>
            <p>CTO</p>
          </Tilt>
        </div>
      </div>

      {/* Footer Image  */}
      <img className={styles.footer} src="/AboutUsFooter.webp" alt="footer" />
    </div>
  );
};

export default AboutPage;
