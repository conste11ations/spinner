// A much cleaner version of spinner1.js
const timer = 9;
const animation = ['|', '/', '-', '\\'];

for (let i = 1; i <= timer; i++) {
  setTimeout(() => { process.stdout.write('\r'+animation[i % 4]); }, 100 * i);
}
setTimeout(() => { process.stdout.write('\n'); }, timer * 100);
