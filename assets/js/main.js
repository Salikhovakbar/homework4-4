const inputName = document.getElementById("input-name");
const inputAge = document.getElementById("input-age");
const btnAdd = document.getElementById("btn-submit");
const btnGet = document.getElementById("btn-get-info");
const addInfo = document.getElementById("added-info");
const btnDeleteAll = document.getElementById("btn-delete-all");
"use strict";
let names = ["akbar", "John Doe", "Mark"]
let ages = [14, 15, 16, 21, 19, 18]
let addAge = ages.push(inputAge.value * 1)
let submitStr = () => {
     ages.push(inputAge.value * 1)
     names.push(inputName.value)
    localStorage.setItem("Name", JSON.stringify(names))
    localStorage.setItem("Age", JSON.stringify(ages))
    if(inputAge.value === ""){
        localStorage.setItem("Age", null)
    }
    if(inputName.value === ""){
        localStorage.setItem("Name", null)
    }
}
btnAdd.addEventListener("click", submitStr)
let getStr = () => {
    const pEl = document.createElement("p");
    const pEl2 = document.createElement("p");
    document.body.appendChild(pEl)
    document.body.appendChild(pEl2)
    pEl.innerHTML = localStorage.getItem("Name")
    pEl2.innerHTML = localStorage.getItem("Age")

}
btnGet.addEventListener("click", getStr)
btnDeleteAll.addEventListener("click", () => {
    localStorage.clear()
})