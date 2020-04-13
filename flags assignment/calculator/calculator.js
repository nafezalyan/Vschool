
// const readline = require("readline-sync")

function sumValues ()
{
    var num1, num2, res;
    num1=Number(document.formcalc.txtnum1.value);
    num2=Number(document.formcalc.txtnum2.value);
    res=num1+num2;
    document.formcalc.txtres.value=res;
}
function subtract ()
{
    var num1, num2, res;
    num1=Number(document.formcalc.txtnum1.value);
    num2=Number(document.formcalc.txtnum2.value);
    res=num1-num2;
    document.formcalc.txtres.value=res;
}
function multiplyBy()
{
    var num1, num2, res;
    num1=Number(document.formcalc.txtnum1.value);
    num2=Number(document.formcalc.txtnum2.value);
    res=num1*num2;
    document.formcalc.txtres.value=res;
}

function divideBy() 
{ 
    var num1, num2, res;
    num1=Number(document.formcalc.txtnum1.value);
    num2=Number(document.formcalc.txtnum2.value);
    res=num1/num2;
    document.formcalc.txtres.value=res;
}