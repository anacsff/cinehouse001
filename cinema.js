var catalogo = require("./database/catalogo.json");
//console.log(catalogo.data);

function listarTodosOsFilmes (filmes){
    for(let i = 0; i < filmes.length; i++){
        console.log(filmes[i].titulo)
    }
}

listarTodosOsFilmes(catalogo.data);

function listarFilmesEmCartaz(filmes){
    return filmes.filter((filme) => filme.emCartaz);
}

console.log(listarFilmesEmCartaz(catalogo.data));

function alterarStatusEmCartaz(id, filmes){
    const idxFilme = filmes.findIndex(filme => filme.codigo === id)
    //percorre a array e retorna o Index caso o código do filme seja igual ao id dado como parametro
    if(idxFilme >= 0){
        filmes[idxFilme].emCartaz = !filmes[idxFilme].emCartaz;
        return true;
    }
    //SE o Index encontrado for maior ou igual a zero (pois quer dizer que o id existe em alguma posição), irá acessar a chave emCartaz do objeto em questão e irá atribuir o valor contrario do valor inicial, se for true virará false e vice-versa.
    else{
        return false;
    }
}
 console.log(alterarStatusEmCartaz(505, catalogo.data))