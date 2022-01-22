function synchronizePromise<T extends (...args: any[]) => Promise<any>>(fun: T) {
  let lastPromise: any;

  return ((...args: any[]) => {
    lastPromise = lastPromise
      ? lastPromise.catch(() => {}).then(() => fun(...args))
      : fun(...args);

    return lastPromise;
  }) as unknown as T;
}

export default synchronizePromise;
