window.onload = function () {
    sayac = 5; 
    var gruptanCik = document.querySelector("#gruptanCik");
    var gruptanCikButon = document.querySelector("#gruptanCikButon");
    gruptanCik.innerHTML = "Kişi Sayısı: " + sayac + "/10";
    gruptanCikButon.onclick = function () {
        if (sayac > 0) {  // sayac1 9 olduğunda if'e giriyor ve ++ olarak 10 oluyor. 10 olduktan sonra if'e giremiyor ve 10'dan fazla artamıyor.
            sayac--;
            gruptanCik.innerHTML = "Kişi Sayısı: " + sayac + "/10";
          
        }
    }
}
