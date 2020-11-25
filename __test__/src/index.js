import Panopticon from '../../dist/bundle';

Panopticon.init();

const errorMaker = () => {
  throw new Error('error maker made this');
};

const errorCountdown = (num) => {
  if (num > 0) {
    errorCountdown(num - 1);
  } else {
    errorMaker();
  }
};

const errorButton = document.querySelector('#error');
errorButton.addEventListener('click', () => {
  // noUndefinedFn();
  // throw new Error('Error button clicked');
  errorCountdown(10);
});

const unhandledPromiseButton = document.querySelector('#promise');
unhandledPromiseButton.addEventListener('click', () => {
  new Promise(() => {
    throw new Error('Unhandled promise rejection!');
  });
});
