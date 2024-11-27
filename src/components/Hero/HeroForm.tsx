"use client";

import Image from "next/image";
import styles from "./HeroForm.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Typewriter } from "react-simple-typewriter";
const HeroForm = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div>
        <h2 className={styles.title}>
          <Typewriter
            words={["Risking", "Investing", "Funding"]}
            loop={5} // Number of loops (0 for infinite)
            // cursor
            // cursorStyle="_"
            typeSpeed={70} // Typing speed in ms
            deleteSpeed={50} // Deleting speed in ms
            delaySpeed={1000} // Delay between words in ms
          />
          <br />
          for the biscuit.
        </h2>
        <p className={styles.subtitle}>
          <strong>Hello! founders</strong> <br />
          Got a crazy-good idea? Pitch it to Biscuit Ventures. If it’s worth the
          dough, we’ll chip in!
        </p>
        <ContactForm />
      </div>
      <div className={styles.images}>
        <Image src="/images/biscuit.png" alt="" width={512} height={512} />
        <Image
          src="/images/circle.png"
          alt=""
          width={420}
          height={420}
          className={styles.absolute_image}
        />
      </div>
    </div>
  );
};

export default HeroForm;
