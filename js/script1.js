class Formulario {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
 
    }
//salvar faz a leituras dos dados
    salvar(){
        let produto = this.lerDados();

        //se a função que esta chamando for igual a verdadeiro
        if(this.validaCampos(produto)){
            //aqui voce esta chamando o metodo adicionar//
            this.adicionar(produto);
        }

        // aqui ela vai estar mostrando a função listaTabela
        this.listaTabela();
        //aqui ele chama a ação cancelar
        this.Cancelar();
    }

    //esta função vai listar os dados na tabela atraves a array que foi criado
    listaTabela(){
        //Criar uma variavel chamada tbody e acessar ela usando document.getelementbyid
        let tbody = document.getElementById('tbody');

        //Para que nao fique valores duplicado vamos inserir o valor vazio no texto
        tbody.innerText = '';

        //a gente agora vai listar, iremos usar o 'for' para acessar a array e ver quanto registro possuem la usando o length e depois incrementar ele a variavel 'i'
        for(let i = 0; i < this.arrayProdutos.length; i++){
            //criar uma linha para cada dado inserido do usuario usando a função insertRow
            let tr = tbody.insertRow();

            //criar uma coluna para cada dado(id,nome,idade e ação) usando a função insertcell
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_idade = tr.insertCell();
            let td_ações = tr.insertCell();

            //inserir os dados da array na tabela
            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeusuario;
            td_idade.innerText = this.arrayProdutos[i].idade;

            //vamos centralizar nossa ordem ou id usando comando para chamar uma função no css, que seria a função classList.add
            td_id.classList.add('center');

            //inserir as imagems de deletar e editar, pra isso vamos criar um elemento do tipo imagem
            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.svg';

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';
            //colocar um atributo para essa imagem iremos usar o serAttribute('evento','ação'), nesta função você pode colocar dois parametro... aqui estarei usando o de clique e de ação 
            imgDelete.setAttribute("onclick","formulario.deletar("+ this.arrayProdutos[i].id +")");
            // Para que apague apenas a linha que vc deseja deve especificar a array

            //AppendChild faz com que a tag imagem fique dentro do <td><img></td>
            td_ações.appendChild(imgEdit);
            td_ações.appendChild(imgDelete);

        }
    }

    //Adicionar o elemento na array
    adicionar(produto){
        //aqui ele vai estar acessar a array que esta vazia arrayProdutos e puxando ela com a funçao push alguns campos//
        this.arrayProdutos.push(produto);
        //aqui ele vai estar dando um acrescimo na ordem
        this.id++;
    }

    //Vai fazer a leitura das input
    lerDados(){
        let produto = {}

        produto.id = this.id;
        //tudo que for digitado no campo nome sera passado para o produto nome
        produto.nomeusuario = document.getElementById('nome').value;
        //tudo que for digitado no campo idade sera passado para o produto idade
        produto.idade = document.getElementById('idade').value;
        //faz a leitura dos valores e retorna para produto
        return produto;
    }

    validaCampos(produto){
        let msg ='';

        //vamos ver se os campos estao vazios usando a condição if
        if(produto.nomeusuario == ''){
            //pra informar caso as input estejam vazias que deve ser inserido um valor
            msg +='- Informe o nome do Usuario! \n ';
        }

        if(produto.idade == ''){
            //pra informar caso as input estejam vazias que deve ser inserido um valor
            msg +='- Informe a Idade do Usuario! \n ';
        }

        // fazer um alerta para o usuario que os campos estão vazios
        if(msg !=''){
            alert(msg);
            return false
        }

        //caso nao caia em nenhuma dessas condiçoes ele retorna como verdadeiro
        return true;

    }

    //limpar os campos do formulario
    Cancelar(){

        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        
    }

    //Para deletar a linha desejada
    deletar(id){
        alert('Deletar a Ordem'+ id);
    }

}

var formulario = new Formulario();
