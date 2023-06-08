const buffer = new Buffer.from("Alekya");

console.log(buffer.toJSON()) // Gives ASCII Values
console.log(buffer.toString()) // Gives the String
console.log(buffer) // Gives Hexa-decimal encoding

buffer.write('alex'); // Replaces the contents of buffer within the given size
console.log(buffer.toString())
buffer.write('Paladugu');
console.log(buffer.toString())