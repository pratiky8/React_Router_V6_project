import { Navigate, NavLink, useNavigate, useRouteError } from "react-router-dom"
import errorImg from "../assets/error.jpg";

export const Errorpage = () =>{

    const error= useRouteError();
    const navigate=useNavigate();

    function centerStyle() {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    textAlign: "center"
  };
}
    

    if(error.status === 404 ){
        return (
            <section >
                <div>
                    <figure style={centerStyle()}>
                        <img src={errorImg} alt="404 page"  style={ {maxWidth: "400px", width: "100%", height: "auto" }} />
                    </figure>
                </div>
                <div style={{ textAlign: "center" }}>
                    <p>The page you are looking for could not be found</p>
                    <p>May be your URL is wrong !!</p>
                    {/* you can make button as well or use NavLink */}
                    <button onClick={()=>{navigate(-1)}} style={{ padding: "10px 20px", borderRadius: "8px", border: "none", backgroundColor: "#cef50abd", color: "#0a0909ff", cursor: "pointer",}}>
                        Back to previous Page
                         </button>

                         {/* <NavLink to="/" style={{color: "#003df5ff"}}>
                            Back To Home
                         </NavLink> */}
                </div>
            </section>
        )
    }
    console.log(error);

    return <h1>404 Error Page!!!</h1>
}