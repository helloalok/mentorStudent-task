import {Routes, Route} from "react-router-dom";
import HomePage from "./components/home.page";
import SearchPage from "./components/search.page";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
    )
}

export default Router