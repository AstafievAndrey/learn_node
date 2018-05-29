/* 
 *
 */
class ShortStr{
    getStr(str){
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
}

module.exports = ShortStr;