const ok = document.querySelector('.ok')
const field = document.querySelector('.field')
const a = document.querySelector('.a')
const current = document.querySelector('.currentDay')

const today = new Date()

const month = [
  "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
  "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
]

function daysCount(){
const startDate = new Date(2004, 2, 6);
const timeDiff = today.getTime() - startDate.getTime()
const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
return days
}
function getMonday() {
  const currentDay = today.getDay(); 
  const Monday = (currentDay === 1) ? 7 : (8 - currentDay)
  return Monday
}


 
ok.addEventListener('click',(e)=>{
    e.preventDefault()
    field.value = `${daysCount()}`
})
a.addEventListener('click',(e)=>{
    e.preventDefault()
    const today = new Date();
    alert(month[today.getMonth()]) 
})
window.addEventListener('load', ()=> {
  alert(`До неділі ${getMonday()} `)
  current.textContent = `Поточна дата: ${today.toLocaleDateString()}`
});




function updateTime() {
  let datetimeElement = document.querySelector('.date-time');
  let now = new Date();
  let time = now.toLocaleTimeString();

  datetimeElement.innerHTML = `Зараз: ${time}`;

  setTimeout(updateTime, 1000); 
}
updateTime(); 

