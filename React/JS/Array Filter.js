// Array Filter
// const data = [10, 20, 30, 40]

// const result = data.filter(e=>e > 20)
// console.log(result);
const data = [
    {cusname: "ก้อง", salary:25000, department:"โปรแกรมเมอร์"},
    {cusname: "โจโจ้", salary:30000, department:"การตลาด"},
    {cusname: "นัท", salary:10000, department:"ฝึกงาน"},
    {cusname: "เบล", salary:50000, department:"การตลาด"},
    {cusname: "จอย", salary:10000, department:"ฝึกงาน"},
]

const result = data.filter(e=>e.salary > 10000).filter(e=>e.department==="การตลาด")

console.log(result);