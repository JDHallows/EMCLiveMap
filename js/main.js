// Functions
function deactivateOutpostButtons() {
    var active_btns = document.getElementsByClassName("active_minecraft_button");
    for (var i = 0; i < active_btns.length; i++) {
        if (!(active_btns[i].classList.contains("sidebar_buttons") || active_btns[i].classList.contains("smp_buttons"))) {
            active_btns[i].classList.toggle("active_minecraft_button");
        }
    }
}

function deactivateSMPButtons() {
    var active_btns = document.getElementsByClassName("active_minecraft_button");
    for (var i = 0; i < active_btns.length; i++) {
        if (!active_btns[i].classList.contains("sidebar_buttons") && active_btns[i].classList.contains("smp_buttons")) {
            active_btns[i].classList.toggle("active_minecraft_button");
        }
    }
}

function getActiveSMP() {
    var smp;
    var active_btns = document.getElementsByClassName("active_minecraft_button");
        for (var i = 0; i < active_btns.length; i++) {
            if (active_btns[i].classList.contains("smp_buttons")) {
                smp = active_btns[i].innerHTML;
            }
        }
    return smp;
}

// End of Functions


// Accordion menu for world selection
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active_minecraft_button");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// SMP Buttons
var smps = document.getElementsByClassName("smp_buttons");

for (var i = 0; i < smps.length; i++) {
    smps[i].addEventListener("click", function () {
        deactivateOutpostButtons();
        deactivateSMPButtons();
        this.classList.toggle("active_minecraft_button");
        document.getElementById("smp_map").src = "https://" + this.innerHTML + ".emc.gs/";
    });
}

// Town Button
document.getElementById("btn_town").addEventListener("click", function () {
    var active_btns = document.getElementsByClassName("active_minecraft_button");
        for (var i = 0; i < active_btns.length; i++) {
            if (active_btns[i].classList.contains("smp_buttons")) {
                document.getElementById("smp_map").src = "https://" + active_btns[i].innerHTML + ".emc.gs/?worldname=town"
            }
        }
});

// Waste Button
var wastes = document.getElementsByClassName("waste_buttons");

for (var i = 0; i < wastes.length; i++) {
    wastes[i].addEventListener("click", function () {
        deactivateOutpostButtons();
        this.classList.toggle("active_minecraft_button");
        var x = 0;
        var z = 0;
        switch(this.innerHTML) {
            case "Center":
                break;
            case "North":
                x = 0;
                z = -4000;
                break;
        }
        document.getElementById("smp_map").src = "https://" + getActiveSMP() + ".emc.gs/?worldname=wastelands&x=" + x + "&z=" + z;
    });
}