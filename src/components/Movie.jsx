import { motion } from "framer-motion";

function Movie({ movie }) {
    return (
        <>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                <p> {movie.title} </p>
                <img src={movie.image} alt="" />
            </motion.div>
        </>
    )
}

export default Movie;