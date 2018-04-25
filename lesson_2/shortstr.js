/*
 * Cократим строки
 * АААBBFRRRR -> A3B2FR4
 */

let str = (str)=>{
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
    console.log(res);
    return res;
}

str('АА');
str('АBBB');
str('АBBBFFEEETRR');

