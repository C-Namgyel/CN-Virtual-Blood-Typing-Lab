function setScreen(id) {
    for (let i = 0; i < document.querySelectorAll(".scrn").length; i++) {
        if (document.querySelectorAll(".scrn")[i].id == id) {
            document.querySelectorAll(".scrn")[i].hidden = false
        } else {
            document.querySelectorAll(".scrn")[i].hidden = true
        }
    }
}
function test() {
    let group;
    if (reaction.A != undefined && reaction.B != undefined && reaction.Rh != undefined) {
        if (reaction.A == true && reaction.B == false) {
            group = "A"
        } else if (reaction.A == false && reaction.B == true) {
            group = "B"
        } else if (reaction.A == true && reaction.B == true) {
            group = "AB"
        } else {
            group = "O"
        }
        if (reaction.Rh == true) {
            group = group + "+"
        } else {
            group = group + "-"
        }
        let div = document.createElement("div");
        div.style = "position: fixed; left: 12.5%; width: 65%; top: 12.5%; height: 55%; border-style: solid; border-width: 2px; border-radius: 25px; background-color: blue; border-color: black; text-align: center; color: white; padding: 5%;"
        document.body.appendChild(div)
        div.innerHTML = "A: " + reaction.A + "<br>" + "B: " + reaction.B + "<br>" + "Rh: " + reaction.Rh + "<br><br><br>"
        let bloodTypes = ["A", "B", "AB", "O"]
        let Rhs = ["+", "-"]
        for (let b = 0; b < bloodTypes.length; b++) {
            for (let r = 0; r < Rhs.length; r++) {
                let btn = document.createElement("button")
                btn.innerHTML = bloodTypes[b] + Rhs[r]
                btn.value = bloodTypes[b] + Rhs[r]
                btn.className = "button"
                btn.onclick = function() {
                    if (this.value == group) {
                        alert("Correct!")
                    } else {
                        alert("Wrong! Try Again!")
                    }
                }
                let space = document.createTextNode("\u00A0\u00A0\u00A0");
                div.appendChild(space);
                div.appendChild(btn)
            }
            div.appendChild(document.createElement("br"))
            div.appendChild(document.createElement("br"))
        }
    }
}
document.getElementById("addBloods").onclick = function() {
    for (let i = 0; i < document.querySelectorAll(".blood").length; i++) {
        document.getElementById(document.querySelectorAll(".blood")[i].id).style.animationName = "grow"
        document.getElementById(document.querySelectorAll(".blood")[i].id).style.animationDuration = "1s"
        document.getElementById(document.querySelectorAll(".blood")[i].id).style.animationFillMode = "forwards"
        document.getElementById("addBloods").disabled = true;
    }
    setTimeout(function() {
        document.getElementById("addA").disabled = false;
        document.getElementById("addB").disabled = false;
        document.getElementById("addRh").disabled = false;
    }, 1500)
}
var reaction = {
    A: undefined,
    B: undefined,
    Rh: undefined
}
let blood = [true, false]
document.getElementById("addA").onclick = function() {
    document.getElementById("A").style.scale = 1;
    document.getElementById("A").style.animationName = "redA"
    document.getElementById("A").style.animationDuration = "1s"
    document.getElementById("addA").disabled = true;
    setTimeout(function() {
        let g = blood[Math.floor(Math.random()*(1 - 0 + 1) + 0)]
        if (g == true) {
            document.getElementById("A").style.animationName = "AReact"
        } else {
            document.getElementById("A").style.animationName = "ANo"
        }
        document.getElementById("A").style.animationDuration = "15s"
        setTimeout(function() {
            reaction.A = g;
            test()
        }, 15000)
    }, 1000)
}
document.getElementById("addB").onclick = function() {
    document.getElementById("B").style.scale = 1;
    document.getElementById("B").style.animationName = "redB"
    document.getElementById("B").style.animationDuration = "1s"
    document.getElementById("addB").disabled = true;
    setTimeout(function() {
        let g = blood[Math.floor(Math.random()*(1 - 0 + 1) + 0)]
        if (g == true) {
            document.getElementById("B").style.animationName = "BReact"
        } else {
            document.getElementById("B").style.animationName = "BNo"
        }
        document.getElementById("B").style.animationDuration = "15s"
        setTimeout(function() {
            reaction.B = g;
            test()
        }, 15000)
    }, 1000)
}
document.getElementById("addRh").onclick = function() {
    document.getElementById("Rh").style.scale = 1;
    document.getElementById("Rh").style.animationName = "redRh"
    document.getElementById("Rh").style.animationDuration = "1s"
    document.getElementById("addRh").disabled = true;
    setTimeout(function() {
        let g = blood[Math.floor(Math.random()*(1 - 0 + 1) + 0)]
        if (g == true) {
            document.getElementById("Rh").style.animationName = "RhReact"
        } else {
            document.getElementById("Rh").style.animationName = "RhNo"
        }
        document.getElementById("Rh").style.animationDuration = "15s"
        setTimeout(function() {
            reaction.Rh = g;
            test()
        }, 15000)
    }, 1000)
}