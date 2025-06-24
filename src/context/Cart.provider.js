import React, { useState, createContext } from 'react'
const CartContext = createContext({})


function CartProvider(props) {
    const [carrinho, setCarrinho] = useState([])
    const [qtyCarrinho, setQtyCarrinho] = useState(0)
    const [quantidadeCesta, setQuantidadeCesta] = useState(0)
    const [quantidadeProduto, setQuantidadeProduto] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)


    function ValidaCarrinho() {
        let context = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        return context
    }

    const addCarrinho = (item, quantidadeAdicionar, tamanhoSelecionado) => {
        let carrinhoLista = ValidaCarrinho();
        const tamanho = tamanhoSelecionado || 40; 
        const idItemNoCarrinho = item.cod_tenis + '-' + tamanho;
        const itemExistente = carrinhoLista.find(produto => produto.idCarrinho === idItemNoCarrinho);
    
        const quantidade = quantidadeAdicionar || 1;
    
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            const novoItem = {
                ...item,
                idCarrinho: idItemNoCarrinho,
                quantidade: quantidade,
                tamanho: tamanho,
            };
            carrinhoLista.push(novoItem);
        }
    
        localStorage.setItem('cart', JSON.stringify(carrinhoLista));
        setCarrinho(carrinhoLista);
        setQtyCarrinho(carrinhoLista.length);
        alert('Produto adicionado ao carrinho!');
    };

    const comprarItemUnico = (item, quantidade, tamanho) => {
        const itemParaComprar = {
            ...item,
            idCarrinho: item.cod_tenis + '-' + tamanho,
            quantidade: quantidade,
            tamanho: tamanho,
        };
        const novoCarrinho = [itemParaComprar];
        localStorage.setItem('cart', JSON.stringify(novoCarrinho));
        setCarrinho(novoCarrinho);
        setQtyCarrinho(1);
    };

    function incrementoCarrinho(idCarrinho) {
        let carrinhoLista = ValidaCarrinho();
        const item = carrinhoLista.find(produto => produto.idCarrinho === idCarrinho);
        if (item) {
            item.quantidade++;
            localStorage.setItem('cart', JSON.stringify(carrinhoLista));
            setCarrinho(carrinhoLista);
            total();
        }
    }


    const decrementoCarrinho = (idCarrinho) => {
        let carrinhoLista = ValidaCarrinho();
        const item = carrinhoLista.find(produto => produto.idCarrinho === idCarrinho);
        if (item) {
            item.quantidade--;
            if (item.quantidade <= 0) {
                deleteCarrinho(idCarrinho);
            } else {
                localStorage.setItem('cart', JSON.stringify(carrinhoLista));
                setCarrinho(carrinhoLista);
                total();
            }
        }
    }

    function incrementoQuantyProduto(item) {
        if (carrinho.find(produto => item.cod_tenis == produto.cod_tenis)) {
            incrementoCarrinho(item)
            console.log("tem no carrinho")
        } else {
            if (item.estoque == item.quantidade) {
                console.log("valor igual ao estue maximo" )
                console.log( item)
            } else {
                console.log("adicionou + 1 ")
                console.log("adicionou")
                console.log(item.quantidade++ )
                console.log( item)

            }
        }
    }

    function limparCarrinho() {
        setCarrinho([]);
        setQtyCarrinho(0);
        setValorTotal(0);
        localStorage.removeItem('cart');
        localStorage.removeItem('valorTotal');
        localStorage.removeItem('qtyCarrinho');
        alert("Carrinho foi limpo!");
}

    function decrementoQuantyProduto(item) {
        if (carrinho.find(produto => item.cod_tenis == produto.cod_tenis)) {
            decrementoCarrinho(item)
        } else {
            if (item.quantidade == 1) {
                console.log("valor igual a 1 " )
            } else {
               console.log("adicionou - 1")
               console.log(item.quantidade-- )
               console.log( item)
            }
        }
    }

    function total() {
        let totalItem = 0
        const carrinhoList = JSON.parse(localStorage.getItem('cart'))
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        carrinhoList.forEach((value) => {
            console.log(value.preco + " <- preco // quanti -> " + value.quantidade)
            console.log("valor final -> " + (value.preco * value.quantidade))
            totalItem = totalItem + (value.preco * value.quantidade)
            setValorTotal(totalItem)
            localStorage.setItem('valorTotal', JSON.stringify(totalItem))
        })
    }


    const deleteCarrinho = (idCarrinho) => {
        const remove = carrinho.filter(items => items.idCarrinho !== idCarrinho)
        localStorage.setItem("cart", JSON.stringify(remove))
        setCarrinho(remove)
        setQtyCarrinho(remove.length)
    }

    const quantidadeCarrinho = () => {
        let quantidade = ValidaCarrinho()
        setQtyCarrinho(quantidade.lenght)
    }

    const listarCarrinho = () => {
        let lista = ValidaCarrinho()
        let valor = localStorage.getItem('valorTotal')
        setCarrinho(lista)
        setValorTotal(valor)
    }

    return (
        <CartContext.Provider
            value={{
                deleteCarrinho, decrementoCarrinho, incrementoCarrinho,
                addCarrinho, quantidadeCarrinho, listarCarrinho,
                carrinho, qtyCarrinho, quantidadeProduto, quantidadeCesta,
                valorTotal, total, incrementoQuantyProduto, decrementoQuantyProduto,
                limparCarrinho, comprarItemUnico
            }}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContext;
export { CartProvider }