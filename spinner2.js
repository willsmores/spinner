const object = {
  300 : '\r/   ',
  500 : '\r-   ',
  700 : '\r\\   ',
  900 : '\r|   ',
  1200: '\r/   ',
  1500: '\r-   ',
  1800: '\r\\   ',
  2100: '\r|   \n'
};

for (let key in object) {
  setTimeout(() => {
    process.stdout.write(object[key]);
  }, Number(key));
}