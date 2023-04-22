function storeTheUserInfo()
{
    var inputTag=document.querySelectorAll("input");
    var selectTag=document.querySelectorAll("select");
    var fname=inputTag[0].value;
    var Lname=inputTag[1].value;
    var mIdOrPhno=inputTag[2].value;
    var pass=inputTag[3].value;

    var date=selectTag[0].value;
    var mo=selectTag[1].value;
    var yy=selectTag[2].value;
    window.sessionStorage.setItem("mailIdOrphno",mIdOrPhno);
    window.sessionStorage.setItem("pass",pass);

    window.localStorage.setItem("mailIdOrphno",mIdOrPhno);
    window.localStorage.setItem("pass",pass);
    window.localStorage.setItem("fname",fname);
    window.localStorage.setItem("Lname",Lname);
    window.localStorage.setItem("date",date);
    window.localStorage.setItem("month",mo);
    window.localStorage.setItem("yy",yy);
}
var gender=function gender(a)
{
    window.localStorage.setItem("gender",a);
}