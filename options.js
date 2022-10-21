// Dynamically creates screen option elements into UI 

import split from "./windowManager.js";

// Getting the parent table container
let table = document.getElementById("main_container");

// size of the clickable option bar in the UI
let optionWidth = 104;
let optionHeight = 41;

// different option sizes
let sizes = [[3, 7], [4, 6], [5, 5], [6, 4], [7, 3]];
let size_labels = ["3:7", "4:6", "5:5", "6:4", "7:3"]

for (let i = 0; i < sizes.length; i++) {
    var tr = document.createElement('tr');  

    var label = document.createElement('td');
    label.setAttribute("class", "number_label");
    label.appendChild(document.createTextNode(size_labels[i]));
    tr.appendChild(label);

    for (let k = 0; k < 2; k++) {
        var sizeSplit = (10 / sizes[i][k]);
        var width = optionWidth / sizeSplit;

        var td = document.createElement('td');

        // var svg = document.createElement("div");
        td.setAttribute("style", `width: ${width}px; height: ${optionHeight}px; fill: white; stroke-width:2; stroke:#77a6f7; z-index: 99;`);
        // svg.className = "screen_name";
        // var rect = document.createElement("rect");
        // rect.setAttribute("class","screen_name");
        // rect.setAttribute("width", width);
        // rect.setAttribute("height", optionHeight);

        // function func() {
        //     if (k == 0) {
        //         split(sizeSplit, "L");
        //     } else {
        //         split(sizeSplit, "R");
        //     }
        // }
        // rect.addEventListener("click", func);

        // svg.appendChild(rect);
        // td.appendChild(svg);

        tr.appendChild(td);
    }

    table.appendChild(tr)
}