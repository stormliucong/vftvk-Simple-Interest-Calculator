function compute()
{
    if (checkdata() == true){
        var principal = document.getElementById("principal").value;
        if(principal == ""){
            alert("Enter a positive number")
            focus
        }
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
    
        var year = new Date().getFullYear() + parseInt(years)
    
        html_display =  
        "If you deposit <span class='highlight'>" + principal + "</span>,<br>" + 
        "at an interest rate of <span class='highlight'>" + rate + "%</span>.<br>" +
        "You will receive an amount of <span class='highlight'>" + interest + "</span>,<br>" +
        "in the year <span class='highlight'>" + year + "</span>.<br>" 
        document.getElementById("result").innerHTML = html_display
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%"
}

function checkdata(){
    var principal = document.getElementById("principal");
    if(principal.value == '' | principal.value <= 0){
        principal.focus()
        alert("Enter a positive number")
        return false
    }
    return true
}

        