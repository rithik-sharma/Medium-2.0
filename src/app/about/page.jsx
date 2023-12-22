import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> About Our Blog</h1>
      <p className={styles.content}>
        Welcome to our blog! We are passionate about sharing valuable content on
        various topics including technology, lifestyle, travel, and more. Our
        goal is to provide informative and engaging articles for our readers.
      </p>
      <p className={styles.content}>
        Our team of writers consists of experts in their fields, dedicated to
        delivering high-quality, original content. Whether you are looking for
        insightful advice, how-to guides, or the latest trends, you will find it
        here.
      </p>
      <p className={styles.content}>
        We believe in the power of knowledge and aim to create a community where
        readers can discover, learn, and interact. Thank you for being part of
        our journey!
      </p>
    </div>
  );
};

export default AboutPage;
