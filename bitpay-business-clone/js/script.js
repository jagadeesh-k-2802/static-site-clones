// Utils
const sleep = ms => {
  return new Promise(res => setTimeout(res, ms));
};

// Animate Header On Scroll
const header = document.querySelector('.header');
const headerOffset = header.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > headerOffset) {
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
};

// Inject SVG Into Hero Section, Since SVG Contains Some Errors
const invoiceContainer = document.getElementById('invoice-container');

const getFile = async url => {
  const res = await fetch(url);
  return await res.text();
};

(async () => {
  const svg = await getFile('/img/qr-code.svg');
  invoiceContainer.innerHTML += svg;
})();

// Testimonial Next Button
let currentTestimonial = 0;
const testimonialNextBtn = document.getElementById('testimonial-next-btn');

const testimonials = [
  {
    text:
      'BitPay allows our global fans to seamlessly make purchases with the Mavs.”',
    image: '/img/mavericks.50aec49.svg',
    person: 'Mark Cuban',
    work: 'Owner'
  },
  {
    text:
      'BitPay has consistently impressed us with its service and engineering. We are excited to see where bitcoin is headed, and we are confident that we are working with the best company to carry this technology forward at Microsoft.”',
    image: '/img/microsoft.f8153cf.svg',
    person: 'Sam Anson Sr.',
    work: 'Business Ops Project Manager'
  },
  {
    text:
      'With Bitcoin, customers from all around the world will pay the same for our products, free from volatile currency fluctuations and lofty bank charges. Cryptocurrencies are the future of global trade and we want to ensure that we are prepared to move into this new digital era.”',
    image: '/img/lush.605788e.svg',
    person: 'Mike West',
    work: 'Manager'
  }
];

const testimonial = {
  quote: document.getElementById('testimonial-quote'),
  text: document.getElementById('testimonial-text'),
  image: document.getElementById('testimonial-image'),
  person: document.getElementById('testimonial-person'),
  work: document.getElementById('testimonial-work')
};

const animationOptions = {
  duration: 1300,
  iterations: 1,
  easing: 'ease-in-out'
};

testimonialNextBtn.addEventListener('click', () => {
  currentTestimonial >= 2 ? (currentTestimonial = 0) : currentTestimonial++;

  testimonial.text.innerText = testimonials[currentTestimonial].text;
  testimonial.image.src = testimonials[currentTestimonial].image;
  testimonial.person.innerText = testimonials[currentTestimonial].person;
  testimonial.work.innerText = testimonials[currentTestimonial].work;

  Object.values(testimonial).forEach(el => {
    el.animate([{ opacity: '0' }, { opacity: '1' }], animationOptions);
  });
});

// Currency Tween
const currencyTween = document.getElementById('currencyTween');

const currencies = [
  'XRP',
  'MXN',
  'BTC',
  'ETH',
  'ZAR',
  'BCH',
  'BUSD',
  'EUR',
  'AUD',
  'GBP',
  'USDC',
  'NZD',
  'PAX',
  'GUSD'
];

setInterval(() => {
  const randomIndex = Math.floor(Math.random() * currencies.length);
  const currency = currencies[randomIndex];

  (async () => {
    for await (letter of currency) {
      const index = currency.split('').indexOf(letter);
      const textArr = currencyTween.innerText.split('');

      if (textArr.length > currency.length) {
        textArr.pop();
      }

      textArr[index] = letter;
      currencyTween.innerText = textArr.join('');
      await sleep(50);
    }
  })();
}, 2000);

// Collapsibles
const collapsibles = document.getElementById('collapsibles');

Array.from(collapsibles.children).forEach(el => {
  el.addEventListener('click', function (e) {
    const items = this.children[1];

    if (items.style.display === 'none' || !items.style.display) {
      items.style.display = 'flex';
      setTimeout(() => (items.style.transform = 'scaleY(1)'), 1);
    } else {
      items.style.transform = 'scaleY(0)'

      setTimeout(() => (items.style.display = 'none'), 300);
    }
  });
});
