"use strict";
const range__mode=document.querySelector(".range__mode"),//Ползунок
      color__input=document.querySelector(".color__input"),
      color__btn=document.querySelector(".color__btn"),
      eraser__btn=document.querySelector(".eraser__btn"),
      clear__btn=document.querySelector(".clear__btn"),
      area=document.querySelector(".area");

let mouse=false;
activateBtn(color__btn)
// Очистить поле
function clearGrid(){
    document.querySelectorAll(".box").forEach((item)=>{
        item.style.backgroundColor="transparent";
    })
}
// Заменить поле ввода на определённый цвет
function changeColor(color){
    color__input.value=color;
}
// Активировать кнопку
function activateBtn(btn){
    color__btn.classList.remove("active");
    eraser__btn.classList.remove("active");
    clear__btn.classList.remove("active");
    btn.classList.add("active");
}
// Показать активную кнопку
function activeBtn(){   
    if(color__btn.classList.contains("active")) return "color__btn"
    else if(eraser__btn.classList.contains("active")) return "eraser__btn"
    else if (clear__btn.classList.contains("active")) return "clear__btn"
    else return;
}
// Возвращает нужное значение цвета
function currentColor(){
    if(activeBtn()=="color__btn") return (color__input.value)
    else if(activeBtn()=="eraser__btn") return("#FFFFFF")
}
// Обновить размер поля
function updateArea(shape=16){
    let container=document.createElement("div");
    container.classList.add("container");
    container.style.cssText=`
    display: grid;
    grid-template-columns: repeat(${shape},1fr);
    grid-template-rows:repeat(${shape},1fr);
    `
    for(let i=0;i<(shape**2);i++){
        let box= document.createElement("div");
        box.classList.add("box");
        container.insertAdjacentElement("beforeend",box)
    }
    area.innerHTML="";
    area.append(container)
    container.onmouseover=(e)=>{
        if(mouse){
            if (e.target.classList.contains("box")) e.target.style.backgroundColor=currentColor();
        }
    }
    container.onclick=(e)=>{if (e.target.classList.contains("box")) e.target.style.backgroundColor=currentColor();}
    container.ontouchmove=(e)=>{
        if (e.target.classList.contains("box")) e.target.style.backgroundColor=currentColor();
    }
}
updateArea()
// Прослушиватели
clear__btn.onclick=()=>{
    activateBtn(clear__btn);
    clearGrid();
}
eraser__btn.onclick=()=>{
    activateBtn(eraser__btn);
}
color__btn.onclick=()=>{
    activateBtn(color__btn);
}
range__mode.onchange=()=>{
    updateArea(range__mode.value)
}
document.onmousedown=()=>{mouse=true}
document.onmouseup=()=>{mouse=false}
document.getElementsByClassName("container")









