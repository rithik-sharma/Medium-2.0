import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Songs for the summer in Sanur</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Andrew woth</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Cultural news and criticism, and conversations about TV, theatre,
            movies...
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>sharukh sekh</span>
            <span className={styles.date}> - 12.04.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Delhi Gastronomic Delight: Exploring the Culinary Treasures of the
            Capital City...
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Aman Rathore</span>
            <span className={styles.date}> - 15.03.2022</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Elevate Your Style: Unveiling the Timeless Elegance and Modern
            Trends in Fashion
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Shruti Joshi</span>
            <span className={styles.date}> - 21.05.2021</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
