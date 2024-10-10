const date = new Date();
let greetings;
const time = date.getHours();


function Alert(){
  


let contents = document.getElementById("ss2p");
   
let participants = [
   {
name : "Ukpebor victoria",
rating:"r1.5.png",
img:"gorilla.png"
},
{
name:"Afolabi Hikmak" ,
rating:"r1.png" ,
img:"hikmak.jpg"
},

{
name:"Abikoye Oluwafunmito" ,
rating:"r0.5.png" ,
img:"gorilla.png"
   },

{
name: "Onabiyi Ameerah",
rating:"r1.png" ,
img:"gorilla.png"
},
 {
name:"Onyeka Delphine" ,
rating:"r1.5.png" ,
img:"delphine.jpg"
 },
 {
 name:"Kazeem Hanifat" ,
 rating:"r0.5.png" ,
 img:"gorilla.png"
  },
  {
   name:"Odukoya Oluwadamilola" ,
   rating:"r1.png" ,
   img:"damilola.jpg"
 },
 {
      name:"Odukwe Sidney" ,
      rating:"r0.5.png" ,
      img:"sidney.jpg"
  },
  {
   name:"surname Gift" ,
   rating:"r1.5.png" ,
   img:"gift.jpg"
    },
    {
      name:"Abdullahi Destiny" ,
      rating:"r0.5.png" ,
      img:"gorilla.png"
  },
  {
   name:"Akinmusere Serah" ,
   rating:"r1.5.png" ,
   img:"serah.png"
    },
    {
      name:"Nnazoba Great" ,
      rating:"r1.png" ,
      img:"great.png"
} ,
{
         name:"Abikoye Oluwafunmito" ,
         rating:"r0.5.png" ,
         img:"gorilla.png"        }  
         ,
         {
                  name:"Fadipe Boluwatife" ,
                  rating:"r1.5.png" ,
                  img:"boluwatife.jpg"        
   } ,
   {
      name:"Aweh jemimah " ,
      rating:"r1.png" ,
      img:"jemimi.jpg"        }    
      ,
   {
      name:"Semilin Aliyah " ,
      rating:"r0.5.png" ,// did form only form
      img:"gorilla.png"        }    
      ,
   {
      name:" Nwabueze Favour" ,
      rating:"r1.png" ,
      img:"gorilla.png"        }    
      ,
   {
      name:"Anjorin Rachael " ,
      rating:"r0.5.png" ,
      img:"gorilla.png"        }                   
]; 

let people = "";
participants.forEach((per)=>{
people += `
<div class = "cla" >
<img src="${per.img}"                    style="border-radius:40px;"  width="100px" class="img" >
<h1> name: ${per.name}</h1>
<h3> Rating : <img src="${per.rating}" width="100px" 
style="border-radius:40px;" height="20px">
</div>
`
});
contents.innerHTML = people;

if(time >= 0 && time <= 11){
      
   alert( "Good morning folks, have a great day ahead");
}
else if(time >= 12 && time <= 16){
   
   alert("Good afternoon folks, trust you are having a greaty day");
}
else if(time >= 17 && time <= 23){
   
   alert("Good evening folks, hope your day went well");
}
}

onload = Alert();