function contaAbrir(){

    var outrosFecharMenu = document.querySelector('.notificacoes')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.seguranca')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.metododepagamento')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.suporte')
    outrosFecharMenu.classList.remove('mostrarselecionado')
   
    var contaAbrirMenu = document.querySelector('.conta')
    if(contaAbrirMenu.classList.contains('mostrarselecionado')) {

    } else {
        contaAbrirMenu.classList.add('mostrarselecionado')
    }

}

function notificacoesAbrir(){
    var outrosFecharMenu = document.querySelector('.conta')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.seguranca')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.metododepagamento')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.suporte')
    outrosFecharMenu.classList.remove('mostrarselecionado')
   
    var notificacoesAbrirMenu = document.querySelector('.notificacoes')
    if( notificacoesAbrirMenu.classList.contains('mostrarselecionado')) {

    } else {
     notificacoesAbrirMenu.classList.add('mostrarselecionado')
    }
}

function segurancaAbrir(){
    var outrosFecharMenu = document.querySelector('.conta')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.notificacoes')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.metododepagamento')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.suporte')
    outrosFecharMenu.classList.remove('mostrarselecionado')
   
    var segurancaAbrirMenu = document.querySelector('.seguranca')
    if( segurancaAbrirMenu.classList.contains('mostrarselecionado')) {

    } else {
     segurancaAbrirMenu.classList.add('mostrarselecionado')
    }
}

function metododepagamentoAbrir(){
    var outrosFecharMenu = document.querySelector('.conta')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.notificacoes')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.seguranca')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.suporte')
    outrosFecharMenu.classList.remove('mostrarselecionado')
   
    var segurancaAbrirMenu = document.querySelector('.metododepagamento')
    if( segurancaAbrirMenu.classList.contains('mostrarselecionado')) {

    } else {
     segurancaAbrirMenu.classList.add('mostrarselecionado')
    }
}

function suporteAbrir(){
    var outrosFecharMenu = document.querySelector('.conta')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.notificacoes')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.seguranca')
    outrosFecharMenu.classList.remove('mostrarselecionado')
    var outrosFecharMenu = document.querySelector('.metododepagamento')
    outrosFecharMenu.classList.remove('mostrarselecionado')
   
    var suporteAbrirMenu = document.querySelector('.suporte')
    if( suporteAbrirMenu.classList.contains('mostrarselecionado')) {

    } else {
     suporteAbrirMenu.classList.add('mostrarselecionado')
    }
}