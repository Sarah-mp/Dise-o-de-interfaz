window.addEventListener('load', function () {
    const currentUrl = (window.location.href.split('/')[window.location.href.split('/').length-1]).split('.')[0];
    if (currentUrl == "index") {
        var glider = new Glider(document.querySelector('.lista-1'), {
            slidesToShow: 8,
            slidesToScroll: 1,
            draggable: true,
            dots: '.indicadores-1',
            arrows: {
                prev: '.btn-carrusel-ant-1',
                next: '.btn-carrusel-sig-1'
            },
            scrollLock: true
        });

        // Función para iniciar el auto-desplazamiento
        function startAutoGlide() {
            return setInterval(() => {
                glider.scrollItem(glider.slide + 1);
            }, 3000); // Cambia cada 3000 milisegundos (3 segundos)
        }

        let autoGlide = startAutoGlide();

        // Opcional: Detener el auto-desplazamiento al interactuar con el carrusel
        document.querySelector('.lista-1').addEventListener('mouseover', () => {
            clearInterval(autoGlide);
        });

        document.querySelector('.lista-1').addEventListener('mouseout', () => {
            autoGlide = startAutoGlide();
        });

        setTimeout(function() {
            var slides = document.querySelectorAll('.glider-slide');
            slides.forEach(function(slide) {
                var img = slide.querySelector('img');
                if (img) {
                    img.style.width = 'auto'; // Anula cualquier estilo 'width' inline
                    img.style.height = '100%'; // Anula cualquier estilo 'height' inline
                    
                }
                // Aplicar el ancho deseado a los contenedores de las diapositivas
                slide.style.width = '200px'; // Puede que tengas que ajustar este valor
                
            });
        }, 100); // El tiempo de retraso puede necesitar ajustes
    }

    
});
