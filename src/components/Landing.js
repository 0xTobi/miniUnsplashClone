import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Preloader from "./Preloader";
import Images from "./Images";

function Landing() {
    const { isFetching }  = useSelector(state => state.image);
    const { images }   = useSelector(state => state.image);

    

    return (
        <div>
            <SearchBar />
           <div>
              {images.length === 0 
              ? 
                <div>No results found </div> 
              : 
                isFetching   ? <Preloader /> : <Images />
              }
           </div>
        </div>
    )
  }
  
  export default Landing;
  