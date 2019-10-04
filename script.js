function isUsernameAvailable(str){
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            console.log(this);
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }

        };
        xmlhttp.open("GET", "checkUsername.php?q=" + str);
        xmlhttp.send();
    }
}


