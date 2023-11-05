// AND HERE IS SOME UNFINISHED JAVASCRIPT THAT I AM WORKING ON

document.getElementById("pre").focus();
document.body.addEventListener('keydown',(dug)=>{
    if(dug.key== 'Enter')
    {
        ent();
        console.log("BLEE");
    }
})


let x=document.getElementById("latice");
let x2=document.getElementById("latice2");
function load(){
    x.style.top="100%";
}
function load2(){
    x2.style.top="100%";

}

document.getElementById("b");
b.style.opacity="1";
document.onload=load();
document.onload=load2();
// console.log("Ble");
function brisi(){
    x.style.display="none";
    x2.style.display="none";
}

setTimeout(brisi,4500) ;


//⁡⁢⁣⁣𝗣𝗼𝗰𝗲𝘁𝗮𝗸 𝗸𝗼𝗱𝗮⁡


let pre;
let preButton=document.getElementById("preButton");




let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let p3=document.getElementById("p3");
let p4=document.getElementById("p4");
let p5=document.getElementById("p5");
let p6=document.getElementById("p6");
let p7=document.getElementById("p7");
let p8=document.getElementById("p8");
let p9=document.getElementById("p9");
let p10=document.getElementById("p10");

let niz = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];

let d1=document.getElementById("d1");
let d2=document.getElementById("d2");
let d3=document.getElementById("d3");
let d4=document.getElementById("d4");
let d5=document.getElementById("d5");
let d6=document.getElementById("d6");
let d7=document.getElementById("d7");
let d8=document.getElementById("d8");
let d9=document.getElementById("d9");
let d10=document.getElementById("d10");

let nizd = [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10];


for (const item of niz) {
    // console.log(item.innerHTML);
}


function ent(){
    let ind=0;
    let i1=0;
    let i2=0;
    let br=0;
    pre=document.getElementById("pre").value;
    // console.log(pre);

    for(const item of niz){
        i1++;
        if(pre==item.innerHTML)
        {
            br=i1;
            // console.log("Br je= "+br);
            
            for (const item of nizd) {
                i2++
                if(br==i2){
                    item.style.display="block";
                    setTimeout(()=> {
                        item.style.opacity=1;
                    },500);  
                }
                if(br!=i2){
                    // console.log("BR: "+br);
                    item.style.opacity=0;
                    setTimeout(()=> {
                        item.style.display="none";
                    },500);   
                }
                
            }
            ind=1;
        }  
    }
    if(ind == 0)
    {
        console.log("Ne postoji!");
        for (const item of nizd) {
            item.style.display="block";
            setTimeout(()=>{
                item.style.opacity=1;
            },500);

        }
    }
    
    

}


document.body.addEventListener("keydown",(dug)=>{
    if(dug.key== "Enter")
    {
        ent();
        
    }
})

preButton.onclick=() =>{
    ent();
}