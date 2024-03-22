import { useEffect } from "react";

function Filter(){
    return(
        <div className="filter-container">
            <button>All</button>
            <button>Comedy</button>
            <button>Action</button>
            <button>Animation</button>
        </div>
    )
}
export default Filter;