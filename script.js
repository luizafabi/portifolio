// Função para exibir a imagem em um lightbox
function exibirImagem(imagem) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    lightbox.style.display = "flex";
    lightboxImg.src = imagem.src;
  }
  
  // Função para fechar o lightbox
  function fecharLightbox() {
    var lightbox = document.getElementById("lightbox");
    
    lightbox.style.display = "none";
  }
  
  // Associa as funções aos elementos do DOM
  var imagens = document.getElementsByClassName("portfolio-img");
  for (var i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener("click", function() {
      exibirImagem(this);
    });
  }
  
  var btnFechar = document.getElementById("btn-fechar");
  btnFechar.addEventListener("click", fecharLightbox);
  document.getElementById("btnProjetos").addEventListener("click", function() {
    window.location.href = "projetos.html";
  });