declare var process: {
  env: {
    NODE_ENV: string;
  };
};

const logger = (message: string): void => {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  console.log(message);
};

export default logger;
