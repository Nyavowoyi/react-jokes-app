/* eslint-disable react/prop-types */

export const Joke = ({joke, imgId}) => {
    const randImgSrc = `./gifs/${imgId}.gif`
    return (
        <>
            <p>{joke.category} Joke</p>
            {joke.joke !== undefined ?
                <div className="card">
                    <p>{joke.joke !== undefined ? joke.joke : null}</p>
                </div> 
            : null}
            {joke.setup !== undefined ? (
                <>
                    <div className="card">
                        <p>{joke.setup !== undefined && joke.setup}</p>
                        <p>{joke.delivery !== undefined && joke.delivery}</p>
                    </div>
                </>
            )
            : null }
            {
                !joke.error ? 
                <p><img src={randImgSrc} height="150" /></p>
                :<p>Awww... An error has occured. {joke.error}</p>
            }
        </>
    )
}