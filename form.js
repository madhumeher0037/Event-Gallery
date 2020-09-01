function fn()
{
    var f=document.getElementById("field").value;
    var regex=/^[A-Za-z]+{2,30}$/;
    if(f.test(regex))
    {
        document.getElementById("mesg1").style.color= green;
        document.getElementById("mesg1").innerHTML=<b>ACCEPTED</b>;
    }
    else
    {
        document.getElementById("mesg1").style.color= red;
        document.getElementById("mesg1").innerHTML=<b>NOT ACCEPTED</b>;
    }
}