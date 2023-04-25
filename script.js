// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

console.log('Задание 1');
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

const numberResult = Object.values(numbers).filter((el) => el >= 3);

console.log(`Значения больше или равные 3: `, ...numberResult);

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, 
// к которым приписан комментарий, в консоль. 

console.log('Задание 2');
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author,
    post.comments[0].rating.dislikes,
    post.comments[1].userId,
    post.comments[1].text
);

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

console.log('Задание 3');
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(el => el.price = el.price * 0.85);

console.log(products);

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть
// одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене,
// начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

console.log('Задание 4.1');
const products_ = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const withPhoto = products_.filter((el) => el.photos && el.photos.length > 0);
console.log(withPhoto);

console.log('Задание 4.2');
console.log(products_.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    } else if (a.price < b.price) {
        return -1;
    } else {
        return 0;
    }
}));

// **Задание 5**
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
console.log('Задание 5');
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const dayOfWeek = [];
en.forEach((el, idx) => dayOfWeek[en[idx]] = ru[idx]);

console.log(dayOfWeek);