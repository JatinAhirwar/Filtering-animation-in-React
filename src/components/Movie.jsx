import { motion } from "framer-motion";

function Movie({movie}){
    return(
        <>
            <motion.div layout>
                <p> {movie.title} </p>
                <img src={movie.image} alt=""/>
            </motion.div>
        </>
    )
}

export default Movie;