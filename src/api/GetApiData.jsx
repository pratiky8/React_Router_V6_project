export const GetApiData = async(page=1) =>{
    
   try {

     const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
    );

    const data= await response.json();
    return data;

   } catch (error) {
    console.log(error);
   }
    
}