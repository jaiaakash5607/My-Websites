let num1=0.0;
let num2=0.0;
let val=0.0;
let oop='';

let ac=document.getElementById("d");
ac.onclick=function(){
    val=0;
    h1.textContent=0;
}

let h1=document.getElementById("zero");

let n1=document.getElementById("b1");
n1.onclick=function(){
    if (h1.textContent % 10 != 0){
        h1.textContent=(val*10)+Number(n1.textContent);
    }
    else{
        h1.textContent=n1.textContent;
    }
    val = Number(h1.textContent);
}

let n2=document.getElementById("2")
n2.onclick=function(){
    if(h1.textContent%10!=0){
        h1.textContent=(val*10)+Number(n2.textContent);
    }
    else{
        h1.textContent=n2.textContent;
    }
    val=Number(h1.textContent);
}

let n3=document.getElementById("3")
n3.onclick=function(){
    if(h1.textContent%10!=0){
        h1.textContent=(val*10)+Number(n3.textContent);
    }
    else{
        h1.textContent=n3.textContent;
    }
    val=Number(h1.textContent);
}

let n4=document.getElementById("4")
n4.onclick=function(){
    if(h1.textContent%10!=0){
        h1.textContent=(val*10)+Number(n4.textContent);
    }
    else{
        h1.textContent=n4.textContent;
    }
    val=Number(h1.textContent);}

let n5=document.getElementById("5")
n5.onclick=function(){
    if(h1.textContent%10!=0){
        h1.textContent=(val*10)+Number(n5.textContent);
    }
    else{
        h1.textContent=n5.textContent;
    }
    val=Number(h1.textContent);
}

let n6=document.getElementById("6")
n6.onclick=function(){
    if(h1.textContent%10!=0){
        h1.textContent=(val*10)+Number(n6.textContent);
    }
    else{
        h1.textContent=n6.textContent;
    }
    val=Number(h1.textContent);
}

let n7=document.getElementById("7");
n7.onclick=function(){
    if(h1.textContent%10!=0){
        h1.textContent=(val*10)+Number(n7.textContent);
    }
    else{
        h1.textContent=n7.textContent;
    }
    val=Number(h1.textContent);
}

let n8=document.getElementById("8");
n8.onclick=function(){
    if(h1.textContent%10!=0){
        h1.textContent=(val*10)+Number(n8.textContent);
    }
    else{
        h1.textContent=n8.textContent;
    }
    val=Number(h1.textContent);
}

let n9=document.getElementById("9");
n9.onclick=function(){
    if(h1.textContent%10!=0){
        h1.textContent=(val*10)+Number(n9.textContent);
    }
    else{
        h1.textContent=n9.textContent;
    }
    val=Number(h1.textContent);
}

let n0=document.getElementById("0");
n0.onclick=function(){
    if(h1.textContent%10!=0){
        h1.textContent=(val*10)+Number(n0.textContent);
    }
    else{
        h1.textContent=n0.textContent;
    }
    val=Number(h1.textContent);
}

let add=document.getElementById("a");
add.onclick=function(){
    h1.textContent="+";
    oop="+";
    num1=val;
    val=0;
}
let sub=document.getElementById("b");
sub.onclick=function(){
    h1.textContent="-";
    oop="-";
    num1=val;
    val=0;
}
let div=document.getElementById("c");
div.onclick=function(){
    h1.textContent="/";
    oop="/";
    num1=val;
    val=0;
}
let mul=document.getElementById("e");
mul.onclick=function(){
    h1.textContent="*";
    oop="*";
    num1=val;
    val=0;
}
let eq=document.getElementById("f");
eq.onclick=function(){
    num2=val;
    if(oop=="+"){
        val=num1+num2;
    }
     else if(oop == "/"){
            val = num1 / num2;
    }
    else if(oop == "-"){
        val = num1 - num2;
    }
    else if(oop == "*"){
            val = num1 * num2;
    }
    h1.textContent=val;

}