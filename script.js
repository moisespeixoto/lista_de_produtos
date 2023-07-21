class Produto{
    constructor(){
        this.id = 1;
        this.arrayProdutos =[];
    }

    Adicionar(){
        let produto = this.lerDados()
        if(this.Validar(produto) == true){
            this.Salvar(produto)
        }
        this.Listar()
        this.Cancelar()
        
    }

    lerDados(){
        let produto ={}
        
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('pdNome').value
        produto.precoProduto = document.getElementById('pdPreco').value

        return produto
    }
    Validar(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += 'Por favor, insira o nome do produto! \n'
        }
        if(produto.precoProduto == ''){
            msg += 'Por favor, insira o preço do produto! \n'
        }
        if(msg != ''){
            alert(msg)
        return false
        }

        return true
    }
    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id++;
    }
    Listar(){
        let tBody = document.getElementById('tBody')
        tBody.innerText = ''

        for( let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tBody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;
            let imagem = document.createElement('img')
            imagem.src = 'delete.svg'
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")")
            td_del.appendChild(imagem)
        }
    }
    Cancelar(){
        document.getElementById('pdNome').value = ''
        document.getElementById('pdPreco').value = ''
    }
    Deletar(id){
        let tBody = document.getElementById('tBody')
        for ( let i=0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tBody.deleteRow(i)
            }
        }
        alert('O ítem foi deletado com sucesso.')
    }
}
var produto = new Produto();
