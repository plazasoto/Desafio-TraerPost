console.log("(ᓀ‸ᓂ)");

const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try{
        const respuesta = await fetch(url);
        const posts = await respuesta.json();
        console.log(posts);
    }catch(error){
        console.error(error);
    }

}