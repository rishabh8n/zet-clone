"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">
              <Image width={90} height={50} src="/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className={styles.links}>
            <Link
              href="/"
              className={`${pathname === "/" ? styles.active : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${pathname === "/about" ? styles.active : ""}`}
            >
              AboutUs
            </Link>
            <Link
              href="/pws"
              className={`${pathname === "/pws" ? styles.active : ""}`}
            >
              PartnerWithUs
            </Link>
            <Link
              href="/blog"
              className={`${pathname === "/blog" ? styles.active : ""}`}
            >
              Blog
            </Link>
            <button>Download ZET</button>
          </div>
          <button
            className={`${styles.Ham} ${menuActive ? styles.active : ""}`}
            onClick={() => setMenuActive((prev) => !prev)}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </header>
      {menuActive && (
        <div className={styles.mobileLinks}>
          <div className={styles.links}>
            <Link
              href="/"
              className={`${pathname === "/" ? styles.active : ""}`}
              onClick={() => setMenuActive((prev) => !prev)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${pathname === "/about" ? styles.active : ""}`}
              onClick={() => setMenuActive((prev) => !prev)}
            >
              AboutUs
            </Link>
            <Link
              href="/pws"
              className={`${pathname === "/pws" ? styles.active : ""}`}
              onClick={() => setMenuActive((prev) => !prev)}
            >
              PartnerWithUs
            </Link>
            <Link
              href="/blog"
              className={`${pathname === "/blog" ? styles.active : ""}`}
              onClick={() => setMenuActive((prev) => !prev)}
            >
              Blog
            </Link>
            <Link
              href="/down"
              className={`${pathname === "/blog" ? styles.active : ""}`}
              onClick={() => setMenuActive((prev) => !prev)}
            >
              Download ZET
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
