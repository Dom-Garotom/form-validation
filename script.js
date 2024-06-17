// Objeto pessoa usado para agrupar as informações 

class Pessoa {
    _nome = String ;
    _data = String ;
    _id = geradorDeId(0,1000) ;

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
}

// Remover um item do local storage

var ExcludeLocalStorage = (key, elementoRemovido ) => {

    // Pega o array de valores já existente no local storage
    let listPerson = JSON.parse(localStorage.getItem(key));

    let newArray = [];

    if (typeof elementoRemovido  == 'string'){
        console.log('string')

    }

    //salvamos um novo array com os elementos que passem no filtro
    newArray = listPerson.filter( elemento =>  elemento._id !== elementoRemovido._id);

    
    // E mandamos para o local storage
    localStorage.setItem(key, JSON.stringify(newArray));

}


    
// Pega os valores dos inputs e previne o comportamento padrão do formulário

var form = document.querySelector('#form');
    
form.addEventListener( 'submit' , (event) =>{
    event.preventDefault();

    var nome = document.getElementById('inputName').value;
    var data = document.getElementById('inputDate').value;
    
    // Cria um objeto pessoa com os valores do input;
    
    var pessoa =  new Pessoa(nome, data);
    
    // Salva os valores no local storage
    
    addLocalStorage("Pessoas", pessoa);

        
        
        
        
    excluir()
    exibir()
})
    
    
// função que cria os elemntos Dom e os exibe na tela com os valores de cada item da lista
    
    
function exibir  () {
    let array = JSON.parse(localStorage.getItem('Pessoas'))
    const container = document.querySelector('#Container');
    
    array.map( ( elemento ,)  =>{
        var card = document.createElement('tr');
        card.classList.add('card');
        
        
        
        var nome = document.createElement('td');
        nome.classList.add('Nome');
        nome.textContent = elemento._nome;
        
        var data = document.createElement('td');
        data.classList.add('Data');
        data.textContent = elemento._data;

        var acoes = document.createElement('td');
        acoes.classList.add('acoes');
        
        var buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'Editar informações';
        buttonEdit.classList.add('edit');

        var buttonRemove = document.createElement('button');
        buttonRemove.textContent = "Remover pessoa";
        buttonRemove.classList.add('remove')
        
        card.appendChild(nome);
        card.appendChild(data);
        card.appendChild(acoes);
        acoes.appendChild(buttonEdit);
        acoes.appendChild(buttonRemove)
        container.appendChild(card);
        
        
        // Ações de cada card
        
        // Editar informação
        buttonEdit.addEventListener('click', () =>{

            alert('Escreva suas novas informações!');
            var novoNome = prompt('Escreva seu nome corretamente!'); 
            var novaData = prompt('Escreva sua data correta!');


            data.textContent = novaData;
            nome.textContent = novoNome;
        })

        //Remover card

        buttonRemove.addEventListener('click', () =>{
            card.remove();
            ExcludeLocalStorage('Pessoas', elemento)
        })



    }) 
}


// Função para excluri todos os elementos da tela 
var excluir = () =>{
    const container = document.querySelector('#Container');
    container.innerHTML = '';
}



// gerador de id

function geradorDeId(min, max) {
    return Math.random() * (max - min) + min;
  }

