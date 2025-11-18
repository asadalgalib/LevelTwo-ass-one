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



## Blog 2 : Use of the Key word "keyof" in TypeScript 

### ১. ভূমিকা (Inroduction)

Typescript - এ type safety নিশ্চিত করার জন্য keyof একটি শক্তিশালী অপারেটর। এটি আমাদেরকে runtime এরর এড়াতে সাহায্য করে। এই পোস্টে আমরা দেখবো কিভাবে keyof ব্যবহার করে আমরা object এর key গুলোকে type হিসেবে ব্যবহার করতে পারি এবং কোডকে আরো মজবুত করতে পারি।

### ২. keyof কী?

keyof হলো একটি index access অপারেটর। যখন এটি একটি object type এর উপর প্রয়োগ করা হয়, তখন এটি সেই object এর সকল key names গুলোকে sting literals union type হিসেবে প্রদান করে

##### উদাহরণঃ 

type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;
// UserKeys = "name" | "age" | "email"

### ৩. keyof এর ব্যবহার 

keyof এর প্রধান ব্যবহার হলো generic function তৈরি করা, যা object এর যে কোনো property নিয়ে কাজ করতে পারে কিন্তু type safety ও বজায় রাখে

উদাহরণ স্বরূপ, একটি function যা একটি object থেকে একটি property value তুলে আনেঃ

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

### ৪. keyof এর সুবিধা

- <b> Type safety :  </b> keyof নিশ্চিত করে যে আপনি শুধুমাত্র এমন property নাম ব্যবহার করছেন যা object এ সত্যিই আছে। ভুল key ব্যবহার করলে কম্পাইলার এরর দেখাবে
- <b> Autocompletion :  </b> Integrated Development Environment তে এটি property এর নাম সাজেশন দিয়ে দ্রুত কোড লিখতে সাহায্য করে
- <b> Refactoring :  </b>যদি object টাইপের কোনো property এর নাম পরিবর্তন করা হয়, তবে keyof ব্যবহার করা সকল function স্বয়ংক্রিয় ভাবে সেই পরিবর্তন ধরে ফেলে

### ৫. উপসংহার

keyof Typescript এর জেনেরিক প্রোগ্রামিং এবং উন্নত টাইপিং কৌশলের জন্য অপরিহার্য। এটি আপনার কোডকে আরো নিরাপদ, আরো maintainable এবং ত্রুটিমুক্ত রাখতে সাহায্য করে। যখনই আপনি কোনো অবজেক্টের প্রোপার্টি এক্সেস করার জন্য একটি টাইপ নিরাপদ ফাংশন লিখতে চাইবেন, keyof হবে আপনার প্রথম পছন্দ। 