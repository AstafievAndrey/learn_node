console.log('сумма через замыкание');
console.log('sum(7)(-2) = '+sum(7)(-2));
function sum(a){
    return function(b){
        return a+b;
    }
}

/*
 * Создать «строковый буфер», который аккумулирует внутри себя значения. 
 * Его функционал состоит из двух возможностей:
 * * Добавить значение в буфер.
 * * Получить текущее содержимое.
 */

function buffer(str){
    var res = (str && str+' ')||'';
    return function(str){
            if(arguments.length === 0){
                 return res;
            }
            res += str+' ';
        };
}
function bufferClear(str){
    var res = (str && str+' ')||'';
    
    function buffer(str){
        if(arguments.length === 0){
            return res;
        }
        res += str + ' ';
    }
    
    buffer.clear = function(){
        res = ''
    };
    
    return buffer;
}

var buf = buffer(); 
buf('Hello'); buf('world'); buf('!'); 
console.log(buf());
buf = buffer('\nHi'); 
buf('this'); buf('is'); buf('second'); buf('variant'); buf('!\n\n');
console.log(buf());

buf = bufferClear(); 
buf('Hello'); buf('world'); buf('!'); 
console.log(buf());

buf.clear();
console.log(buf());
