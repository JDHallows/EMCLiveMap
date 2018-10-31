/*
// Add active class to the current server link (highlight it)
var header = document.getElementById("server_list");
var btns = header.getElementsByClassName("server_link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active_server");
        current[0].className = current[0].className.replace(" active_server", "");
        this.className += " active_server";
    });
}
*/

// Accordion menu for world selection
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active_sidebar");
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
        this.classList.toggle("active_smp");
    });
}

// On click events
document.getElementById("btn_servers").addEventListener("click", function() {
    return;
});


document.getElementById("btn_town").addEventListener("click", function () {
    var map = document.getElementById("smp_map");
    var currentSMP = document.getElementsByClassName("active_server");
    map.src = currentSMP[0].href + "&worldname=town";
});



document.getElementsByClassName("lnk_waste").addEventListener("click", function () {
    var map = document.getElementById("smp_map");
    var currentSMP = document.getElementsByClassName("active_server");
    var waste_outpost_coords = none;
    switch (this.id) {
        case "lnk_waste_center":
            waste_outpost_coords = "&x=0&z=0";
            break;
        case "lnk_waste_north":
            waste_outpost_coords = "&x=0&z=-4000";
            break;
        case "lnk_waste_east":
            waste_outpost_coords = "&x=4000&z=0";
            break;
        case "lnk_waste_south":
            waste_outpost_coords = "&x=0&z=4000";
            break;
        case "lnk_waste_west":
            waste_outpost_coords = "&x=-4000&z=0";
            break;
    }
    map.src = currentSMP[0].href + "&worldname=wastelands" + waste_outpost_coords;
});

document.getElementsByClassName("server_buttons").addEventListener("click", function () {

})


// Functions
