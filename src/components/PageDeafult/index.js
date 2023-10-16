import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function PageDefault(){
    return(
        <main>
            <Banner/>
            {/* renderização do coteúdo da página */}
            <Outlet/>
        </main>
    )
}