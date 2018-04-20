//пример асинхронной ф-ии обратного вызова
//во всю пользуемся es6
let fib = n => (n < 2 ) ? n : fib(n-1) + fib(n-2);

//старый синтаксис
let OldSyntax = function(){};

OldSyntax.prototype.doSomething = function(arg){
	console.log(arguments, arguments.length);
	return 'old syntax';
}

let old = new OldSyntax();

console.log(old.doSomething(1,[2,3],4));

//новый синтаксис
class NewSyntax{
	constructor(){
		console.log('constructor');
	}

	doSomething(arg1_){
		console.log(arguments, arguments.length);
		return 'new syntax';
	}
	callBack(num){
		let callback = typeof arguments[arguments.length - 1] === 'function' ?
			arguments[arguments.length - 1] : null;
		
		if (typeof num !== 'number')
			return callback !== null ? callback(new Error('not a number')) : false;
			
	
		//console.log(typeof(callback_));
	}
}

let oldSyntax = new OldSyntax();
let newSyntax = new NewSyntax();

newSyntax.callBack('1');
newSyntax.callBack(1);
newSyntax.callBack('2',(err, data)=>{console.error(err)});
newSyntax.callBack(1,(err,data)=>{
	console.error('my_test_function', err);
});

//console.log(oldSyntax.doSomething(1,[2,3],4));
//console.log(newSyntax.doSomething(1,[2,3],4));

