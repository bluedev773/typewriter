const sentence = "hello there from lighthouse labs";

//type each char with 50ms delay from the previous typed char
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if(i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, 50 * i);
  
}
