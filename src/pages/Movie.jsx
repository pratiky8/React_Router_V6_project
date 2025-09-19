import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);
    

    return(
     <>
    <ul>

    {moviesData &&
    moviesData.results.map((curMovie)=>{
        return <Card key={curMovie.id} curMovie={curMovie}/>
    })}

    </ul>
    </>
    )
}