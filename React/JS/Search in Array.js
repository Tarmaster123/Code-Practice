// ค้นหาข้อมูลใน Array
// indexOf(ข้อมูล) 
// find(ข้อมูล)
// findIndex(ข้อมูล)

const colors = ["แดง", "เขียว", "น้ำเงิน", "ม่วง", "ขาว"]
// indexOf(ข้อมูล) 
// const index = colors.indexOf("เหลือง")
// console.log(index);

// find(ข้อมูล)
// const search = colors.find(element=>element === "เหลือง")
// console.log(search)

// findIndex(ข้อมูล)
const search = colors.findIndex(element=>element === "เขียว")
console.log(search)
