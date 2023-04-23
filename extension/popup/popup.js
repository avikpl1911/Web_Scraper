var userinput = document.querySelector("#userinput");




chrome.storage.local.get('key', async function(item){
   await item;
   if(item.key === true){
      userinput.checked=true;
   }else{
      userinput.checked=false;
   }
 })
 
 



var  sendMessage = function(){
   
   if(!userinput.checked){
      chrome.runtime.sendMessage({name: 'off'});
      userinput.checked=false;
   }   else {
      chrome.runtime.sendMessage({name: 'on'});
      userinput.checked=true;
   }   
    
 }


    
 
 userinput.addEventListener("click",sendMessage);

    

     

   
     



