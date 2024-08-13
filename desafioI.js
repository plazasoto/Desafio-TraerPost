/* Función getPosts() ya asociada al botón en html inicialmente. */
const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try{
        // Consulta a la API.
        const respuesta = await fetch(url);
        // Convirtiendo la respuesta a objetos.
        const posts = await respuesta.json();
        // <div> donde irán los posts.
        const postData = document.getElementById("post-data");
        // Creando elemento <ul>
        const list = document.createElement("ul");
        // Agregando lista vacía al documento, dentro del div.
        postData.appendChild(list);

        // Iterando sobre el arreglo de posts.
        posts.forEach((post) => {
            // Título y cuerpo de cada post inividual.
            let postTitle = document.createElement("h4");
            let postBody = document.createElement("p");
            postTitle.innerText = post.title;
            postBody.innerText = post.body;

            // Juntando título y cuerpo dentro de un <li>
            let listItem = document.createElement("li");
            listItem.appendChild(postTitle);
            listItem.appendChild(postBody);

            // Agregando el <li> a la lista.
            list.appendChild(listItem);
        });

    }catch(error){
        console.error(error);
    }

}