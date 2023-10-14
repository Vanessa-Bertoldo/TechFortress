import { Link, useLocation } from "react-router-dom"
import styles from "./Menu.module.css"
import MenuLink from "../MenuLink";

export default function Menu(){
    const localization = useLocation();
    
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/teste">
                    teste
                </MenuLink>
            </nav>
        </header>
    )
}