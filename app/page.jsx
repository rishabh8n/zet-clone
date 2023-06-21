"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { animate, motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: "100%",
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const animation = { duration: 1100, easing: (t) => t };
let dragged = false;

const HomePage = () => {
  //brands slider
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 5,
        spacing: 35,
      },
      created(s) {
        s.moveToIdx(1, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      },
      animationEnded(s) {
        if (!dragged) {
          s.moveToIdx(s.track.details.abs + 1, true, animation);
        }
      },
      dragChecked() {
        dragged = true;
      },
    },
    [
      // add plugins here
    ]
  );

  //info slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef2, instanceRef2] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className={styles.homePage}>
      {/* hero section */}
      <div className={styles.hero}>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.text}>
            <h1>
              Become a Financial Advisor and <span>Earn Rs.1 Lakh/Month</span>
            </h1>
            <p>No investment required</p>
            <button>
              <Image
                src="/downbtn.svg"
                alt="download button"
                width={100}
                height={40}
              />
            </button>
          </div>
          <div className={styles.heroImg}>
            <img src="/Hero.webp" alt="hero image" />
          </div>
        </motion.div>
      </div>

      {/* brands section */}
      <div className={styles.brandSection}>
        <h2>Top Brands on ZET</h2>
        <p>We are trusted by best brand in the country</p>
        <div
          ref={sliderRef}
          className={`keen-slider ${styles.slidesContainer}`}
        >
          <div className={`keen-slider__slide ${styles.slide}`}>
            <img src="/Amex.webp" alt="Amex" />
          </div>
          <div className={`keen-slider__slide ${styles.slide}`}>
            <img src="/Aufin.webp" alt="Amex" />
          </div>
          <div className={`keen-slider__slide ${styles.slide}`}>
            <img src="/Axis.webp" alt="Amex" />
          </div>
          <div className={`keen-slider__slide ${styles.slide}`}>
            <img src="/Bajaj.webp" alt="Amex" />
          </div>
          <div className={`keen-slider__slide ${styles.slide}`}>
            <img src="/BOB.webp" alt="Amex" />
          </div>
          <div className={`keen-slider__slide ${styles.slide}`}>
            <img src="/Idfc.webp" alt="Amex" />
          </div>
          <div className={`keen-slider__slide ${styles.slide}`}>
            <img src="/IndusInd.webp" alt="Amex" />
          </div>
        </div>
      </div>

      {/* products section */}
      <div className={styles.productsSection}>
        <h2>Products on ZET</h2>
        <p>We are trusted by best brand in the country</p>
        <motion.div
          className={styles.products}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0 }}
        >
          <motion.div className={styles.product} variants={cardVariants}>
            <img src="/CC.webp" alt="CC" />
            <div className="text">
              <h3>CREDIT CARDS</h3>
              <p>
                100% Contactless Application Process with Instant Approval From
                Top Banks.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.product}
            variants={cardVariants}
            transition={{ ease: "easeInOut" }}
          >
            <img src="/Loan.webp" alt="CC" />
            <div className="text">
              <h3>CREDIT CARDS</h3>
              <p>
                100% Contactless Application Process with Instant Approval From
                Top Banks.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.product}
            variants={cardVariants}
            transition={{ ease: "easeInOut" }}
          >
            <img src="/BNPL.webp" alt="CC" />
            <div className="text">
              <h3>CREDIT CARDS</h3>
              <p>
                100% Contactless Application Process with Instant Approval From
                Top Banks.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.product}
            variants={cardVariants}
            transition={{ ease: "easeInOut" }}
          >
            <img src="/AccountSave.webp" alt="CC" />
            <div className="text">
              <h3>CREDIT CARDS</h3>
              <p>
                100% Contactless Application Process with Instant Approval From
                Top Banks.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* information section */}
      <div className={styles.info}>
        <div className={styles.content}>
          <img src="/peeps1.webp" alt="peeps" />
          <div className={styles.text}>
            <h3>THE ZET EFFECT</h3>
            <div ref={sliderRef2} className={`keen-slider ${styles.slider}`}>
              <div className={`keen-slider__slide ${styles.slideItem}`}>
                14 Lakh+ Financial Advisor across India are using ZET to
                increase their income.
              </div>
              <div className={`keen-slider__slide ${styles.slideItem}`}>
                We helped customers in more than 50 cities to get their first
                financial product
              </div>
              <div className={`keen-slider__slide ${styles.slideItem}`}>
                More than 20 Cr earned by our Agents by selling Credit Cards and
                Loans
              </div>
            </div>
            {loaded && instanceRef2.current && (
              <div className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{
                    width:
                      ((currentSlide + 1) /
                        instanceRef2.current.track.details.slides.length) *
                        100 +
                      "%",
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* why us section */}
      <div className={styles.whyUs}>
        <div class={styles.whyUsHero}>
          <h3>
            Why <span>Choose Us</span>
          </h3>
          <p>Why we are loved by our customers</p>
          <img src="/whyUsHero.webp" alt="why us hero" />
        </div>
        <motion.div
          className={styles.whyUsCardContainer}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0 }}
        >
          <motion.div className={styles.whyUsCard} variants={cardVariants}>
            <img src="/zero_investment.svg" alt="zero_investment" />
            <div className="text">
              <h3>Zero Investment</h3>
              <p>Build your business without any investment</p>
            </div>
          </motion.div>
          <motion.div className={styles.whyUsCard} variants={cardVariants}>
            <img src="/quick_payout.svg" alt="quick_payout" />
            <div className="text">
              <h3>Quick Payout</h3>
              <p>Direct Payout in your bank account in short time</p>
            </div>
          </motion.div>
          <motion.div className={styles.whyUsCard} variants={cardVariants}>
            <img src="/Fin_products.svg" alt="Fin_products" />
            <div className="text">
              <h3>Limitless Earnings</h3>
              <p>Direct Payout in your bank account in short time</p>
            </div>
          </motion.div>
          <motion.div className={styles.whyUsCard} variants={cardVariants}>
            <img src="/Icon_support.svg" alt="Icon_support" />
            <div className="text">
              <h3>Training & Upskilling</h3>
              <p>Get trained by finance and sales experts</p>
            </div>
          </motion.div>
          <motion.div className={styles.whyUsCard} variants={cardVariants}>
            <img src="/customerSupport.svg" alt="customerSupport" />
            <div className="text">
              <h3>Customer Support</h3>
              <p>Access tools and content to build relationship</p>
            </div>
          </motion.div>
          <motion.div className={styles.whyUsCard} variants={cardVariants}>
            <img src="/financialProduct.svg" alt="financialProduct" />
            <div className="text">
              <h3>Financial Products</h3>
              <p>Trustworthy & high-rated products & categories</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
