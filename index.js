function fafabar() {
    var x = document.getElementById("myTopnav");
    if (x.className ==="topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var modal = document.getElementById('form1');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var currentTab = 0;
showTab(currentTab);

function showTab(n){
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n==0){
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n==(x.length-1)){
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n);
}

function fixStepIndicator(n){
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++){
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}

function nextPrev(n){
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length){
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function lightUp1(n){
    var style = document.createElement('style');
    switch(n){
        case 1:
            style.innerHTML = `
            .tabOne .btn1{
                background-color: red;
            }

            .tabOne .btn2, .tabOne .btn3{
                background-color: white;
            }
            `;
            document.head.appendChild(style);
            break;
        case 2:
            style.innerHTML = `
            .tabOne .btn2{
                background-color: red;
            }

            .tabOne .btn1, .tabOne .btn3{
                background-color: white;
            }
            `;
            document.head.appendChild(style);
            break;
        case 3:
            style.innerHTML = `
            .tabOne .btn3{
                background-color: red;
            }

            .tabOne .btn2, .tabOne .btn1{
                background-color: white;
            }
            `;
            document.head.appendChild(style);
            break;
        default:
            ; 
    }
}

function lightUp2(n){
    var style = document.createElement('style');
    switch(n){
        case 1:
            style.innerHTML = `
            .tabTwo .btn1{
                background-color: red;
            }

            .tabTwo .btn2, .tabTwo .btn3{
                background-color: white;
            }
            `;
            document.head.appendChild(style);
            break;
        case 2:
            style.innerHTML = `
            .tabTwo .btn2{
                background-color: red;
            }

            .tabTwo .btn1, .tabTwo .btn3{
                background-color: white;
            }
            `;
            document.head.appendChild(style);
            break;
        case 3:
            style.innerHTML = `
            .tabTwo .btn3{
                background-color: red;
            }

            .tabTwo .btn2, .tabTwo .btn1{
                background-color: white;
            }
            `;
            document.head.appendChild(style);
            break;
        default:
            ; 
    }
    
}

function lightUp3(n){
    var style = document.createElement('style');
    switch(n){
        case 1:
            style.innerHTML = `
            .tabThree .btn1{
                background-color: red;
            }

            .tabThree .btn2, .tabThree .btn3{
                background-color: white;
            }
            `;
            document.head.appendChild(style);
            break;
        case 2:
            style.innerHTML = `
            .tabThree .btn2{
                background-color: red;
            }

            .tabThree .btn1, .tabThree .btn3{
                background-color: white;
            }
            `;
            document.head.appendChild(style);
            break;
        case 3:
            style.innerHTML = `
            .tabThree .btn3{
                background-color: red;
            }

            .tabThree .btn2, .tabThree .btn1{
                background-color: white;
            }
            `;
            document.head.appendChild(style);
            break;
        default:
            ; 
    } 
}