function includeHTML() {
    var http, all, i, file, e;
    all = document.getElementsByTagName("*");
    for (i = 0; i < all.length; i++) {
        e = all[i];
        file = e.getAttribute("include");
        if (file) {
            http = new XMLHttpRequest();
            http.onreadystatechange = function() {
                if (this.readyState == 4) {
                    e.innerHTML = this.responseText;
                    e.removeAttribute("include");
                    includeHTML();
                }
            };
            http.open("GET", file, true);
            http.send();
            return;
        }
    }
}