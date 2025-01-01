
///////////////////////////Q1
let fruits=["apple.jpg","Banana.jpg","strawberry.jpg","Kiwi.jpg","Orange.jpg"];
let di=document.getElementById("images");
let u=document.createElement("ul");
di.appendChild(u);
for(let i=0;i<fruits.length;i++){
    
    const l=document.createElement("li");
    u.appendChild(l);
    const im=document.createElement("img");
    l.appendChild(im);
    im.src=fruits[i];
    im.style.width="50px";
    im.style.height="50px";
    im.style.marginTop="20px";
}

//////////////////////////Q2

function index(arr, num){

    for(let i=0;i<arr.length;i++){

        if(arr[i]==num){
            return i;
        }
        else if(arr[i]!=num && i==arr.length-1){
            return -1;

        }
      
    }

}

let ar=[1,2,3,4,5];
let user_num=prompt("enter your number:");
parseInt(user_num);
// console.log(index(ar,user_num));
let h=document.getElementById("no");
h.textContent+=index(ar,user_num);