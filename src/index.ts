// 請介紹兩個字串方法跟數字方法

// String.prototype.concat（）
// 該concat()方法將字符串參數連接到調用字符串，並返回一個新字符串。
//該concat()函數將字符串參數連接到調用字符串，並返回一個新字符串。更改原始字符串或返回的字符串不會影響其他字符串。如果參數不是字符串類型，則在連接之前將其轉換為字符串值。

let a = 'hello';
let b = 'world';
console.log(a.concat(' ',b))
console.log(a.concat(',',b))

// String.prototype.startsWith（）
// 該startsWith()方法確定字符串是否以指定字符串的字符開頭，返回true還是false適當地。
// 此方法使您可以確定一個字符串是否以另一個字符串開頭。此方法區分大小寫。
let c = 'helle'
console.log(c.startsWith('h'))
console.log(c.startsWith('e'))
//---------------------------------------------------------------------------------------------------------------------------------

//Number.prototype.valueOf（）
//該valueOf()方法返回Number對象的包裝原始值。
//一個數字，表示指定Number對象的原始值。
let d = 42;

let d1 = d.valueOf();
console.log(d1);

let f = 123456
console.log(f.toFixed(2))



// 錢錢大於一個值，叫乾爹
let money = 600000;
let limit = 500000; // 限制值

if (money > limit) {
    console.log('乾爹')
} else if (money >= limit) {
    console.log('哥哥')
} else {
    console.log('弟弟')
}
