// 3D Animation
const card = document.querySelector('.card');
const container = document.querySelector('.liveDisplay');

const title = document.querySelector('.info');
const chipsImg = document.getElementById('chipsImg');

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (e.clientX - window.innerWidth/2) / 50 *-1;
    let yAxis = (e.clientY - window.innerHeight/2 - 250) / 50;
    //card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    chipsImg.style.transform = `translateZ(20px) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'all 0.2s ease';

    // Popout
    //chipsImg.style.transform = `translateZ(30px)`;
    chipsImg.style.transition = `all 0.1s ease`;  

    title.style.transition = `all 0.2s ease`;
    title.style.transform = 'translateZ(5px)';
});

// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    // Popback
    chipsImg.style.transition = `all 0.3s ease`;
    chipsImg.style.transform = `translateZ(0px)`;

    title.style.transition = `all 0.3s ease`;
    title.style.transform = `translateZ(0px)`;
});
