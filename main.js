function ilceleriGetir(params) {
    var httpistegi = new XMLHttpRequest();
    var adres = "https://raw.githubusercontent.com/volkansenturk/turkiye-iller-ilceler/master/il-ilce.json";


    httpistegi.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            var ilceSlc = document.getElementById('ilceler');
            myArr.forEach(myArr => {
                ilceSlc.innerHTML += '<option> ' + myArr.ilce + ' <option>'
            });
        }
    };
    httpistegi.open("GET", adres, true);
    httpistegi.send();
}