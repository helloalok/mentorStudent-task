import { useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const searchInputRef = useRef(null);
    const onSearch = () => {
        let query = searchInputRef.current.value;
        if(query == ""){
            return;
        }
        navigate(`/search?q=${query}`);
    }
    const onEnter = (event) => {
        if(event.keyCode === 13){
            onSearch()
        }
    }
    return(
        <div className="bg-primary">
            <div className="row container align-items-center" style={{height: 72}}>
                <div className="col">MentorStudents.org</div>
                <div className="col d-flex">
                    <input ref={searchInputRef} type="search" className="form-control" placeholder="Search ads" onKeyDown={onEnter} />
                    <button className="btn" onClick={onSearch}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header;