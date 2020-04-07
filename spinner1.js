const timer = 10;

for (let i = 1; i <= timer; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
      }, 100 * i);
  i++;
  setTimeout(() => {
    process.stdout.write('\r/   ');
      }, 100 * i);
  i++;
  setTimeout(() => {
    process.stdout.write('\r-   ');
      }, 100 * i);
  i++;
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
      }, 100 * i);
  i++;
}
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\n'); 
  }, timer * 100);
