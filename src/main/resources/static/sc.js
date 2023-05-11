var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");
var his_btn = document.querySelectorAll(".his_btn");
document.getElementById("lnv").value = "0";
document.getElementById("rORg").value = "0";
const e = 2.71828182846;
var id = 1

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;
    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}
for (item of his_btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;
    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value = btntext;
  });
}

function Rad_Dag_Function() {
  var rORg = document.getElementById("rORg");
  if (rORg.value == "0") {
    rORg.innerHTML =
      '<span style="color: rgb(136, 136, 136);">Rad</span> | Deg';
    document.getElementById("rORg").value = "1";
  } else {
    rORg.innerHTML =
      'Rad | <span style="color: rgb(136, 136, 136);">Deg</span>';
    document.getElementById("rORg").value = "0";
  }
}

function lnvFunction() {
  var lnv = document.getElementById("lnv");
  var sin = document.getElementById("sin");
  var cos = document.getElementById("cos");
  var tan = document.getElementById("tan");
  var log = document.getElementById("log");
  var ln = document.getElementById("ln");
  var sqrt = document.getElementById("sqrt");
  var prx = document.getElementById("prx");
  //    prx -> power or root of x

  if (lnv.value == "0") {
    sin.innerHTML = "sin<sup>-1</sup>";
    ln.innerHTML = "e<sup>x</sup>";
    cos.innerHTML = "cos<sup>-1</sup>";
    log.innerHTML = "10<sup>x</sup>";
    tan.innerHTML = "tan<sup>-1</sup>";
    sqrt.innerHTML = "x<sup>2</sup>";
    prx.innerHTML = "<sup>y</sup>√x";
    document.getElementById("lnv").style.backgroundColor = ".row:button";
    document.getElementById("lnv").value = "1";
  } else if (lnv.value == "1") {
    sin.innerHTML = "sin";
    ln.innerHTML = "ln";
    cos.innerHTML = "cos";
    log.innerHTML = "log";
    tan.innerHTML = "tan";
    sqrt.innerHTML = "√";
    prx.innerHTML = "x<sup>y</sup>";

    document.getElementById("lnv").className = ".row button:hover";
    document.getElementById("lnv").value = "0";
  }
}
function sinFunction() {
  var value = screen.value;
  if (document.getElementById("sin").innerHTML == "sin") {
    screen.value = Math.sin(value);
    sendDataFrontendToBackend("sin(" + value + ")");
  } else {
    screen.value = Math.asin(value);
    sendDataFrontendToBackend("sin<sup>-1</sup>(" + value + ")");
  }
}

function lnFunction() {
  var value = screen.value;
  if (document.getElementById("ln").innerHTML == "ln") {
    screen.value = Math.log(value) / Math.log(e);
    sendDataFrontendToBackend("ln(" + value + ")");
  } else {
    screen.value = Math.pow(e, value);
    sendDataFrontendToBackend("e<sup>x</sup>(" + value + ")");
  }
}

function cosFunction() {
  var value = screen.value;
  if (document.getElementById("cos").innerHTML == "cos") {
    screen.value = Math.cos(value);
    sendDataFrontendToBackend("cos(" + value + ")");
  } else {
    screen.value = Math.acos(value);
    sendDataFrontendToBackend("cos<sup>-1</sup>(" + value + ")");
  }
}

function logFunction() {
  var value = screen.value;
  if (document.getElementById("log").innerHTML == "log") {
    screen.value = Math.log(value);
    sendDataFrontendToBackend("log(" + value + ")");
  } else {
    screen.value = Math.pow(10, value);
    sendDataFrontendToBackend("10<sup>x</sup>(" + value + ")");
  }
}

function tanFunction() {
  var value = screen.value;
  if (document.getElementById("tan").innerHTML == "tan") {
    screen.value = Math.tan(value);
    sendDataFrontendToBackend("tan(" + value + ")");
  } else {
    screen.value = Math.atan(value);
    sendDataFrontendToBackend("tan<sup>-1</sup>(" + value + ")");
  }
}

function powFunction() {
  var value = screen.value;
  screen.value = Math.pow(value, 2);
  // sendDataFrontendToBackend('tan('+value+')')
}

function sqrtFunction() {
  var value = screen.value;
  if (document.getElementById("sqrt").innerHTML == "√") {
    screen.value = Math.sqrt(value, 2);
    sendDataFrontendToBackend("√(" + value + ")");
  } else {
    screen.value = Math.pow(value, 2);
    sendDataFrontendToBackend("x<sup>2</sup>(" + value + ")");
  }
}

function piFunction() {
  screen.value = 3.14159265359;
  sendDataFrontendToBackend("π");
}

function eFunction() {
  screen.value = e;
  sendDataFrontendToBackend("e");
}
function expFunction() {
  var num, i, n;
  num = 10;
  n = screen.value;
  for (i = 1; i <= n; i++) {
    num *= 10;
  }
  screen.value = num;
  sendDataFrontendToBackend("1*10" + n);
}

function powFunction() { }

function factFunction() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  screen.value = f;
  sendDataFrontendToBackend(num + "!");
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

// async function fetchData(type = "info") {
//   let response
//   type === "info" ?
//       response = await fetch("info")
//       :
//       response = await fetch("info")
//   const data = await response.json();
//   return data;
// }

var ar = []
function show() {
  var info = document.getElementById("info");
  info.innerHTML = "";
  for (var i = ar.length - 1; i >= 0; i--) {
    info.insertAdjacentHTML(
      "afterbegin",
      `
      <div>
        <button class='his_btn'>${ar[i].equation}</button>=<button class='his_btn'>${ar[i].value}</button>
      </div>`
    );
  }
}

const historyFunction = () => {
  const his = document.getElementById("his");
  his.classList.toggle("show");
  show();  
};

const evalFunction = () => {
  var equ = screen.value;
  screen.value = eval(screen.value);
  sendDataFrontendToBackend(equ);
};

// const generateId = (() => {
//   let id = 0;
  
//   return () => {
//     return id++;
//   };
// })();

function sendDataFrontendToBackend(equation) {  
  getServerData()  
  id = id*1+1
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Response received:", this.responseText);
      getServerData();
    }
  };
  xhttp.open("POST", "/addhistory", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(
    JSON.stringify({
      id: id,
      equation: equation,
      value: screen.value,
    })
  );  
}

window.onload = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/gethistory", true);
  xhttp.setRequestHeader("Content-Type", "application/json");  
  xhttp.onreadystatechange = function () {
    if(xhttp.readyState == 4 ) {      
      ar = JSON.parse(xhttp.responseText)
      id = ar[0].id      
    }    
  }  
  xhttp.send();
}

function getServerData() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/gethistory", true);
  xhttp.setRequestHeader("Content-Type", "application/json");  
  xhttp.onreadystatechange = function () {
    if(xhttp.readyState == 4 ) {      
      ar = JSON.parse(xhttp.responseText)
      id = ar[0].id
    }
  }
  xhttp.send();
}