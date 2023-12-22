"use client";

import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  const handleStartReading = () => {
    window.open("http://localhost:3000/blog", "_self"); // Opens the URL in the same tab/window
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Stay curious.</b> Discover stories, thinking, and expertise from
        writers.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Everybody is talking about Rust: Elon Musk, Microsoft, even
            JavaScript Ecosystem — What’s the Craze all About?
          </h2>
          <p className={styles.postDesc}>
            Rust is one of the fastest-growing programming languages and the
            most beloved language for eight consecutive years, as reported in
            the 2023 survey conducted by Stack Overflow. The beauty of Rust lies
            in its advantage of timing...
          </p>
          <button className={styles.button} onClick={handleStartReading}>
            Start reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
