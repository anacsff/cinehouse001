var catalogo = require("./database/catalogo.json");
//console.log(catalogo.data);

function listarTodosOsFilmes (filmes){
    for(let i = 0; i < filmes.length; i++){
        console.log(filmes[i].titulo)
    }
}

listarTodosOsFilmes(catalogo.data);