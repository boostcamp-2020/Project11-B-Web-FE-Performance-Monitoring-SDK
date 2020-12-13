export default async (dsn: string): Promise<void> => {
  try {
    if (dsn === '') return;
    await fetch(`${dsn}/visits`, {
      method: 'POST',
    });
  } catch (error) {
    // do nothing
  }
};
