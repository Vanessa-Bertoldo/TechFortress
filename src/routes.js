import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMain from "./pages/pageMain";
import PageTwo from "./pages/pageTwo";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PageDefault from "components/PageDeafult";
import PostPage from "pages/Post";
import NotFound from "pages/NotFound";

console.log("location",window.location)

//const page = window.location.pathname === "/" ? <PageMain/> : <PageTwo/>
function AppRoutes() {
  return(
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<PageDefault/>}>
        <Route path="/" element={<PageMain/>}/>
        </Route>
        <Route path="/news" element={<PageTwo/>}/>
        <Route path="posts/:id" element={<PostPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )  
}

export default AppRoutes;
