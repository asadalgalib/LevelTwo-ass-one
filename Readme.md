## Blog 1 : Differences between Interface and Type Alias in TypeScript

### ১. ভূমিকা (Inroduction)

TypeScript - এ ডাটা স্ট্রাকচার define করার জন্য  Interface এবং Type Alias দুটি প্রধান পদ্ধতি। উভয়েই Object এর স্ট্রাকচার define করে কিন্তু এদের ব্যবহারের ক্ষেত্রে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। চলুন দ্রুত জেনে নেই কখন কোনটি ব্যবহার করা উচিত।

### ২. Type Alias কী?

Type Alias হলো একটি টাইপের জন্য একটি নাম নির্ধারণ করা। এটি সকল primitive type ডাটার জন্য স্ট্রাকচার তৈরি করতে পারে। 

##### উদাহরণঃ

type User = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
};

type UserContact = User & Contact;

const user: UserContact = {
  name: "Asadullah",
  age: 21,
  email: "asad@gmail.com"
};

console.log(user);


### ৩. Interface কী?

Interface হলো মূলত Object এর স্ট্রাকচার define করার জন্য তৈরি একটি কাস্টম টাইপ। এটি Object এর property ও টাইপ ঠিক রাখে এবং class এও implement করা যায়। একটি interface দিয়ে আরেকটি interface extend ও করা যায়।

##### উদাহরণঃ 

interface User {
  name: string;
  age: number;
}

interface Student extends User {
  email: string;
}

const student: Student = {
  name: "Asadullah",
  age: 21,
  email: "asad@gmail.com"
};

console.log(student);

### ৪. Interface এবং Type alias এর মধ্যে মূল পার্থক্য 

- <b> মারজিংঃ</b>Interface বার বার একই নামে declear করলে merge হয়ে যায়
- <b> বহুমুখিতাঃ</b> Type Alias একই সাথে Union Types (|) এবং Intersection types (&) ব্যবহার করতে পারে
- <b> এক্সটেনশনঃ </b> Interface সাধারণত extends ব্যবহার করে এবং Type Alias সাধারণত Intersection (&) ব্যবহার করে

### ৫. কখন কোনটি ব্যবহার করবেন? 

#### Type Alias

- Union, Intersection, tuple বা function type তৈরিতে
- flexible বা versatile দরকার হলে

#### Interface 

- Object/class stucture define করতে
- Extend বা merge করতে চাইলে
- Readable syntax দরকার পড়লে

### ৬. উপসংহার 

বেশির ভাগ ক্ষেত্রে শুধুমাত্র Object define করার জন্য Interface ব্যবহার করাকে ভালো অভ্যেস বলে মনে করা হয়। তবে যখনই আপনার Union Types (|) বা Intersection Types (&) এর প্রয়োজন হবে তখনই ব্যবহার করুন। এই পার্থক্য গুলো মনে রাখলে আপনার আরও শক্তিশালী ও রক্ষাণাবেক্ষনযোগ্য হবে।

<hr/>