import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMain from "./pages/pageMain";
import PageTwo from "./pages/pageTwo";
import Menu from "./components/Menu";

console.log("location",window.location)

const page = window.location.pathname === "/" ? <PageMain/> : <PageTwo/>
function AppRoutes() {
  return(
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<PageMain/>}/>
        <Route path="/teste" element={<PageTwo/>}/>
        <Route path="*" element={<div>404 PAGE NOT FOUND</div>}/>
      </Routes>
    </BrowserRouter>
  )  
}

export default AppRoutes;
