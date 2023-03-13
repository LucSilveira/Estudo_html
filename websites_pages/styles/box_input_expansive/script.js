const search_clear = document.getElementById("mysearch");
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');
const icon = document.querySelector('.icon');

// Recebendo o click do botao
icon.onclick = function(e)
{
  search.classList.toggle('active');
}

clear.onclick = function(e)
{
  search_clear.value = ''
}