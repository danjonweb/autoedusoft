javascript: (function() {
    var start = prompt("Start range:", "");
    var end = prompt("End range:", "");
    var answers = prompt("Answers:", "");
    var a = [];
    for (var i = start; i <= end; i++) {
        var re = new RegExp("\\b" + i + "\\) ?(A|B|C|D|E)");
        var match = re.exec(answers);
        a.push(match[1]);
    }
    for (var i = start; i <= end; i++) {
        var e = document.getElementById("q." + i + ".answer");
        var v;
        if (a[0] == "A") {
            v = "0";
        } else if (a[0] == "B") {
            v = "1";
        } else if (a[0] == "C") {
            v = "2";
        } else if (a[0] == "D") {
            v = "3";
        } else if (a[0] == "E") {
            v = "4";
        }
        e.setAttribute("value", v);
        a.shift();
    }
})();