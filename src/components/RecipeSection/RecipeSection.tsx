import UserCard from "@/components/UserCard/UserCard";
import styles from "./RecipeSection.module.css";

const RecipeSection = () => {
  return (
    <section className={`container ${styles.container}`} id="biscuit">
      <div>
        <h2 className={styles.title}>The Recipe for Our Biscuit:</h2>
        <p className={styles.subtitle}>
          Biscuit turns bold ideas into world-changing innovations
        </p>
      </div>
      <div className={styles.grid}>
        {/* <UserCard
					name='Raul Loeb Wald'
					title='Founder of Estu'
					image='/images/recipe_1.png'
				/> */}
        <UserCard name="Sunna" title="Partner" image="/images/recipe_2.png" />
      </div>
    </section>
  );
};

export default RecipeSection;
