$(document).ready(function() {
    // Ao enviar o formulário, adiciona o item na lista
    $('#form').submit(function(event) {
      event.preventDefault(); // Evita o comportamento padrão de envio do formulário
      const newItemText = $('#newItem').val().trim();
      if (newItemText !== '') {
        const newItem = $('<li>' + newItemText + '</li>');
        $('#lista').append(newItem);
        $('#newItem').val(''); // Limpa o campo de texto após adicionar o item
      }
    });
  
    // Ao clicar em um item da lista, aplica o efeito de linha
    $(document).on('click', 'li', function() {
      $(this).toggleClass('selected');
    });
  });
  