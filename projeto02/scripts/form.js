// Arquivo usado para realizar requisições POST para o json-server

// Linkando o botão do forms em uma variável
const form = document.getElementsByTagName('form')[0]
const formBtn = form.lastElementChild

// Setando a URL e o port que está upando o json-server
const URL = 'http://localhost:5000'

// Função de validação de CPF
const TestaCPF = (strCPF) =>{

    let cpfArray = [] 
    // MUDAR essa parte da função 
    for(let i = 0; i < strCPF.length; i++){
        if(strCPF[i] == "." || strCPF[i] == '-'){
            continue
            
        }
        cpfArray.push(strCPF[i])
    }


    const parsedCPF = cpfArray.join('')

    let Soma;
    let Resto;
    Soma = 0;
    if (parsedCPF == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(parsedCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(parsedCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(parsedCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(parsedCPF.substring(10, 11) ) ) return false;
    return true;
}



// Adicionando um evento de clique no botão do formulário
formBtn.addEventListener('click', async ev => {


    // Recebendo os valores dos inputs do formulário
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const check = document.getElementById('checkbox')

    console.log(check.checked)



    if(name == "" || phone == "" || cpf == "" || email == "" || !check.checked) return


    // Realizando requisição POST na URL do json-server
    try{

        if(!(await TestaCPF(cpf))){
            throw new Error('CPF Inválido!')
            return
        }

        const response = await fetch(`${URL}/leads`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: name,
                phone: phone,
                cpf: cpf,
                email: email
            })
        })
    
        if(!response.ok){
            throw new Error('Deu erro')
        }

        return await response.json()


    }catch(err){

        alert(`Erro: ${err}`)

    }

  
})