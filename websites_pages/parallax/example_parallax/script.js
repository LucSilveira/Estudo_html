let wave1 = document.querySelector("#wave1");
let wave2 = document.querySelector("#wave2");
let wave3 = document.querySelector("#wave3");
let wave4 = document.querySelector("#wave4");

// Recebendo o scroll da página
window.addEventListener( 'scroll', function(e)
{
  let valScroll = window.scrollY;

  wave1.style.backgroundPositionX = ( ( 400 + valScroll * 4 ) + 'px' );
  wave2.style.backgroundPositionX = ( ( 300 + valScroll * -4 ) + 'px' );
  wave3.style.backgroundPositionX = ( ( 200 + valScroll * 2 ) + 'px' );
  wave4.style.backgroundPositionX = ( ( 100 + valScroll * -2 ) + 'px' );
})