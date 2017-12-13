export function catchErrors(done) {
  return (error) => {
    if (error instanceof Error) {
      return done.fail(error.stack);
    }
    return done.fail(JSON.stringify(error));
  };
}
