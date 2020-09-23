var p = new Date();
var h =p.getHours();
var d = p.getDate();
var m = p.getMonth();
var y = p.getFullYear();
var time 
var sec 
m=m+1;
if(h<12){
    document.getElementById("w").innerHTML="Hi ........Good Morning";
}
else if(h<15){
    document.getElementById("w").innerHTML="Hi .......Good Afternoon";
}
else if(h<19){
    document.getElementById("w").innerHTML="Hi .....Good Evening";

}
else{
    document.getElementById("w").innerHTML="Hi .........Good Night";
}
setInterval(()=>{
    var p = new Date();
    h=p.getHours();
    time=p.getMinutes();
    sec=p.getSeconds();
    



    document.getElementById("date").innerHTML=d+'/'+m+'/'+y;
document.getElementById("time").innerHTML = h+':'+time+':'+sec;

},1000)


//document.getElementById("date").innerHTML=d;
//document.getElementById("month").innerHTML=m+1;
//document.getElementById(("year").innerHTML=y;
