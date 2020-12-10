export default (dsn: string): void => {
  try {
    if (dsn === '') return;
    fetch(`${dsn}/visits`, {
      method: 'POST',
    });
  } catch (error) {
    // do nothing
  }
};
