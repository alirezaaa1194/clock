let hourbox = document.getElementById("hourbox");
let datebox = document.querySelector(".datebox");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let sesion = document.querySelector(".sesion");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let analogbox = document.getElementById("analogbox");
let session = "AM";
let date2 = new Date();
let hh = date2.getHours();
let mm = date2.getMinutes();
let ss = date2.getSeconds();
a.style.transformOrigin = "bottom";
a.style.transform = "rotate(" + ss * 6 + "deg)";
b.style.transformOrigin = "bottom";
b.style.transform = "rotate(" + mm * 6 + "deg)";
c.style.transformOrigin = "bottom";
c.style.transform = "rotate(" + hh * 30 + "deg)";
if (hh == 24) {
  hh = 0;
}
if (hh > 23 && hh < 12) {
  session = "AM";
}
if (hh > 12 && hh <= 23) {
  session = "PM";
}

if (ss < 10) {
  sec.innerHTML = "0" + ss;
} else {
  sec.innerHTML = ss;
}
if (mm < 10) {
  min.innerHTML = "0" + mm;
} else {
  min.innerHTML = mm;
}
if (hh < 10) {
  min.innerHTML = "0" + hh;
} else {
  hour.innerHTML = hh;
}
if (ss == 0) {
  hourbox.style.boxShadow = "0px 0px 40px pink";
  analogbox.style.boxShadow = "0px 0px 40px pink";
} else {
  hourbox.style.boxShadow = "0px 0px 15px pink";
  analogbox.style.boxShadow = "0px 0px 15px pink";
}
sesion.innerHTML = session;
setInterval(function () {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  if (hh == 24) {
    hh = 0;
  }
  if (hh > 23 && hh < 12) {
    session = "AM";
  }
  if (hh > 12 && hh <= 23) {
    session = "PM";
  }
  if (ss < 10) {
    sec.innerHTML = "0" + ss;
  } else {
    sec.innerHTML = ss;
  }
  if (mm < 10) {
    min.innerHTML = "0" + mm;
  } else {
    min.innerHTML = mm;
  }
  if (hh < 10) {
    min.innerHTML = "0" + hh;
  } else {
    hour.innerHTML = hh;
  }
  if (ss == 0) {
  hourbox.style.boxShadow = "0px 0px 40px pink";
  analogbox.style.boxShadow = "0px 0px 40px pink";
} else {
  hourbox.style.boxShadow = "0px 0px 15px pink";
  analogbox.style.boxShadow = "0px 0px 15px pink";
}

  sesion.innerHTML = session;
  a.style.transformOrigin = "bottom";
  a.style.transform = "rotate(" + ss * 6 + "deg)";
  b.style.transformOrigin = "bottom";
  b.style.transform = "rotate(" + mm * 6 + "deg)";
  c.style.transformOrigin = "bottom";
  c.style.transform = "rotate(" + hh * 30 + "deg)";
}, 1000);

let y = document.getElementById("year");
let m = document.getElementById("mon");
let d = document.getElementById("day");
let date = new Date();
let irDate = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});
let timeToParts = irDate.formatToParts(date);
let year = timeToParts[0].value;
y.innerHTML = year;
let month = timeToParts[2].value;
m.innerHTML = month;
let day = timeToParts[4].value;
d.innerHTML = day;
if(hh==0 && mm==0 && ss==0){
    datebox.style.boxShadow = "0px 0px 40px pink";
  } else {
    datebox.style.boxShadow = "0px 0px 15px pink";
  }