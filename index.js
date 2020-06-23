

const down = document.querySelector('th > a');
const tableData = document.querySelectorAll('td.border')

console.log(typeof tableData[2].innerHTML)
console.log(typeof tableData[3].innerHTML)
const newArray = [];
const sortArr = []
 tableData.forEach((data) => {
  newArray.push(data.innerHTML)
 })

sortArr = newArray.filter((value,index,Arr) => (index+1) % 3 == 0)
const numberArr = sortArr.sort((a, b) => a - b)
console.log(newArray)
console.log(sortArr)
console.log(numberArr)
down.addEventListener('click', () => { 
  console.log('ok')
 
  
  })

