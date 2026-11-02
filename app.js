const looks = [
  { file:'look-01.jpg', caption:'the salon is BOOked and busy 👻', category:'studio', tag:'STUDIO LIFE', url:'/love.hair___/reel/DfFRww6sPfP/' },
  { file:'look-02.jpg', caption:'taking one for the team 🙈💜', category:'studio', tag:'A LITTLE CHAOS', url:'/love.hair___/reel/De1j-1qJ9N3/' },
  { file:'look-03.jpg', caption:'the fastest “omw” ever 🤣', category:'studio', tag:'SALON HUMOUR', url:'/love.hair___/reel/DerTjliMCyN/' },
  { file:'look-04.jpg', caption:'@potpixie_ in control 👀', category:'vivid', tag:'VIVID COLOUR', url:'/love.hair___/reel/DeedvqcsT8N/' },
  { file:'look-05.jpg', caption:'short & cheeky — cut and colour for Yashi', category:'curls', tag:'CURLY CUT', url:'/melissaaalobo/p/DeeVaYsjl9l/' },
  { file:'look-06.jpg', caption:'living the dream at @love.hair___ 💜', category:'studio', tag:'STUDIO MOMENT', url:'/love.hair___/reel/DeZaG_zMiZX/' },
  { file:'look-07.jpg', caption:'the rich mahogany everyone’s craving', category:'balayage', tag:'RICH MAHOGANY', url:'/love.hair___/p/DeMq3FVjKep/' },
  { file:'look-08.jpg', caption:'your next colour might just be here 💜', category:'vivid', tag:'VIVID COLOUR', url:'/love.hair___/reel/DeRlqgcMPHu/' },
  { file:'look-09.jpg', caption:'purple haze 💜🪻', category:'vivid', tag:'BLEACH & TONE', url:'/melissaaalobo/p/DeJ1kySDuO0/' },
  { file:'look-10.jpg', caption:'book your appointments with us now 🥰', category:'studio', tag:'FROM THE STUDIO', url:'/love.hair___/reel/Dd4Bz_AMHi_/' },
  { file:'look-11.jpg', caption:'in her “wellsey” era 🤎', category:'balayage', tag:'BRUNETTE DIMENSION', url:'/love.hair___/reel/DdWY1Ygsy2J/' },
  { file:'look-12.jpg', caption:'caramel latte kinda mornii 🧋', category:'balayage', tag:'CARAMEL BALAYAGE', url:'/love.hair___/p/Dd0qcW3DL8J/' },
  { file:'look-13.jpg', caption:'love.hair has entered its barber shop era 💈', category:'curls', tag:'CUT & SHAPE', url:'/love.hair___/reel/DdRTZ1DzuyV/' },
  { file:'look-14.jpg', caption:'a little care never hurt the client 🥰', category:'studio', tag:'SALON LIFE', url:'/love.hair___/reel/DdB00cRsdx5/' },
  { file:'look-15.jpg', caption:'too busy obsessing over hair 🙈', category:'studio', tag:'BEHIND THE CHAIR', url:'/melissaaalobo/reel/DdBowyztmKF/' },
  { file:'look-16.jpg', caption:'we’re proud of our flops — now tell us yours 💜', category:'studio', tag:'THE REAL TALK', url:'/love.hair___/p/Dc3Z56hjLCg/' },
  { file:'look-17.jpg', caption:'book with us now 💜', category:'studio', tag:'FROM THE STUDIO', url:'/love.hair___/reel/DcvwSy2M6vr/' },
  { file:'look-18.jpg', caption:'back to her colour ❤️', category:'vivid', tag:'COLOUR REFRESH', url:'/love.hair___/reel/Dci8dBhMKuh/' },
  { file:'look-19.jpg', caption:'forgot to take an after too 🥲', category:'studio', tag:'REAL STUDIO LIFE', url:'/love.hair___/reel/Dcn92ftshbs/' },
  { file:'look-20.jpg', caption:'when your hair matches the inspo 💁🏼‍♀️', category:'balayage', tag:'THE INSPO MOMENT', url:'/love.hair___/reel/DcYgGxIsGS8/' },
  { file:'look-21.jpg', caption:'don’t forget to leave us that review 👀', category:'studio', tag:'LOVE FROM THE CREW', url:'/love.hair___/reel/DcgUYB-M3bK/' },
  { file:'look-22.jpg', caption:'am I right or am I right? 🤣', category:'studio', tag:'SALON HUMOUR', url:'/love.hair___/reel/DcOTSYfMipq/' },
  { file:'look-23.jpg', caption:'this is your sign for a self-care day 💜', category:'studio', tag:'YOUR SELF-CARE DAY', url:'/love.hair___/reel/DcJFCOzs0jV/' },
  { file:'look-24.jpg', caption:'browns are always in — this time sexier than ever 🤎', category:'balayage', tag:'BRUNETTE GLOSS', url:'/love.hair___/reel/DcBbvmgM_MH/' },
  { file:'look-25.jpg', caption:'a little red, a lot of main character energy ❤️', category:'vivid', tag:'RED / VIVID', url:'/love.hair___/reel/Db8RIcrsF7W/' },
  { file:'look-26.jpg', caption:'stormy hair during stormy skies 🌪️', category:'vivid', tag:'COLOUR PLAY', url:'/love.hair___/p/Dbqbo1HjGYj/' },
  { file:'look-27.jpg', caption:'brunettes for president', category:'balayage', tag:'BRUNETTE BALAYAGE', url:'/love.hair___/p/DbddCXBjB2I/' },
  { file:'look-28.jpg', caption:'if you think the rain cancels our appointments… think again 👀', category:'studio', tag:'A LITTLE COMMITMENT', url:'/love.hair___/reel/DbdRtZasg0W/' },
  { file:'look-29.jpg', caption:'brown so lush', category:'balayage', tag:'SOFT BROWN', url:'/love.hair___/p/DbYGQM1TngL/' }
];

const gallery = document.querySelector('#gallery-grid');
const filters = [...document.querySelectorAll('.filter-button')];
const lightbox = document.querySelector('#lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const lightboxLink = lightbox.querySelector('figcaption a');
let visibleLooks = looks;
let lightboxIndex = 0;

function renderGallery(filter = 'all') {
  visibleLooks = filter === 'all' ? looks : looks.filter(look => look.category === filter);
  gallery.innerHTML = visibleLooks.map((look, index) => `
    <figure class="gallery-card" role="button" tabindex="0" aria-label="Open ${look.tag.toLowerCase()} image: ${look.caption}" data-index="${index}">
      <img src="assets/${look.file}" alt="${look.caption}" loading="lazy">
      <figcaption class="gallery-overlay"><span>${look.tag}</span><b>↗</b></figcaption>
    </figure>`).join('');
}

function showLook(index) {
  lightboxIndex = (index + visibleLooks.length) % visibleLooks.length;
  const look = visibleLooks[lightboxIndex];
  lightboxImg.src = `assets/${look.file}`;
  lightboxImg.alt = look.caption;
  lightboxCaption.textContent = look.caption;
  lightboxLink.href = `https://www.instagram.com${look.url}`;
  if (!lightbox.open) lightbox.showModal();
}

renderGallery();
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  renderGallery(button.dataset.filter);
}));

gallery.addEventListener('click', event => {
  const card = event.target.closest('.gallery-card');
  if (card) showLook(Number(card.dataset.index));
});
gallery.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.gallery-card')) {
    event.preventDefault();
    showLook(Number(event.target.dataset.index));
  }
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showLook(lightboxIndex - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showLook(lightboxIndex + 1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
document.addEventListener('keydown', event => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') showLook(lightboxIndex - 1);
  if (event.key === 'ArrowRight') showLook(lightboxIndex + 1);
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const tiltItems = document.querySelectorAll('[data-tilt]');
tiltItems.forEach(item => {
  item.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const bounds = item.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    item.style.transform = `perspective(1100px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
  });
  item.addEventListener('pointerleave', () => { item.style.transform = ''; });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.approach-grid,.approach-photo-row,.services-head,.service-row,.artist-heading,.artist-card,.lookbook-head,.gallery-card,.visit-grid,.faq-grid').forEach(item => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});
