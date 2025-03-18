x = 7
y = 5
z = x+y
console.log(z)
a = "Hello "
b = "World!"
c = a+b
console.log(c)
function SumNPrint(x1,x2)
{
    x3 = x1+x2
    console.log(x3)
    return x3
}
SumNPrint(x,y)
SumNPrint(a,b)
if(c.length < z)
{
    console.log(z)
}
else if(c.length>z)
{
    console.log(c)
}
else
{
    console.log("good job")
}
L1 = ["Watermelon","Pineapple", "Pear", "Banana"]
L2 = ["Apple","Banana", "Kiwi", "Orange"]
function findTheBanana(s,index)
{
    if(s=="Banana"){
        //alert("Banana found at " + index)
    }
}
L1.forEach(findTheBanana)
L2.forEach(findTheBanana)
function greetings()
{
    d = new Date
    h = d.getHours()
    if(h<12){
        document.getElementById("Greeting").innerHTML = "Good Morning, I am Lok"  
        }
    else if(h<18){
        document.getElementById("Greeting").innerHTML = "Good Afternoon, I am Lok"
        }
    else if(h<20)
    {
        document.getElementById("Greeting").innerHTML = "Good Evening, I am Lok"
    }
    else
    {
        document.getElementById("Greeting").innerHTML = "Good Night, I am Lok"
    }
    
}
if(window.location.href.indexOf("index.html") != -1)
{
    greetings()
}
function addYear()
{
    date = new Date()
    document.getElementById("copyYear").innerHTML += date.getFullYear()
}
function showList()
{
    document.getElementById("favList").style.display = "block"
    document.getElementById("show").style.display = "none"
}
$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
  });
  
$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readMore").hide();
    $("#readLess").show();
});

function validate()
{
    event.preventDefault();
    console.log("testing function run");
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userComment = document.getElementById("comment");
    var message = document.getElementById("validatemessage");
    if(!userName.checkValidity()||!userEmail.checkValidity()||!userComment.checkValidity())
        {
            console.log("testing");
            message.innerHTML = "Please resubmit the form correctly";
        }
}