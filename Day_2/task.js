//Activity-1
function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function prod(a,b){
    console.log(a*b);
}
function divide(a,b){
    console.log(a/b);
}
function rem(a,b){
    console.log(a%b);
}
add(3,4);
sub(8,3);
prod(3,4);
divide(7,4);
rem(8,3);

//Activity-2
const num = [-2,5,7,-3,0,8];
let a=0,b=0;
for(let i=0;i<num.length;i++){
    a+=num[i];
    b-=num[i];
}
console.log(a,b);

//Activity-3,4,5
let x=5,y=6;
if(x<y) console.log(y);
if(x>y) console.log(x);
if(x<=y) console.log(y);
if(x>=y) console.log(x);

if(x>y || x%2!=0) console.log(x);

(5>8)?(console.log("true")):(console.log("false"));