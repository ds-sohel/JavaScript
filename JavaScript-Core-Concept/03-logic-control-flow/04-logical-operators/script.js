console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); // Only one has to be true

let a, b, c, d, e;

// && - Will return first falsy value or the last value

a = 10 && 20;
b = 10 && 20 && 30;
c = 10 && 0 && 30;
d = 10 && '' && 0 && 30;

console.log(`${a}\n${b}\n${c}\n${d}`);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last value

a = 10 || 20;
b = 0 || 20;
c = 0 || null || '' || undefined;

console.log(`${a}\n${b}\n${c}`);

// ?? - Returns the right side operand when the left is null or undefined

a = 10 ?? 20;
b = null ?? 20;
c = undefined ?? 30;
d = 0 ?? 30;
e = '' ?? 30;

console.log(`${a}\n${b}\n${c}\n${d}\n${e}`);