"use client";
import Image from "next/image";
import styles from "./Portfolio.module.css";
import BRANDS from "@/components/Portfolio/brands";

const PortfolioSection = () => {
  const openInNewTab = (link: any) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="bg_primary" id="portfolio">
      <section className={`container ${styles.container}`}>
        <div>
          <h2 className={styles.title}>Our Portfolio</h2>
          <p className={styles.subtitle}>
            Biscuit Turns ideas into world-changing Brands.
          </p>
        </div>
        <div className={styles.grid}>
          {BRANDS.map((brand, index) => (
            <Image
              src={brand.image}
              alt={brand.name}
              title={brand.name}
              width={brand.width}
              height={brand.height}
              key={index}
              onClick={() => {
                openInNewTab(brand.link);
              }}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;
