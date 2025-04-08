function showSideContent() {
    const side = document.getElementById("side-content");
    side.classList.toggle("show");
}
function KeyFrameLoad() {
    const container = document.getElementById("container-keyframe");
    setTimeout(() => {
        if (container) {
            container.style.opacity = "0";
            setTimeout(() => {
                container.style.display = "none";
            }, 1000);
        }
    }, 1000);
    const imagens = document.querySelectorAll('.fade');

    const observador = new IntersectionObserver(function(entradas) {
        entradas.forEach(function(entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            } else {
                entrada.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.6 });

    imagens.forEach(function(imagem) {
        observador.observe(imagem);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    KeyFrameLoad();
});