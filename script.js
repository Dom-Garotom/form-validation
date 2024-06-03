// Objeto pessoa usado para agrupar as informações 

class Pessoa {
    _nome = String ;
    _data = String ;
    _id = geradorDeId(0,10000) ;

    constructor (nome, data){
        this._nome = nome;
        this._data = data;
    }
}


// Adicionar um item no local storage

var addLocalStorage = (key, item ) => {

    // Pega o array de valores já existente no local storage
    listPerson = JSON.parse(localStorage.getItem(key));

    // Se estiver vázio criamos um array vázio
    if (listPerson === null){
        listPerson = [];
    }

    // Fazemos um push do array atualizado 
    listPerson.push(item);

    // E mandamos para o local storage
    localStorage.setItem(key, JSON.stringify(listPerson));

    return listPerson;
}

// Remover um item do local storage

var ExcludeLocalStorage = (key, id ) => {

    // Pega o array de valores já existente no local storage
    let listPerson = JSON.parse(localStorage.getItem(key));

    // Filtra o array e retorna um novo array sem o elemento passado como parâmetro;
    listPerson = listPerson.filter( elemento => elemento !== id)

    
    // E mandamos para o local storage
    localStorage.setItem(key, JSON.stringify(listPerson));

}


// Função que pega os valores dos inputs e agrupa eles em um objeto chamado pessoa

var salvar = (event) =>{
    
    // Pega os valores dos inputs e previne o comportamento padrão do formulário

    var form = document.querySelector('form');
    
    form.addEventListener( 'submit' , (event) =>{
        event.preventDefault();
    })
    
    var nome = document.getElementById('inputName').value;
    var data = document.getElementById('inputDate').value;

    // Cria um objeto pessoa com os valores do input;

    var pessoa =  new Pessoa(nome, data);

    // Salva os valores no local storage

    var arrayDeElementos = addLocalStorage("Pessoas", pessoa);

    // Exibe os valores na tela
    exibir(arrayDeElementos)


}

// função que cria os elemntos Dom e os exibe na tela com os valores de cada item da lista

function exibir  (array) {
    const container = document.querySelector('#Container');
    
    array.map( elemento  =>{
        var card = document.createElement('div');
        card.classList.add('card');
        
        var nome = document.createElement('p');
        nome.classList.add('Nome');
        nome.textContent = elemento._nome;
    
        var data = document.createElement('p');
        data.classList.add('Data');
        data.textContent = elemento._data;
        
        card.appendChild(nome);
        card.appendChild(data);
        container.appendChild(card);
    }) 
}


// Função para excluri todos os elementos da tela  em teste
var excluir = () =>{
    const container = document.querySelector('#Container');
    const card = document.querySelectorAll('.card');
    const nome = document.querySelectorAll('.Nome');
    const data = document.querySelectorAll('.Data');

   

    if (card.length === 0){

    } else {
        card.forEach( (elemento) => {
            nome.parentNode.removeChild(nome);
            elemento.removeChild(data);
            elemento.parentNode.removeChild(elemento)
        })
    }
}



// gerador de id

function geradorDeId(min, max) {
    return Math.random() * (max - min) + min;
  }

