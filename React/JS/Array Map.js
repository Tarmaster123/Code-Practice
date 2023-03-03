// Array Map

// const number = [10, 20, 30, 40]
// const result = number.map(e=>e*e)

// console.log(`Array Map = ${result}`);
// // [10, 20, 30, 40]
// // [10*2, 20*2, 30*2, 40*2]
// // [20, 40, 60, 80]

// const data = ["ฝนตก", "แดดร้อน", "ฝนฟ้าคะนอง", "แดดร้อน", "ฝนตก", "อากาศดี", "หมอก"]
// console.log(data);
// const result = data.map((e, i)=>{
//     return `วันที่ ${i+1} , สภาพอากาศ  = ${e}`
// })

// console.log(result);
const data = [
    {day:"01/06/2564" ,weather:"แดดร้อน", tem:27},
    {day:"03/06/2564" ,weather:"ฝนตก", tem:23},
    {day:"04/06/2564" ,weather:"หมอก", tem:18}
]

const result = data.map(e=>e.weather
)

console.log(result);