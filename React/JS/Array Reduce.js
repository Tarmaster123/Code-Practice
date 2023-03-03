// Array Reduce
// array.reduce((ค่าที่ถูกประมวณผล, e) => {}, ค่าเริ่มต้น)

// const data = [10, 20, 30, 40]
// const summation = data.reduce((value, e)=>{ e + value}, 0) 
// console.log(`result is ${summation}`);
// 0 คือค่าเริ่มต้น => value = 0

// value = 0
// total = 10 + 0
// total = 10 total turn to value

// value = 10
// total = 20 + 10
// total = 30 total turn to value

// value = 30
// total = 30 + 30
// total = 30 total turn to value

// value = 60
// total = 40 + 60
// total = 100 total turn to value

// value = 100 and return to result

const cart = [
    {itemname: "กระเป๋า", price:500},
    {itemname: "หนังสือ", price:900},
    {itemname: "กล้องถ่ายรูป", price:5000},
]
const summation = cart.reduce((value,e)=>e.price + value,0)
console.log(`ลูกค้าจ้องจ่ายเงิน ${summation} บาท`);


