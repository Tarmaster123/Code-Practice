
getDataCustomer = (customerName, customerAddress = "เชียงใหม่")=>{
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAddress}`
    return address
}

console.log(getDataCustomer("กีต้าร์" , "ฝาง"))
console.log(getDataCustomer("กีโต้"))