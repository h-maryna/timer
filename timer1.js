const userInput = process.argv.splice(2);

userInput.sort((a,b) => a- b)
for (const sec of userInput) {
  setTimeout(() => {
  process.stdout.write(`\r${sec}   `);
}, sec * 1000)
}

