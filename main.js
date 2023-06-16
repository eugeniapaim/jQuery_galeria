$(document).ready(function() {
    //console.log($('#btcancel')) //Mostrar seletor no console

    /*document.querySelector('header button').addEventListener('click',function(){

    }) tudo isso pode ser abreviado com o formato abaixo, usando jquerry*/

    $('header button').click(function(){
        $('form').slideDown(); //traz o formulário a tela
    })

    $('#btcancel').click(function() {
        $('form').slideUp(); //recolhe o formulário de volta 
    })

    $('form').on('submit', function(event){
        event.preventDefault();
        const enderecoNovaImg = $('#new-img-address').val();
        const novoItem = $('<li style = "display:none"></li>');
        $(`<img src="${enderecoNovaImg}"/>`).appendTo(novoItem);
        $(`<div class="overlay-img-link">
            <a href="${enderecoNovaImg}" target="_blank" title = "Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); //método de inserção, inserir o 'novoItem' a uma nova ul
        $(novoItem).fadeIn(1000); //transição em fade
        $('#new-img-address').val('');
    })
})