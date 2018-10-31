// Functions
function deactivateLocationButtons() {
    var active_btns = document.getElementsByClassName("active_minecraft_button");
    for (var i = 0; i < active_btns.length; i++) {
        if (!(active_btns[i].classList.contains("sidebar_buttons") || active_btns[i].classList.contains("smp_buttons"))) {
            active_btns[i].classList.toggle("active_minecraft_button");
        }
    }
    var town_btn = document.getElementById("btn_town");
    if (town_btn.classList.contains("active_minecraft_button")) {
        town_btn.classList.toggle("active_minecraft_button");
    }
    var frontier_nether_btn = document.getElementById("btn_nether_frontier");
    if (frontier_nether_btn.classList.contains("active_minecraft_button")) {
        frontier_nether_btn.classList.toggle("active_minecraft_button");
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

function setTownMap() {
    document.getElementById("smp_map").src = "https://" + getActiveSMP() + ".emc.gs/?worldname=town";
}

function setWasteMap(button) {
    var x = 0;
    var z = 0;
    var worldname = "";
    switch(button.innerHTML) {
        case "Center":
            break;
        case "North":
            x = 0;
            z = -4000;
            break;
        case "Northeast":
            x = 4000;
            z = -4000;
            break;
        case "East":
            x = 4000;
            z = 0;
            break;
        case "Southeast":
            x = 4000;
            z = 4000;
            break;
        case "South":
            x = 0;
            z = 4000;
            break;
        case "Southwest":
            x = -4000;
            z = 4000;
            break;
        case "West":
            x = -4000;
            z = 0;
            break;
        case "Northwest":
            x = -4000;
            z = -4000;
            break;
    }
    if (button.classList.contains("waste_buttons")) {
        worldname = "wastelands";
    }
    else if (button.classList.contains("nether_waste_buttons")) {
        worldname = "wastelands_nether";
    }
    document.getElementById("smp_map").src = "https://" + getActiveSMP() + ".emc.gs/?worldname=" + worldname + "&x=" + x + "&z=" + z;
}

function setFrontierMap(button) {
    var x = 0;
    var z = 0;
    switch(button.innerHTML) {
        case "Center":
            break;
        case "North":
            x = 0;
            z = -10000;
            break;
        case "Northeast":
            x = 1000000;
            z = -1000000;
            break;
        case "East":
            x = 10000;
            z = 0;
            break;
        case "Southeast":
            x = 1000000;
            z = 1000000;
            break;
        case "South":
            x = 0;
            z = 10000;
            break;
        case "Southwest":
            x = -1000000;
            z = 1000000;
            break;
        case "West":
            x = -10000;
            z = 0;
            break;
        case "Northwest":
            x = -1000000;
            z = -1000000;
            break;
    }
    document.getElementById("smp_map").src = "https://" + getActiveSMP() + ".emc.gs/?worldname=wilderness" + "&x=" + x + "&z=" + z;
}

function setNetherFrontierMap() {
    document.getElementById("smp_map").src = "https://" + getActiveSMP() + ".emc.gs/?worldname=wilderness_nether";
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
        deactivateLocationButtons();
        deactivateSMPButtons();
        this.classList.toggle("active_minecraft_button");
        document.getElementById("smp_map").src = "https://" + this.innerHTML + ".emc.gs/";
    });
}

// Town Button
document.getElementById("btn_town").addEventListener("click", function () {
    deactivateLocationButtons();
    this.classList.toggle("active_minecraft_button");
    setTownMap();
});

// Waste Button
var wastes = document.getElementsByClassName("waste_buttons");
for (var i = 0; i < wastes.length; i++) {
    wastes[i].addEventListener("click", function () {
        deactivateLocationButtons();
        this.classList.toggle("active_minecraft_button");
        setWasteMap(this);
    });
}

// Nether Waste Button
var wastes = document.getElementsByClassName("nether_waste_buttons");
for (var i = 0; i < wastes.length; i++) {
    wastes[i].addEventListener("click", function () {
        deactivateLocationButtons();
        this.classList.toggle("active_minecraft_button");
        setWasteMap(this);
    });
}

// Frontier Button
var wastes = document.getElementsByClassName("frontier_buttons");

for (var i = 0; i < wastes.length; i++) {
    wastes[i].addEventListener("click", function () {
        deactivateLocationButtons();
        this.classList.toggle("active_minecraft_button");
        setFrontierMap(this);
    });
}

// Nether Frontier Button
document.getElementById("btn_nether_frontier").addEventListener("click", function () {
    deactivateLocationButtons();
    this.classList.toggle("active_minecraft_button");
    setNetherFrontierMap();
});