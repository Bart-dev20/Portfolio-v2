// Barra de progresso
const barra = document.querySelector('.progress');

window.addEventListener('scroll', () => {

    const html = document.documentElement.scrollHeight;

    const scrollTop = window.scrollY;

    const pageHeight = html - window.innerHeight;

    // Transformando em porcentagem
    const progresso = (scrollTop / pageHeight) * 100;

    barra.style.width = `${progresso}%`;
});

// Menu mobile
document.querySelector('#btn-menu-mobile').addEventListener('click', () => {

    document.querySelector('#nav-item-mobile').classList.toggle('open-menu-mobile');
});

// Navegação
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove o menu mobile sempre que for clicado nos links de navegação
        document.querySelector('#nav-item-mobile').classList.remove('open-menu-mobile');

        const id = link.getAttribute('href');
        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
