const sentence = "hello there from lighthouse labs";

//type each char with 50ms delay from the previous typed char
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    
  }, 50 * i);
}