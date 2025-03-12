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
        alert("Banana found at " + index)
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