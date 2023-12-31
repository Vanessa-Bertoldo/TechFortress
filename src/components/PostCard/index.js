import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import Button from "components/Button";

export default function Post({post}){
    return(
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa2.jpg`}
                    alt="imagem de capa do post"
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <Button>Ler</Button>
            </div>
        </Link>
       
    )
}