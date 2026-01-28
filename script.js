// Seleciona apenas os botões da galeria de serviços
const galleryBtns = document.querySelectorAll('.gallery-nav-dots a');

galleryBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    removeActiveClass();
    btn.classList.add('active');
  });
});

function removeActiveClass() {
  galleryBtns.forEach(function(btn) {
    btn.classList.remove('active');
  });
}