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
// gsap.set('.fireworks-1, .fireworks-2, .fireworks-3', { opacity: 0 });
gsap.set('.firework', {opacity: 0, y: 50});

function playAnimation() {
  let tl = gsap.timeline();

  tl.to(".time-counter", {duration: 0.3, opacity: 0})
    .to(".firework", { duration: 2, opacity: 1, y: 0, stagger: 0.2, ease: 'power4.outs' })
    .to(".firework", { duration: 2, opacity: 0.7, y: 0, ease: 'power4.outs' })
}