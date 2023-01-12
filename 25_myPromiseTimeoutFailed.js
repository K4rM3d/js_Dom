const sleepThrow = (millisecondes, condition) => {
  return new Promise((resolve, reject) => {
    if (condition === true) {
      setTimeout(() => resolve("Success"), millisecondes);
    } else {
      setTimeout(() => reject("Failed"), millisecondes);
    }
  });
};

exports.module = sleepThrow;

sleepThrow(2000, true)
  .then(() => console.log("ok"))
  .catch(() => console.log("non"));
