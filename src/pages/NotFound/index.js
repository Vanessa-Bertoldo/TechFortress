import Button from "components/Button";
import styles from "./noteFound.module.css";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const nav = useNavigate();
    return(
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não enontrada</h1>
                <p className={styles.paragrafo}>
                    Tem certeza que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial    
                </p>
                <div 
                    className={styles.botaoContainer}
                    onClick={() => nav("/")}>
                    <Button size="lg">
                        Voltar
                    </Button>
                </div>
            </div>
            <div className={styles.espacoEmBranco}/>
        </>
        
    )
}