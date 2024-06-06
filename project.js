let input=document.querySelector('input');
let container=document.querySelector('.lists')
let pending=document.querySelector('#pending')
let all=document.querySelector('#all');
let complete=document.querySelector('#complete')
let message=document.querySelector('#msg')
let mode=document.querySelector('.mode')
let hero=document.querySelector('.container>img')
let clear=document.querySelector('#clear');
let content=document.querySelector('.cont')
input.addEventListener('keypress',function(e){ 
     if(e.key==='Enter'){
        if(input.value==='' || input.value.match(/[</>]/)){
            alert('You Lazy! The Todo cannot be Empty')
        }
      else{  
        let text=input.value;
        let list=document.createElement('div');
        let box=document.createElement('span');
        let icheck=document.createElement('img')
        icheck.setAttribute('src','images/icon-check.svg');
        box.appendChild(icheck)
        let icross=document.createElement('img')
        icross.setAttribute('src','images/icon-cross.svg');
        icross.classList.add('remove')
        let para=document.createElement('p');
        para.innerHTML=text;
        list.classList.add('list');
        list.classList.add('pending');
        list.classList.add('all')
        list.appendChild(box)
        list.appendChild(para);
        list.appendChild(icross)
        container.appendChild(list);
        input.value='';
       fo(list);
       updateLength() 
    updatedata()
    }
    } 
     
})

function fo(list){
    list.addEventListener('click',function(e){
        if(e.target.tagName==='IMG'){
            list.remove()
            updateLength() 
            updatedata()
        }
        else{
        list.classList.toggle('check')
        list.classList.toggle('pending')
        updatedata()
    }
    })
}
pending.addEventListener('click',()=>{
    showLists('pending')
    })
    all.addEventListener('click',()=>{
    showLists('all')
    })
    complete.addEventListener('click',()=>{
    showLists('check')
    })
   
    function showLists(status)
    {
        let lists=document.querySelectorAll('.list');
    lists.forEach(list=>{
    if(status==='all' || list.classList.contains(status))
    {
        list.style.display='flex';
       ;

        updatedata()
    }
    else
    {
    list.style.display='none';
   
    updatedata()
    }
})}

clear.addEventListener('click',()=>{
    let lists=document.querySelectorAll('.list');
    lists.forEach(list=>{
        if(list.classList.contains('check'))
            {
               list.remove();
               updateLength() 
               updatedata()
            }
    })
})

function updateLength() {
    let lists = document.querySelectorAll('.list');
    let length = lists.length;
    document.querySelector('.num').innerHTML = length;
}
function updatedata(){
    localStorage.setItem('container',container.innerHTML)
}


function showdata() {
    let data = localStorage.getItem('container');
    if (data) {
       container.innerHTML = data;
       
       let lists = document.querySelectorAll('.list');
       lists.forEach(list => fo(list));
       updateLength() 
    }
}
const dragarea=document.querySelector('.lists')
new Sortable(dragarea,()=>{
    animation:350;
    onEnd: updatedata;
})
function reset(){
    localStorage.removeItem('container');
   
    showdata()

}
let conta=document.querySelector('.container')
let dark=document.querySelector('.dark')
let light=document.querySelector('.light')

mode.addEventListener('click',()=>{
    content.classList.toggle('day');
    conta.classList.toggle('dayc')
    if(conta.classList.contains('dayc')){
        dark.style.display='none'
        light.style.display='block'
        mode.setAttribute('src','images/icon-moon.svg')
        console.log('true')
    }
    else{
        dark.style.display='block'
        light.style.display='none'
        mode.setAttribute('src','images/icon-sun.svg')
        console.log('false')
    }
})
showdata()
