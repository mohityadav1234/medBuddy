function myFunction() {
    var input, filter, medic, li, a, i,box, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    medic = document.getElementById("medicc");
    li = medic.getElementsByClassName("phCard");
    // box= document.getElementById("medBox");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("li")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            // box.style.display="";
        } else {
            li[i].style.display = "none";
            // box.style.display="none";
        }
    }
}