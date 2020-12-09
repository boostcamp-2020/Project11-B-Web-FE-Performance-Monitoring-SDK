export default (dsn: string): void => {
  try {
    if (dsn === '') return;
    fetch(`${dsn}/engagement`, {
      method: 'POST',
    });
  } catch (error) {
    // do nothing
  }
};
