// import styles from "./contactPage.module.css";

// const ContactPage = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Contact Us</h1>
//       <br></br>
//       <br></br>
//       <p className={styles.content}>
//         Have any questions, suggestions, or feedback? Feel free to reach out to
//         us using the information below or fill out the contact form.
//       </p>
//       <div className={styles.contactInfo}>
//         <h3>Email:</h3>
//         <p>contact@example.com</p>
//         <h3>Phone:</h3>
//         <p>+1234567890</p>
//         <h3>Address:</h3>
//         <p>123 Blogging Street, City, Country</p>
//       </div>

//       {/* Add a simple contact form */}
//       <form className={styles.contactForm}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" required />

//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" required />

//         <label htmlFor="message">Message:</label>
//         <textarea id="message" name="message" rows="4" required></textarea>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;

import styles from "./contactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Us</h1>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          Whether you have a question itching at the back of your mind, a
          brilliant idea waiting to be shared, or simply want to brighten our
          day with a hello, our ears are tuned, and our hearts eagerly await the
          delightful melody of your message!
        </p>
      </div>

      <div className={styles.contactInfo}>
        <div>
          <h3>Email Us:</h3>
          <p className={styles.email}>srithik645@gmail.com</p>
        </div>
        <div>
          <h3>Call Us:</h3>
          <p className={styles.phone}>+91 9027530995</p>
        </div>
        <div>
          <h3>Visit Us:</h3>
          <p className={styles.address}>
            53/6a IRI Street, Roorkee, Uttarakhand
          </p>
        </div>
      </div>

      <form className={styles.contactForm}>
        <label htmlFor="name" className={styles.label}>
          Name:
          <input
            type="text"
            id="name"
            name="name"
            required
            className={styles.input}
          />
        </label>

        <label htmlFor="email" className={styles.label}>
          Email:
          <input
            type="email"
            id="email"
            name="email"
            required
            className={styles.input}
          />
        </label>

        <label htmlFor="message" className={styles.label}>
          Message:
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className={styles.textarea}
          ></textarea>
        </label>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
