import Panopticon from '../../dist/bundle';

const dsn = 'http://panopticon-dev.gq/api/issue'

Panopticon.init(dsn);

const makeCustomError = () => {
  throw new Error('error maker made this');
};

const addStackToError = (num) => {
  if (num > 0) {
    addStackToError(num - 1);
  } else {
    makeCustomError();
  }
};

const errorButton = document.querySelector('#error');
errorButton.addEventListener('click', () => {
  addStackToError(10);
});

const unhandledPromiseButton = document.querySelector('#promise');
unhandledPromiseButton.addEventListener('click', () => {
  new Promise(() => {
    throw new Error('Unhandled promise rejection!');
  });
});
