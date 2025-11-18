type FormatValue = string | number | boolean;
const formatValue = (input: FormatValue): FormatValue => {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else {
        if (input) {
            return false;
        }
        else {
            return true;
        }
    }
}

type GetLength = string | string[] | number[];
const getLength = (input: GetLength): number => {
    if (Array.isArray(input)) {
        return input.length;
    }
    else if (typeof input === "string") {
        return input.length;
    }
    return -1;
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    getDetails(): string {
        const person = `'Name: ${this.name}, Age: ${this.age}'`;
        return person;
    }
}

type FilterByRating = Array<{ title: string, rating: number }>
const filterByRating = (input: FilterByRating): FilterByRating => {
    const filteredArray = input.filter(item => item.rating >= 4);
    return filteredArray;
}

type FilterActiveUsers = Array<{ id: number, name: string, email: string, isActive: boolean }>
const filterActiveUsers = (input: FilterActiveUsers): FilterActiveUsers => {
    const filteredUserArray = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].isActive) {
            filteredUserArray.push(input[i]);
        }
    }
    return filteredUserArray;
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (input: Book) => {
    console.log(`Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${input.isAvailable ? "Yes" : "No"}`);
}

type GetUniqueValues = string[] | number[]
const getUniqueValues = (input1: GetUniqueValues, input2: GetUniqueValues): GetUniqueValues => {
    const newArray: GetUniqueValues = [];
    let index = 0;
    for (let i = 0; i < input1.length; i++) {
        newArray[index] = input1[i];
        index++;
    }
    const isIncludes = (arr: GetUniqueValues, item: string | number) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return true
            }
        }
    }
    for (let i = 0; i < input2.length; i++) {
        if (!isIncludes(newArray, input2[i])) {
            newArray[index] = input2[i];
            index++;
        }
    }
    return newArray;
}

type CalculateTotalPrice = Array<{ name: string, price: number, quantity: number, discount?: number }>
const calculateTotalPrice = (input: CalculateTotalPrice) => {
    let totalPrice: number = 0;
    input.map(item => {
        const { price, quantity, discount } = item;
        if (!discount) {
            return totalPrice += (price * quantity)
        } else {
            return totalPrice += (price * quantity) - ((price * quantity * discount) / 100);
        }
    })
    return totalPrice;
}