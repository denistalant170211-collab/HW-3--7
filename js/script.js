let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);


let words = ['Привіт', 'Як', 'справи'];
words.push('Добре');
console.log(words);



let arr = [2, 4, 6, 8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);



let nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}



let strings = ['Денис', 'JavaScript', 'Навчання', 'Пляшка', 'Комп’ютер'];

for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
        console.log(strings[i]);
    }
}



let numbers2 = [5, 12, 3, 25, 8, 17, 40, 2, 11, 6];
let max = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
}

console.log(max);



let numbers3 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];

for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] % 2 === 0) {
        console.log(numbers3[i]);
    }
}