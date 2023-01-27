var button = document.getElementsByClassName("button");
var sidebar = document.getElementsById("sidebar");


sidebar.style.rigth=="-120px";
button.onclick = function() {
    if( sidebar.style.rigth=="-120px"){
        sidebar.style.rigth=="0px";

    }
    else{
        sidebar.style.right = "-120px";
    }
}
