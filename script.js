var exibir = (event)=>{
    var form = document.querySelector('form');
    var nome = document.getElementById('inputName').value;
    var data = document.getElementById('inputDate').value;

    form.addEventListener('submit' , (event) =>{
        event.preventDefault();
    })

    console.log(`seu nome: ${nome} \nsua data de nascimento: ${data} `);
}