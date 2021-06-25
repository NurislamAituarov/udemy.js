
const a = {
    q: 'rty',
    e: 'jfd',
    g: ';lj',
    v: {
        name:'nurik',
        age: 26,
    }
}
const b = {};
// Object.setPrototypeOf(b, a)
const v = {...a}
// const b = {...a}
// b.v.name = 0
a.v.name = 1
// console.log(b)
console.log(v)
console.log(a)








































// const btn = document.querySelectorAll('button');
// const kvadr = document.querySelector('.kvadr');
// const sid = document.querySelector('.sidebar')
// console.log(btn);////[button.btn, button.btn, button.btn, button.btn]
// btn[0].style.backgroundColor = 'red'
// for(let i = 0; i < btn.length; i++){
//     btn[i].style.backgroundColor = 'red'}
// /////только работает с querySelector////////////
// btn.forEach(function(item,index){
//     item.style.backgroundColor = 'red'})
// btn[0].style.cssText = 'background-color:blue; width:100px'
// ///МЕТОДЫ////////
// const div = document.createElement('div');// создаем div в html
// div.classList.add('kvadrat');//задаем class диву
// div.style.cssText = 'background-color:black; width:55px; height:20px;'
// document.body.append(div)// полдожил в конец
// kvadr.append(div)//положил в конец 
// kvadr.prepend(div)// положил в начало
// btn[0].before(div)
// btn[0].after(div)
// btn[0].remove()// удалить
// btn[0].replaceWith(div)// заменить










