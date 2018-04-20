//буферы для работы с двоичными данными
const buf = Buffer.from('hello');
const arr = Buffer.from([1,3,5,99999999, 2.555533434]);
console.log(
	buf,
	buf.toString(),
	buf.toString('hex'),
	arr,
	arr.toString(),
);
for(const b of buf){
	console.log(b);
}

for(const b of arr){
	console.log(b);
}
