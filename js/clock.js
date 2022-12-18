let myName = document.querySelector("#myName");
let message = prompt("Kullanici adinizi giriniz : ");
myName.innerHTML = message;

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    let d = today.getDay(); // getDay ile 0~6 arasi geldigi icin gun isimleri cagirdik
    if (d==0) {d = "Pazar"};
    if (d==1) {d = "Pazartesi"};
    if (d==2) {d = "Sali"};
    if (d==3) {d = "Carsamba"};
    if (d==4) {d = "Persembe"};
    if (d==5) {d = "Cuma"};
    if (d==6) {d = "Cumartesi"};
    
    // h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + "  " + d;

  }

    showTime();
    setInterval(showTime,1000);
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // dakika ve saniye onune 10 dan kucukken "0" eklemek icin
    return i;
  }



