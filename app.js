document.getElementById("1").onclick = () => {changeDisplay("about")};
document.getElementById("2").onclick = () => {changeDisplay("purpose")};
document.getElementById("3").onclick = () => {changeDisplay("benefits")};
document.getElementById("4").onclick = () => {changeDisplay("retro")};
document.getElementById("5").onclick = () => {changeDisplay("contact")};

function changeDisplay(id) {
    for (let element of document.getElementsByClassName("content"))
        element.style.display="none";
    document.getElementById(id).style.display = "block";
}