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
    // const imagens = document.querySelectorAll('.fade');
    // const observador = new IntersectionObserver(function(entradas) {
    //     entradas.forEach(function(entrada) {
    //         if (entrada.isIntersecting) {
    //             entrada.target.classList.add('visible');
    //         } else {
    //             entrada.target.classList.remove('visible');
    //         }
    //     });
    // }, { threshold: 0.6 });

    // imagens.forEach(function(imagem) {
    //     observador.observe(imagem);
    // });
    window.addEventListener('scroll', function() {
        const imagem = document.querySelector('.fade');
        if (window.scrollY === 0) {
            imagem.classList.remove('visible');
        } else if (!imagem.classList.contains('visible')) {
            imagem.classList.add('visible');
        }
        const scrollingText = document.querySelector('.texto-rolante');
        const additionalSection = document.querySelector('.additional-section');
        const additionalSectionTop = additionalSection.offsetTop;
    
        if (window.scrollY + window.innerHeight >= additionalSectionTop + 250) {
            scrollingText.style.opacity = '0';
        } else {
            scrollingText.style.opacity = '1';
            scrollingText.style.top = `${80 + window.scrollY}px`;
        }
        const nav = document.querySelector('.nav-bar');
        if (window.scrollY > 50) {
            nav.classList.add('rolado');
        } else {
            nav.classList.remove('rolado');
        }
    });    
}
document.addEventListener("DOMContentLoaded", () => {
    KeyFrameLoad();
});
