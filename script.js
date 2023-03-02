const night = document.getElementById('kotak2');
const warm = document.getElementById('kotak1');
const body = document.querySelector('body');

night.addEventListener('click', function () {

   if ( night.classList.toggle('active')) {
    night.style.marginLeft = '450px';
    body.style.background = 'rgb(2,2,2)';
    body.style.margin = ' 0 auto';
    warm.style.background = 'rgb(2,2,2)';
   } else {
      night.style.marginLeft = '0px';
      body.style.background = '#FEFCFE';
      body.style.margin = ' 0 auto';
      warm.style.background = '#E9E9EB';
      }


});