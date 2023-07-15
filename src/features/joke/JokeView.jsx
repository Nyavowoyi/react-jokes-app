import { useSelector, useDispatch } from "react-redux"
import { fetchJoke } from "./jokeSlice"
import { Joke } from "../../components/Joke"
export const JokeView = () => {
    const jokeState = useSelector((state) => state.joke)
    const dispatch = useDispatch()
  return (
    <>
        <h1 className="logo-header">AtsuWeb Jokes App</h1>
        <div className="jokesContainer">
            {
                jokeState.loading ?
                <p>Loading Joke...</p>
                :
                null
            }
            {
                (!jokeState.errorMsg && (jokeState.joke.joke !== undefined || jokeState.joke.setup !== undefined)) ? 
                <>
                    <Joke joke={jokeState.joke} imgId={jokeState.randImg} />
                </>
                :
                <p style={{ color: 'red',  }}>{jokeState.errorMsg}</p>
            }
            <button style={{ border: '2px solid black', color: 'grey' }} onClick={() => {
                dispatch(fetchJoke())
            }}>
                {jokeState.errorMsg ? <><span className="emoji-large">Try Again &#x1F60F;&#x1F613;</span></> : jokeState.loading ? <><span className="emoji-large">Loading &#x1F602;...</span></> : (jokeState.showGetStarted ? <><span className="emoji-large">Get Started &#x1F601; &#x1F602; &#x1F644;</span></> : <><span className="emoji-large">Load More &#x1F602; &#x1F644;</span></>) }
            </button>
        </div>
        <div style={{ marginTop: '25px', marginBottom: 0 }}>
            <code className="read-the-docs">API VERSION {jokeState.api_version}</code>
        </div>
    </>
  )
}
