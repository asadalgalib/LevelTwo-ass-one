## Blog 1 : Differenc between interface and type alias in TypeScript ?

Typescript-এ  Interface ও type উভয়ই Data structure define করতে ব্যবহার করা হয়। কিন্তু্ ব্যবহার ও বৈশিষ্ট্যের দিক থেকে এদের মধ্যে কিছু পার্থক্য রয়েছে। চলুন জেনে নেই interface ও type মধ্যেকার বিদ্যমান পার্থক্য এবং পরিষ্কার ভাবে বুঝে নেই কখন কোনটি ব্যবহার করা উচিত।

### What is Type Alias? 

Type হচ্ছে typescript এর একটি শক্তিশালী ফিচার যা আপনাকে একটি নতুন টাইপ define করতে সাহায্য করে। এটি মূলত "type" key word ব্যবহার করে লিখা হয়। Type alias দিয়ে আমরা primitive, non-premitive, tuple সহ সব ধরনের data stucture define করতে পারি। 

#### Example : 

type User = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
};

type UserContact = User & Contact;

const user1: UserContact = {
  name: "Asadullah",
  age: 21,
  email: "asad@gmail.com"
};

console.log(user1);

### What is Interface 

Typescript-এ Interface হলো এমন একটি স্ট্রাকচার যার মাধ্যমে আমরা Object, class বা function এর স্ট্রাকচার define করতে পারি। Interface এ আমরা property এবং method এর type বলে দেই। Interface কে extend করে একই 
interface কে ব্যবহার করে নতুন object define করা যায়।

#### Example : 

interface User {
  name: string;
  age: number;
}

interface User {
  email: string;
}

const u1: User = {
  name: "Asadullah",
  age: 21,
  email: "asad@gmail.com"
};

console.log(u1);
