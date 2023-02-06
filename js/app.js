window.addEventListener('load', () => {
    document.getElementById('loader').classList.toggle('loader2');
    // Inicializamos AOS 1 segundo despues de que se cargue la pagina
    setTimeout(() => {
        AOS.init();
    }, 400);

    // Obtenemos todas las cards de services
    const cardServices = document.querySelectorAll('.card-services');
    // Recorremos todas las cards y las impares colocamos el atributo data-aos="flip-left" y las pares data-aos="flip-right", agregando una data-aos-duration="3000"
    cardServices.forEach((card, index) => {
        if (index % 2 == 0) {
            card.setAttribute('data-aos', 'flip-left');
        }
        else {
            card.setAttribute('data-aos', 'flip-right');
        }
        card.setAttribute('data-aos-duration', '1000');
    });

    // Obtenemos todas las cards de projects
    const cardProjects = document.querySelectorAll('.card-project');
    cardProjects.forEach((card, index) => {
        card.setAttribute('data-aos', 'zoom-in');
        card.setAttribute('data-aos-duration', '1000');
    });
});


// scroll to top
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 300)
})

document.querySelector('.scrollTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    })
})

window.onload = function () {
    window.scrollTo({
        top: 0,
    })
}