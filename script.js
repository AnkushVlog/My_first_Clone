let a=3;


function clickcheng(z){
    a=a+z;
    slidshow(a);
}

slidshow(a);

function slidshow(x){
    let slied1=document.getElementsByClassName('slied');
   
   for(let y of slied1){
    y.style.display="none";
   }
   
    slied1[x].style.display="block";
   
}
  