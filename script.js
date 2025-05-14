const galleryImages = document.querySelectorAll('.imgGaleria');
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeButton = document.querySelector('.close-button');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentImageIndex = 0;
let imagesArray = [];

// Preenche o array de imagens e adiciona o evento de clique
galleryImages.forEach((img, index) => {
    imagesArray.push(img.getAttribute('data-fullsize'));
    img.addEventListener('click', function() {
        currentImageIndex = index;
        showFullscreenImage(imagesArray[currentImageIndex]);
    });
});

function showFullscreenImage(src) {
    fullscreenImage.src = src;
    fullscreenOverlay.style.display = 'flex';
}

function closeFullscreen() {
    fullscreenOverlay.style.display = 'none';
    fullscreenImage.src = '';
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
    showFullscreenImage(imagesArray[currentImageIndex]);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
    showFullscreenImage(imagesArray[currentImageIndex]);
}

closeButton.addEventListener('click', closeFullscreen);
prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

// Adiciona funcionalidade de teclado para navegar e fechar
document.addEventListener('keydown', function(event) {
    if (fullscreenOverlay.style.display === 'flex') {
        if (event.key === 'Escape') {
            closeFullscreen();
        } else if (event.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (event.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// Função para alternar entre os temas claro e escuro
// e salvar a preferência no localStorage

const themeButton = document.getElementById('themeButton');
const body = document.body;
const headerElement = document.querySelector('header');
const fullscreenOverlayElement = document.getElementById('fullscreenOverlay');

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    headerElement.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
        themeButton.textContent = 'Tema Claro';
        fullscreenOverlayElement.classList.add(savedTheme);
    }
}

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    headerElement.classList.toggle('dark-theme');
    fullscreenOverlayElement.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Tema Claro';
        localStorage.setItem('theme', 'dark-theme');
    } else {
        themeButton.textContent = 'Tema Escuro';
        localStorage.setItem('theme', 'light-theme'); // Você pode salvar 'light-theme' explicitamente ou remover o item
    }
});