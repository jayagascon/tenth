let d = Date();
document.getElementById("date").innerHTML = d;


function newTask(to, from) {
    let task = document.createElement("span");
    let newTask = document.getElementById(from).value;
    let text = document.createTextNode(newTask);
    task.appendChild(text);
    document.getElementById(to).appendChild(task);
    document.getElementById(from).value = "";
}

function toggleHide() {
    let id = document.getElementById("add");
    if (id.style.display === "none") {
        id.style.display = "inline-block";
    } else {
        id.style.display = "none";
    }
}