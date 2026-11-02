const revealItems=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
revealItems.forEach(item=>observer.observe(item));
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',nav.classList.contains('is-open'))});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('is-open')));
