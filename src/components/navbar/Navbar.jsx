import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/yourfacebookpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.png"
            target="_blank"
            alt="facebook"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://www.instagram.com/shh_rithik_/"
          target="_blank"
          passHref
        >
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/rithik-sharma-/"
          target="_blank"
          passHref
        >
          <Image src="/linkedin.png" alt="linkedin" width={26} height={27} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" passHref>
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </a>
      </div>
      {/* <div className={styles.logo}>Medium 2.0</div> */}
      <Link className={styles.logo} href="/" passHref>
        <div className={styles.logo}>Medium 2.0</div>
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
