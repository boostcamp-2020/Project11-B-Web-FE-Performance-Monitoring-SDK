import Panopticon from '../../dist/bundle';

// const dsn = 'http://panopticon.gq/api/sdk/5fcee5757395142ba8e1cbf1';
const dsn = 'http://localhost:3000/api/sdk/5fcee5757395142ba8e1cbf1';

Panopticon.init(dsn);
Panopticon.setTag('custom', 'Tag');
Panopticon.setTag('hihi', 'bye');
Panopticon.setUser('Warden');
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

// EvalError - deprecated in ECMAScript
const evalErrorButton = document.querySelector('#eval-error');
evalErrorButton.addEventListener('click', () => {
  throw new EvalError('Hello', 'someFile.js', 10);
});

// InternalError - None ECMA standard, not working in Chrome
// const internalErrorButton = document.querySelector('#internal-error');
// internalErrorButton.addEventListener('click', () => {
//   throw new InternalError('Engine Failure');
// });

// RangeError
const rangeErrorButton = document.querySelector('#range-error');
rangeErrorButton.addEventListener('click', () => {
  const num = 2;
  const fixedNum = num.toFixed(-10);
});

// ReferenceError
const referenceErrorButton = document.querySelector('#reference-error');
referenceErrorButton.addEventListener('click', () => {
  console.log(notDefined);
});

// SyntaxError
const syntaxErrorButton = document.querySelector('#syntax-error');
syntaxErrorButton.addEventListener('click', () => {
  // import('./syntaxError.js');
  eval('hoo bar');
});

// TypeError
const typeErrorButton = document.querySelector('#type-error');
typeErrorButton.addEventListener('click', () => {
  const nullElement = null;
  nullElement.innerHTML = 'yay!';
});

// URIError
const uriErrorButton = document.querySelector('#uri-error');
uriErrorButton.addEventListener('click', () => {
  const uri = 'https://boostcamp.com/?한국어=쿼리';
  const encoded = encodeURI(uri);
  const malformedUri = encoded.slice(20, 30);
  const decoded = decodeURI(malformedUri);
});

const manualErrorButton = document.querySelector('#manual-error');
manualErrorButton.addEventListener('click', () => {
  try {
    throw new Error("Maybe I'll be caught by try-catch");
  } catch (err) {
    Panopticon.send(err);
  }
});
