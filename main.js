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
window.onload = function () {


    // Gruba Katıl butonuna ve Kişi Sayısı'nın yazıldığı <li>'ye id atadım. her biri için ayrı ayrı id'ler ataman lazım.
    sayac1 = 2; // sayac1 1. card için geçerli. her bir card için ayrı sayac2 sayac3 diye yapman lazım.
    var item1 = document.querySelector("#item1");
    var buton1 = document.querySelector("#buton1");
    item1.innerHTML = "Kişi Sayısı: " + sayac1 + "/10";
    buton1.onclick = function () {
        if (sayac1 < 10) {  // sayac1 9 olduğunda if'e giriyor ve ++ olarak 10 oluyor. 10 olduktan sonra if'e giremiyor ve 10'dan fazla artamıyor.
            sayac1++;
            item1.innerHTML = "Kişi Sayısı: " + sayac1 + "/10";
        }
    }

    sayac2 = 0;
    var item2 = document.querySelector("#item2");
    var buton2 = document.querySelector("#buton2");
    item2.innerHTML = "Kişi Sayısı: " + sayac2 + "/10";
    buton2.onclick = function () {
        if (sayac2 < 10) {
            sayac2++;
            item2.innerHTML = "Kişi Sayısı: " + sayac2 + "/10";
        }
    }

    sayac3 = 4;
    var item3 = document.querySelector("#item3");
    var buton3 = document.querySelector("#buton3");
    item3.innerHTML = "Kişi Sayısı: " + sayac3 + "/10";
    buton3.onclick = function () {
        if (sayac3 < 10) {
            sayac3++;
            item3.innerHTML = "Kişi Sayısı: " + sayac3 + "/10";
        }
    }

    sayac4 = 0;
    var item4 = document.querySelector("#item4");
    var buton4 = document.querySelector("#buton4");
    item4.innerHTML = "Kişi Sayısı: " + sayac4 + "/10";
    buton4.onclick = function () {
        if (sayac4 < 10) {
            sayac4++;
            item4.innerHTML = "Kişi Sayısı: " + sayac4 + "/10";
        }
    }

    sayac5 = 7;
    var item5 = document.querySelector("#item5");
    var buton5 = document.querySelector("#buton5");
    item5.innerHTML = "Kişi Sayısı: " + sayac5 + "/10";
    buton5.onclick = function () {
        if (sayac5 < 10) {
            sayac5++;
            item5.innerHTML = "Kişi Sayısı: " + sayac5 + "/10";
        }
    }

    sayac6 = 3;
    var item6 = document.querySelector("#item6");
    var buton6 = document.querySelector("#buton6");
    item6.innerHTML = "Kişi Sayısı: " + sayac6 + "/10";
    buton6.onclick = function () {
        if (sayac6 < 10) {
            sayac6++;
            item6.innerHTML = "Kişi Sayısı: " + sayac6 + "/10";
        }
    }

    sayac7 = 4;
    var item7 = document.querySelector("#item7");
    var buton7 = document.querySelector("#buton7");
    item7.innerHTML = "Kişi Sayısı: " + sayac7 + "/10";
    buton7.onclick = function () {
        if (sayac7 < 10) {
            sayac7++;
            item7.innerHTML = "Kişi Sayısı: " + sayac7 + "/10";
        }
    }

    sayac8 = 6;
    var item8 = document.querySelector("#item8");
    var buton8 = document.querySelector("#buton8");
    item8.innerHTML = "Kişi Sayısı: " + sayac8 + "/10";
    buton8.onclick = function () {
        if (sayac8 < 10) {
            sayac8++;
            item8.innerHTML = "Kişi Sayısı: " + sayac8 + "/10";
        }
    }

    sayac9 = 0;
    var item9 = document.querySelector("#item9");
    var buton9 = document.querySelector("#buton9");
    item9.innerHTML = "Kişi Sayısı: " + sayac9 + "/10";
    buton9.onclick = function () {
        if (sayac9 < 10) {
            sayac9++;
            item9.innerHTML = "Kişi Sayısı: " + sayac9 + "/10";
        }
    }
    sayac10 = 4;
    var item10 = document.querySelector("#item10");
    var buton10 = document.querySelector("#buton10");
    item10.innerHTML = "Kişi Sayısı: " + sayac10 + "/10";
    buton10.onclick = function () {
        if (sayac10 < 10) {
            sayac10++;
            item10.innerHTML = "Kişi Sayısı: " + sayac10 + "/10";
        }
    }

    sayac11 = 6;
    var item11 = document.querySelector("#item11");
    var buton11 = document.querySelector("#buton11");
    item11.innerHTML = "Kişi Sayısı: " + sayac11 + "/10";
    buton11.onclick = function () {
        if (sayac11 < 10) {
            sayac11++;
            item11.innerHTML = "Kişi Sayısı: " + sayac11 + "/10";
        }
    }

    sayac12 = 3;
    var item12 = document.querySelector("#item12");
    var buton12 = document.querySelector("#buton12");
    item12.innerHTML = "Kişi Sayısı: " + sayac12 + "/10";
    buton12.onclick = function () {
        if (sayac12 < 10) {
            sayac12++;
            item12.innerHTML = "Kişi Sayısı: " + sayac12 + "/10";
        }
    }
}