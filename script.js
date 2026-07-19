// 1. Lenis Smooth Scroll
const lenis = new Lenis({ 
    duration: 1.8, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
});
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// 2. 導覽列平滑跳轉
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        lenis.scrollTo(a.getAttribute('href'));
    });
});

// 3. 這裡放你原本的 Gallery 篩選與燈箱邏輯
// (如果原本 work.html 有邏輯，請移到這裡)