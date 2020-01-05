// Countdown script
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let mockupTimeNow = new Date('2019-12-31 23:59:58').getTime();
let countdown = new Date('2020-01-01 00:00:00').getTime();

let interval = setInterval(function() {
  let distance = countdown - mockupTimeNow;

  if (distance <= 0) {
    clearInterval(interval);

    playAnimation();
  }

  document.getElementById('days').getElementsByClassName('number')[0].innerHTML = pad(parseInt(distance / day));
  document.getElementById('hours').getElementsByClassName('number')[0].innerHTML = pad(parseInt((distance % day)/ hour));
  document.getElementById('minutes').getElementsByClassName('number')[0].innerHTML = pad(parseInt((distance % hour) / minute));
  document.getElementById('seconds').getElementsByClassName('number')[0].innerHTML = pad(parseInt((distance % minute) / second));
  mockupTimeNow += second;
}, second);

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

// Animation script
gsap.set('.firework', {opacity: 0, y: 50});
gsap.set('#new-year-text path:nth-child(1)', { css: { strokeDashoffset: '500' }});
gsap.set('#new-year-text path:nth-child(2)', { css: { strokeDashoffset: '930' }});

function playAnimation() {
  let tl = gsap.timeline();

  tl.to('.time-counter', {duration: 0.3, opacity: 0})
    .to('.firework', { duration: 2, opacity: 1, y: 0, stagger: 0.2, ease: 'power4.outs' })
    .to('.firework', { duration: 1, opacity: 0.3, y: 0, ease: 'power4.outs' })
    .to('#new-year-text path', { duration: 3, css: { strokeDashoffset: '0' }, ease: 'power4.outs', delay: '-5' })
    .to('#new-year-text path', { duration: 2, css: { fill: 'rgba(255,255,255,1)' }, ease: 'power4.outs', delay: '-2' })
}