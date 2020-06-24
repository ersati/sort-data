

const down = document.querySelector('th > a');
const tableData = document.querySelectorAll('td.border')
const tableRows = document.querySelectorAll('tbody tr');
console.log(tableRows[0].innerHTML)
console.log(tableRows[0].querySelector('td:last-child').innerHTML )

// console.log(typeof tableData[2].innerHTML)
// console.log(typeof tableData[3].innerHTML)
const newArray = [];
const sortArr = []
 tableData.forEach((data) => {
  newArray.push(data.innerHTML)
 })

 const time = (totalSeconds) => {
   let totalSeconds;
   const hours = Math.floor(totalSeconds / 3600);
   totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds % 60)
  return `${hours}:${minutes}:${seconds}`
 }
time(tableRows[0].querySelector('td:last-child').innerHTML)
sortArr = newArray.filter((value,index,Arr) => (index+1) % 3 == 0)
const numberArr = sortArr.sort((a, b) => a - b)
// console.log(newArray)
// console.log(sortArr)
// console.log(numberArr)
down.addEventListener('click', () => { 
  // console.log('ok')
 
  
  })

