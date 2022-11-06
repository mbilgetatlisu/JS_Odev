let fullName = prompt("Lutfen Adinizi Giriniz: ")

let text1 = document.querySelector("#text1")

text1.innerHTML = `${text1.innerHTML} <small style="color:red">${fullName}</small>`

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}