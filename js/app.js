function showText() {
     let num = document.getElementById("input").value;

     if (num > 79 && num <=100) {
        document.getElementById("result").innerText = "A+";
     } else if (num > 69 && num < 80) {
        document.getElementById("result").innerText = "A";
     }  else if (num > 59 && num < 70) {
        document.getElementById("result").innerText = "A-";
     }  else if (num > 49 && num < 60) {
        document.getElementById("result").innerText = "B";
     }  else if (num > 39 && num < 50) {
        document.getElementById("result").innerText = "C";
     }  else if (num > 32 && num < 40) {
        document.getElementById("result").innerText = "D";
     }  else if (num >= 0 && num < 33) {
        document.getElementById("result").innerText = "F";
     }  else {
        document.getElementById("result").innerText = 
        "Error Number"
     }
}
