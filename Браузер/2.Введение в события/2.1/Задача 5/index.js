const toggle = document.querySelector('#toggle')
const arrow = document.querySelector('#arrow')
const list = document.querySelector('#list')



toggle.addEventListener('click',()=>{
    arrow.classList.toggle('up')
   if(arrow.className === 'up'){
       arrow.innerHTML = '▼'
       list.hidden = false
   }else {
       arrow.innerHTML = '▶'
       list.hidden = true
   }
})