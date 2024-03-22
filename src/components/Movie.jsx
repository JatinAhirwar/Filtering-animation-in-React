function Movie({movie}){
    return(
        <>
            <div>
                <p> {movie.title} </p>
                <img src={movie.image} alt=""/>
            </div>
        </>
    )
}

export default Movie;