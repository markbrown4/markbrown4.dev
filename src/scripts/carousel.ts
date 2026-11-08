// Turns each `.carousel` (a row of images in a scroll-snap container) into a
// centred carousel: the image nearest the middle is marked active, and a row of
// dots below shows and changes which one that is. Without JavaScript the
// carousel is still a plain horizontal scroller.

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function enhance(carousel: HTMLElement) {
  const slides = [...carousel.querySelectorAll<HTMLImageElement>(':scope > img')];
  if (slides.length < 2) return;

  const dots = document.createElement('div');
  dots.className = 'carousel-dots';
  const buttons = slides.map((slide, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `Show screenshot ${i + 1} of ${slides.length}`);
    button.addEventListener('click', () => scrollToSlide(i));
    dots.append(button);
    return button;
  });
  carousel.after(dots);
  carousel.classList.add('is-enhanced');

  function scrollToSlide(i: number) {
    const slide = slides[i];
    carousel.scrollTo({
      left: slide.offsetLeft - (carousel.clientWidth - slide.offsetWidth) / 2,
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
    });
  }

  let active = -1;
  function update() {
    const middle = carousel.scrollLeft + carousel.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    slides.forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - middle);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    if (nearest === active) return;
    active = nearest;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === active));
    buttons.forEach((button, i) => {
      if (i === active) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }

  // Tapping a neighbour brings it to the centre.
  slides.forEach((slide, i) => slide.addEventListener('click', () => i !== active && scrollToSlide(i)));

  let frame = 0;
  carousel.addEventListener(
    'scroll',
    () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    },
    { passive: true },
  );
  window.addEventListener('resize', update);
  update();
}

document.querySelectorAll<HTMLElement>('.carousel').forEach(enhance);
