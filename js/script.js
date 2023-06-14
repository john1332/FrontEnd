function abrirPedidosPendentesMenu(){
    var pedidosPendentesAbrir = document.querySelector('.conteudoclientefreelancer')
    if(pedidosPendentesAbrir.classList.contains('conteudoclientefreelancerabrir')){
        pedidosPendentesAbrir.classList.remove('conteudoclientefreelancerabrir')
    } else {
        pedidosPendentesAbrir.classList.add('conteudoclientefreelancerabrir')
    }
}

function abrirMetodoPagamentoMenu(){
    var metodoPagamentoMenuAbrir = document.querySelector('.metododepagamentomenu')
    if(metodoPagamentoMenuAbrir.classList.contains('metododepagamentomenuabrir')){
        metodoPagamentoMenuAbrir.classList.remove('metododepagamentomenuabrir')
    } else {
        metodoPagamentoMenuAbrir.classList.add('metododepagamentomenuabrir')

    }
}

function pagarComBoletoPixAbrir(){
    var menuComCartao = document.querySelector('.pagarcomboletopix')


    if(menuComCartao.classList.contains('pagarcomboletopixabrir')) {
        menuComCartao.classList.remove('pagarcomboletopixabrir')
    } else {
        menuComCartao.classList.add('pagarcomboletopixabrir')

    }

    var menuComCartaoRem = document.querySelector('.pagarcomcartao')
    if(menuComCartaoRem.classList.contains('pagarcomcartaoabrir')) {
        menuComCartaoRem.classList.remove('pagarcomcartaoabrir')
    }

}

function pagarComCartaoAbrir(){
    var menuComCartao = document.querySelector('.pagarcomcartao')
    if(menuComCartao.classList.contains('pagarcomcartaoabrir')) {
        menuComCartao.classList.remove('pagarcomcartaoabrir')
    } else {
        menuComCartao.classList.add('pagarcomcartaoabrir')
    }

    var menuComCartao = document.querySelector('.pagarcomboletopix')
    if(menuComCartao.classList.contains('pagarcomboletopixabrir')) {
        menuComCartao.classList.remove('pagarcomboletopixabrir')
    }
}

function menuAbrir(){
    var menuSuperior = document.querySelector('.menusuperior')
    if(menuSuperior.classList.contains('abrir')) {
        menuSuperior.classList.remove('abrir')
    } else {
        menuSuperior.classList.add('abrir')
    }

}

function menuCadastroAbrir(){
    var menuCad = document.querySelector('.cadastromenu')
    if(menuCad.classList.contains('abrircadastro')) {
        menuCad.classList.remove('abrircadastro')
    } else {
        menuCad.classList.add('abrircadastro')
    }

}

function menuLoginAbrir(){
    var menuLog = document.querySelector('.loginmenu')
    if(menuLog.classList.contains('abrirlogin')) {
        menuLog.classList.remove('abrirlogin')
    } else {
        menuLog.classList.add('abrirlogin')
    }

}

function menuPreRegistroFreeLancerAbrir(){
    var menuLog = document.querySelector('.freelancerregistroaviso')
    if(menuLog.classList.contains('mostrartela123')) {
        menuLog.classList.remove('mostrartela123')
    } else {
        menuLog.classList.add('mostrartela123')
    }

}

function menuRegistroFreeLancerAbrir(){
    var menuLog = document.querySelector('.freelancerregistro')
    if(menuLog.classList.contains('mostrartela123')) {
        menuLog.classList.remove('mostrartela123')
    } else {
        menuLog.classList.add('mostrartela123')
    }

}



const controls = document.querySelectorAll('.controle')
let itemCorrente = 0;
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach(control =>{
    control.addEventListener('click',() => {
        const isLeft = control.classList.contains('seta-esquerda')
        console.log('controle foi clicado',isLeft)

        if(isLeft){
            itemCorrente -= 1
        } else{
            itemCorrente += 1
        }

        if(itemCorrente >= maxItems){
            itemCorrente = 0
        }

        if(itemCorrente < 0){
            itemCorrente = maxItems - 1
        }

        items.forEach(item => item.classList.remove('item-corrente'))
        items[itemCorrente].scrollIntoView({
            inline: "center",behavior: "smooth",
        })
        items[itemCorrente].classList.add('item-corrente')
    })
})
