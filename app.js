document.getElementById("tab1").onclick = () => {changeDisplay("about")};
document.getElementById("tab11").onclick = () => {changeDisplay("about")};
document.getElementById("tab2").onclick = () => {changeDisplay("purpose")};
document.getElementById("tab22").onclick = () => {changeDisplay("purpose")};
document.getElementById("tab3").onclick = () => {changeDisplay("benefits")};
document.getElementById("tab33").onclick = () => {changeDisplay("benefits")};
document.getElementById("tab4").onclick = () => {changeDisplay("retro")};
document.getElementById("tab44").onclick = () => {changeDisplay("retro")};
document.getElementById("tab5").onclick = () => {changeDisplay("recurse")};
document.getElementById("tab55").onclick = () => {changeDisplay("recurse")};
document.getElementById("tab6").onclick = () => {changeDisplay("contact")};
document.getElementById("tab66").onclick = () => {changeDisplay("contact")};
document.getElementById("clickme").onclick = () => {changeDisplay("purpose")};
document.getElementById("back").onclick = () => {changeDisplay("about")};

window.onload = changeDisplay("about")

function changeDisplay(id) {
    for (let element of document.getElementsByClassName("content"))
        element.style.display="none";
    if (id == "about")
        document.getElementById("back").style.display = "none";
    else
        document.getElementById("back").style.display = "block";
    document.getElementById(id).style.display = "block";
}
