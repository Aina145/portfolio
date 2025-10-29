// ===== Typewriter Effect =====
const typeTarget = document.querySelector('#typewriter');
const text = "Ain Malik | Frontend Developer";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typeTarget.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
if (typeTarget) typeEffect();


// ===== Scroll Active Nav =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});


// ===== Scroll Animation =====
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);


// ===== Back to Top Button =====
const topBtn = document.createElement('button');
topBtn.textContent = "↑";
topBtn.classList.add('top-btn');
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
