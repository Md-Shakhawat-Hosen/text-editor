document.getElementById('bold').addEventListener('click',function(){
    
     const boldA = document.getElementById('bold');
     

   if (boldA.classList[0] === 'bold') {
       const textA = document.getElementById("text-area");
       textA.style.fontWeight = 'bold';
       boldA.setAttribute("class", "fa-solid fa-b");
       boldA.style.backgroundColor = 'yellow';
       boldA.style.padding = '5px';
       boldA.style.borderRadius = '5px';

       
   }
   else {
    const textA = document.getElementById("text-area");
    textA.style.fontWeight = "normal";
    boldA.setAttribute("class", "bold fa-solid fa-b");
    boldA.style.backgroundColor = "transparent";
    boldA.style.padding = "0px";
   }
    
   
    

     
})

document.getElementById('italic').addEventListener('click',function(){
    
     const boldA = document.getElementById('italic');
     

   if (boldA.classList[0] === 'bold') {
       const textA = document.getElementById("text-area");
       textA.style.fontStyle = 'italic';
       boldA.setAttribute("class", "fa-solid fa-italic");
       boldA.style.backgroundColor = 'yellow';
       boldA.style.padding = '5px';
       boldA.style.borderRadius = '5px';

       
   }
   else {
    const textA = document.getElementById("text-area");
    textA.style.fontStyle = "normal";
    boldA.setAttribute("class", "bold fa-solid fa-italic");
    boldA.style.backgroundColor = "transparent";
    boldA.style.padding = "0px";
   }

     
})

document.getElementById('underline').addEventListener('click',function(){
    
     const boldA = document.getElementById('underline');
     

   if (boldA.classList[0] === 'bold') {
       const textA = document.getElementById("text-area");
       textA.style.textDecoration = 'underline';
       boldA.setAttribute("class", "fa-solid fa-underline");
       boldA.style.backgroundColor = 'yellow';
       boldA.style.padding = '5px';
       boldA.style.borderRadius = '5px';

       
   }
   else {
    const textA = document.getElementById("text-area");
    textA.style.textDecoration = "none";
    boldA.setAttribute("class", "bold fa-solid fa-underline");
    boldA.style.backgroundColor = "transparent";
    boldA.style.padding = "0px";
   }

     
})

document.getElementById('align-left').addEventListener('click',function(){
    
     const boldA = document.getElementById('align-left');
     

   if (boldA.classList[0] === 'bold') {
       const textA = document.getElementById("text-area");
       textA.style.textAlign = 'left';
       boldA.setAttribute("class", "fa-solid fa-align-left");
       boldA.style.backgroundColor = 'yellow';
       boldA.style.padding = '5px';
       boldA.style.borderRadius = '5px';

       
   }
   else {
    const textA = document.getElementById("text-area");
    textA.style.textAlign = "none";
    boldA.setAttribute("class", "bold fa-solid fa-align-left");
    boldA.style.backgroundColor = "transparent";
    boldA.style.padding = "0px";
   }

     
})
document.getElementById('align-center').addEventListener('click',function(){
    
     const boldA = document.getElementById('align-center');
     

   if (boldA.classList[0] === 'bold') {
       const textA = document.getElementById("text-area");
       textA.style.textAlign = 'center';
       boldA.setAttribute("class", "fa-solid fa-align-center");
       boldA.style.backgroundColor = 'yellow';
       boldA.style.padding = '5px';
       boldA.style.borderRadius = '5px';

       
   }
   else {
    const textA = document.getElementById("text-area");
    textA.style.textAlign = "left";
    boldA.setAttribute("class", "bold fa-solid fa-align-center");
    boldA.style.backgroundColor = "transparent";
    boldA.style.padding = "0px";
   }

     
})
document.getElementById('align-right').addEventListener('click',function(){
    
     const boldA = document.getElementById('align-right');
     

   if (boldA.classList[0] === 'bold') {
       const textA = document.getElementById("text-area");
       textA.style.textAlign = 'right';
       boldA.setAttribute("class", "fa-solid fa-align-right");
       boldA.style.backgroundColor = 'yellow';
       boldA.style.padding = '5px';
       boldA.style.borderRadius = '5px';

       
   }
   else {
    const textA = document.getElementById("text-area");
    textA.style.textAlign = "left";
    boldA.setAttribute("class", "bold fa-solid fa-align-right");
    boldA.style.backgroundColor = "transparent";
    boldA.style.padding = "0px";
   }

     
})
document.getElementById('align-justify').addEventListener('click',function(){
    
     const boldA = document.getElementById('align-justify');
     

   if (boldA.classList[0] === 'bold') {
       const textA = document.getElementById("text-area");
       textA.style.textAlign = 'justify';
       boldA.setAttribute("class", "fa-solid fa-align-justify");
       boldA.style.backgroundColor = 'yellow';
       boldA.style.padding = '5px';
       boldA.style.borderRadius = '5px';

       
   }
   else {
    const textA = document.getElementById("text-area");
    textA.style.textAlign = "left";
    boldA.setAttribute("class", "bold fa-solid fa-align-justify");
    boldA.style.backgroundColor = "transparent";
    boldA.style.padding = "0px";
   }

     
})

    
    
     

  document.getElementById('input-number').addEventListener('keyup',function(event){
       const boldA = document.getElementById("input-number");

       const textA = document.getElementById("text-area");

        textA.style.fontSize = `${event.target.value}px`

  })
   

  document.getElementById("color-picker").addEventListener('click',function(event){
    

     const textA = document.getElementById("text-area");

     textA.style.color = event.target.value;
  })



