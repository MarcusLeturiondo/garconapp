$('.collection-item').on('click', function(){
  var $badge = $('.badge', this);
  if($badge.length == 0){
    $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
  }
  $badge.text(parseInt($badge.text()) + 1); //Converte para int e soma 1.
});

$('#confirmar').on('click', function(){
  var texto = '';
  $('.badge').parent().each(function(){
    var produto = this.firstChild.textContent;
    var quantidade = this.lastChild.textContent;

    texto += produto + ': ' + quantidade + ', ';
  });
  $('#resumo').text(texto);
});

$('.modal-trigger').leanModal();
