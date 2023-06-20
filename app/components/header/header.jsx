"use client";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image width={90} height={50} src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/" className={`${pathname === "/" ? styles.active : ""}`}>
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
      </div>
    </header>
  );
};

export default Header;
