// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// "C:\Users\dell\OneDrive\Desktop\logo.png.png"

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> opens WhatsApp with the message filled in
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const service = document.getElementById('cService').value.trim();
  const message = document.getElementById('cMessage').value.trim();

  const text =
    `Hello Kryzen Grid, I'm ${name}.` +
    (service ? `\nI'm interested in: ${service}` : '') +
    `\n${message}`;

  window.open(`https://wa.me/917409890094?text=${encodeURIComponent(text)}`, '_blank');
});

// Scroll reveal animation
const revealTargets = document.querySelectorAll(
  '.about-text, .stat, .service-card, .why-item, .founder-photo, .founder-text, .contact-card, .contact-form'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));