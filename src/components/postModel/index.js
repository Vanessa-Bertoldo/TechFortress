import styles from "./PostModel.module.css";

export default function PostModel({children, photo, title}){
    return(
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${photo})`}}
            >   
            </div>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}