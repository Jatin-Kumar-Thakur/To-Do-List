console.log("chlo js bhai");

// function btn(){
// let input1=document.getElementById("inpt").value;

// }

function task() {
  let div_tasks = document.querySelector("#tasks");

  let break1 = document.createElement("br");
  let input1 = document.getElementById("inpt").value;
  if (!input1) {
    return alert("please enter some task");
  }
  let newdiv = document.createElement("div");

  let newp = document.createElement("p");
  newp.innerHTML = input1;

  let btntxt = document.createTextNode("DELETE");
  let newbtn = document.createElement("button");
  newbtn.appendChild(btntxt);

  newdiv.appendChild(newp);
  newdiv.appendChild(newbtn);
  // document.getElementById("tasks").appendChild(break1);
  document.getElementById("tasks").appendChild(newdiv);
  document.getElementById("inpt").value = "";

  newbtn.addEventListener("click", () => {
    div_tasks.removeChild(newdiv);
  });
}
