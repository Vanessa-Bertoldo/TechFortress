import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

export default function PostPage(){
    const params = useParams();
    return(
        <h1>TESTE {params.id}</h1>
    )
}