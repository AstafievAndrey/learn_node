/*
 * Cократим строки
 * АААBBFRRRR -> A3B2FR4
 */

let str = (str)=>{
    return str.split('').reduce(
        (res, current, item, arr)=>{
            if(arr[item+1] !== undefined){
                if(current === arr[item+1]){
                    res[res.length - 1]['count']++;
                }else{
                    res.push({value: arr[item+1], count: 1});
                }
            }
            return res;
        },
        [{value: str[0], count: 1}]
    ).reduce(
        (res, current)=>{
            return res += (current.count === 1) ? 
                            current.value : current.value+current.count
        },
        ''
    );
}

let str2 = (str)=>{
    let res = '';
    let char = [];
    char[0] = {value: str[0], count: 1};
    for(let i = 1; i < str.length; i++){
        if(str[i] === str[i-1]){
            char[char.length - 1]['count']++;
        }else{
            char.push({value: str[i], count: 1});
        }
    }
    for(let i = 0; i < char.length; i++){
        res += (char[i].count === 1) ? 
            char[i].value : char[i].value+char[i].count;
    }
    return res;
}

console.log(str('АА'));
console.log(str('АBBB'));
console.log(str('АBBBFFEEETRR'));

