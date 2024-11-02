import styles from "./Bloque2.module.scss";

const Bloque2 = ({ data }) => {
  return (
    <section className={styles.coMain}>
      {/* utilicé una imagen X, ya que el video no renderizaba*/}
      <img
        src="https://media.wearemotto.com/wp-content/uploads/2023/08/28091825/CLO_Hero_LAPTOP_8A.jpg"
        alt="image-hero"
        className={styles.img}
      />
      <article className={styles.card}  >
        <div className={styles.contentCard}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      </article>
    </section>
  );
};

export default Bloque2;
