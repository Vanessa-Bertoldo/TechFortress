import styles from "./Footer.module.css";
import { ReactComponent as MarkRegister } from "assets/mark.svg";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <MarkRegister/>
            Desenvolvido por Vanessa Bertoldo
        </footer>
    )
}