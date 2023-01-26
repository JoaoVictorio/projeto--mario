const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFechaModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


botaoFechaModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});









