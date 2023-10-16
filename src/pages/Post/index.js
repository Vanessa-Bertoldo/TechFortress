import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
import posts from "json/posts.json";
import PostModel from "components/postModel";

export default function PostPage(){
    const params = useParams();
    const post = posts.find((post) =>{
        return post.id === Number(params.id)
    })
    console.log(post)
    return(
        <PostModel
            photo={`/assets/posts/${post.id}/capa2.jpg`}
            title={post.titulo}
        >
            Text
        </PostModel>
    )
}