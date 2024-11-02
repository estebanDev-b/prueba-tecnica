import styles from  "./Bloque1.module.scss";

const Bloque1 = ({ data }) => {
  return (
    <header className={styles.header}>
      <div className={styles.coTextHeader}>
        <p className={styles.smallText}>{data.text_1}</p>

        <h1 className={styles.bigTitle}>
          <span>{data.words[0].word} </span>
          <span className={styles.canela}>{data.words[1].word}</span>
          <span> {data.words[2].word}</span>
        </h1>

        <p className={styles.smallText}>{data.text_2}</p>
      </div>
    </header>
  );
};

export default Bloque1;
//header-text-small-1
//header-text-small-2