let a=document.getElementById('a');
let b =document.getElementsByClassName('b');
for(let u in b){
  b[u].onclick=function(){
    a.src= b[u].src;
        }
}

    let i=document.getElementById('i');
    let input=document.getElementById('input');
    let ac=document.getElementById('ac');
    let array=["BAGS","T-SHIRT","SHIRT","SHOES","SALE"];
    i.onclick=function(){
       if(array.includes(input.value)){
       ac.style.color='red';
       }
    }


    let test1=document.getElementById('test1');
    let test2=document.getElementById('test2');
    let test3=document.getElementById('test3');
    let test4=document.getElementById('test4');
    let test5=document.getElementById('test5');
    test1.onclick=function(){
       test1.style.color='#cdcece';
    }
    test2.onclick=function(){
        test1.style.color='#cdcece';
        test2.style.color='#cdcece';
    }
    test3.onclick=function(){
        test1.style.color='#cdcece';
        test2.style.color='#cdcece';
        test3.style.color='#cdcece';
    }
    test4.onclick=function(){
        test1.style.color='#cdcece';
        test2.style.color='#cdcece';
        test3.style.color='#cdcece';
        test4.style.color='#cdcece';
    }
    test5.onclick=function(){
        test1.style.color='#cdcece';
        test2.style.color='#cdcece';
        test3.style.color='#cdcece';
        test4.style.color='#cdcece';
        test5.style.color='#cdcece';
    }
    







    let span=document.getElementById('span');
    let plus=document.getElementsByClassName('plus');
    let minus=document.getElementsByClassName('minus');
    let heart1=document.getElementsByClassName('heart1');
    let hearts=document.getElementsByClassName('hearts');
    let spans=document.getElementById('spans');
    let s=0;
    let ht=0;
    for(let t in plus){
    for(let i=0;i<30;i++){
        plus[t].onclick=function N(){
            s=s+1;
            span.innerHTML=s;
           }
    }
    }
    for(let w in minus){
    for(let i=0;i<30;i++){
        
        minus[w].onclick=function N(){
            if(s>0){
            s=s-1;
            span.innerHTML=s;
           
            }
           }
        
          
    }
    
    }
    
    
    
    
    
    for(let h in heart1){
        for(let i=0;i<30;i++){h
                        heart1[h].onclick=function N(){  
                            heart1[h].style.color='rgb(143, 35, 35)';
                            ht=ht+1;
                            spans.innerHTML=ht;
                    }
        }
    }
    
    
    
    





    // function search(){
    //   let searchBar=document.querySelector('#input').value.toUpperCase();
    //   let productList=document.querySelector('.product-list');
    //   let product=document.querySelector('.product');
    //   let productName=document.getElementsByTagName('p');
    //   for(let i=0;i<productName.length;i++){
    //         if(productName[i].innerHTML.toUpperCase().indexOf(searchBar)>=0){
    //           product[i].style.display="";

    //         }
    //         else{
    //           product[i].style.display="none";
    //         }
    //   }    
    // }
    