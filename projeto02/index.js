/*

Desenvolvimento de um arquivo HTML, CSS e JS a partir dos mockups apresentados;
Utilização de um repositório git remoto durante o desenvolvimento;
Ao clicar no botão Tenho Interesse, deverá abrir o modal com formulário;
O formulário deve conter os campos: Nome, Telefone, CPF e E-mail, todos os campos são obrigatórios e devem ser validados tanto em obrigatoriedade quanto em formato. Além disso, os campos Telefone e CPF devem possuir máscaras;
O formulário deverá ter checkbox de aceite de termos de uso, sendo este obrigatório;
Ao submeter as informações do formulário, deverá ser realizada uma requisição AJAX para armazenar o lead.

Dicas:
Utilizar bibliotecas vanilla para carrousel e máscara;
Utilizar o pacote NodeJS chamado json-server para mockup da API de leads.

Desafios:
Entender como funciona um servidor Nginx e colocar no ar no servidor de homologação da Raccoon;
Criar um automatizador de tarefas utilizando Gulp ou Webpack;
Utilizar SASS como pré-processador de CSS.

*/


// Colocando a função de collapsible

const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    
    coll[i].addEventListener("click", () => {
    
        if(coll[i].classList[1] == "active"){
            coll[i].classList.remove("active")
        }else{
            coll[i].classList.add("active")
        }

        let content = coll[i].nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}