console.log('Сортировка');
let users = [
    {name: "Вася", surname: 'Иванов', age: 20},
    {name: "Петя", surname: 'Чапаев', age: 25},
    {name: "Маша", surname: 'Медведева', age: 18}
];

function byField(name){
    return (a, b)=>{ return a[name] > b[name] ? 1 : -1 }
}

users.sort(byField('age'));
console.log(users);
users.sort(byField('name'));
console.log(users);