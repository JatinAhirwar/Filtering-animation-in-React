import { useEffect } from "react";

function Filter({ top100, setFiltered, filtered, activeGenre, setActiveGenre }) {

    useEffect(() => {
        if (activeGenre == "") {
            setFiltered(top100);
            return;
        }

        const filtered = top100.filter((movie) => movie.genre.includes(activeGenre));
        setFiltered(filtered);

    }, [activeGenre])

    return (
        <div className="filter-container">
            <button
                className={activeGenre === "" ? "active" : ""}
                onClick={() => setActiveGenre("")}
            > All </button>
            <button
                className={activeGenre === "Animation" ? "active" : ""}
                onClick={() => setActiveGenre("Animation")}
            > Animation </button>
            <button className={activeGenre === "Drama" ? "active" : ""} onClick={() => setActiveGenre("Drama")}> Drama </button>
            <button className={activeGenre === "Fantasy" ? "active" : ""} onClick={() => setActiveGenre("Fantasy")}> Fantasy </button>
        </div >
    )
}
export default Filter;