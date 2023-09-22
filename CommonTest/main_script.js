var label = "共通テスト1日目";
var target_date = new Date(2024, 1-1, 13, 0, 0, 0, 0);


function onload() {
    document.getElementById("label").innerHTML = label + "まであと";
    document.getElementById("unit").innerHTML = "秒";
    setInterval(main, 10);
}

function main() {
    var headline = document.getElementById("time");
    var now = new Date();

    var dt = target_date.getTime() - now.getTime();
    dt /= 1000;
    dt = dt.toFixed(2);
    headline.innerHTML = dt;
}

