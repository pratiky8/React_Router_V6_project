import "../../custom_css/Card.css";

export  const Card = ({curMovie}) =>{

    const {poster_path, id}=curMovie;
    const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";



    return(
        <>
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={posterUrl} className="poster" alt={id} />
                </div>
                <div className="ticket-container">
                    <div className="ticket-content">
                        <button className="ticket_buy-btn">
                            Watch Now
                        </button>
                    </div>
                </div>
            </div>
        </li>
        </>
    )
}