let colur = document.getElementById("colurvalue");
let txt = document.getElementById("headcol");
function gettcolor(){
    txt.style.color=colur.value;
} 

 

 
let a = "aeioutyhjo";
let y =["a","e","i","o","u","A","E","I","O","U"]
let sum=0;
for (i=0;i<a.length;i++){
if (y.includes(a[i])){
        sum+=1;
    }
}
console.log(sum);
console.log(i);
//



const d = new Date();
let day = days[d.getDay()];
console.log(d);