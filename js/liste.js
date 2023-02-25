const liste = ["araignee.jpg", "balle.gif", "balleBasket.png", "balleTennis.png", "creature.gif", "gameOfLife3d.mp4", "pokeball.png", "room.png", "table.png", "vision.png"];
function suivant() {
    let ind = document.getElementById("ind").innerHTML;
    var nbI = parseInt(ind);
    nbI = nbI + 1;
    if (nbI >9) {
        nbI = 0;
    }
    document.getElementById("actualE").innerHTML = liste[nbI];
    addElement(nbI);
    document.getElementById("ind").innerHTML = ""+nbI;
}

function precedent() {
    let ind = document.getElementById("ind").innerHTML;
    var nbI = parseInt(ind);
    nbI = nbI - 1;
    if (nbI < 0) {
        nbI = 9;
    }
    document.getElementById("actualE").innerHTML = liste[nbI];
    addElement(nbI);
    document.getElementById("ind").innerHTML = "" + nbI;
}

function addElement(i) {
    if (i==5) {
        let empl = document.getElementById("actualE").innerHTML = "<video controls><source src=\"../media/" + liste[i] + "\" type=\"video/mp4\"></video>";
    }
    else {
        let empl = document.getElementById("actualE").innerHTML = "<img src=\"../media/" + liste[i] + "\" >";
    }
}