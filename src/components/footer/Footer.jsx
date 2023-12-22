import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Medium2.0" width={50} height={50} />
            <h1 className={styles.logoText}>Medium 2.0</h1>
          </div>
        </Link>

        <p className={styles.desc}>
          At Medium 2.0, we are dedicated to fostering a community of diverse
          voices, sparking meaningful conversations, and sharing compelling
          narratives from around the world. Our platform thrives on the power of
          storytelling, where writers, thinkers, and creators converge to
          explore a wide spectrum of topics.
        </p>
        <div className={styles.icons}>
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
            <Image
              src="/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />
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
          {/* <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} /> */}
        </div>

        <p className={styles.copyRight}>
          © {currentYear} All rights reserved to Rithik Sharma ❣️
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=style">Style</Link>
          <Link href="/blog?cat=fashion">Fashion</Link>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.facebook.com">Facebook</Link>
          <Link href="https://www.instagram.com/shh_rithik_/">Instagram</Link>
          <Link href="https://github.com/rithik-sharma">Github</Link>
          <Link href="https://www.youtube.com/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
