



chrome.storage.local.get('on', async function(item) {
 
    await item;
    console.log(item.on);
    if(item.on===true ){
        console.log("The extension is up and running");

        var images = document.getElementsByTagName('img');
        var videos = document.getElementsByTagName('video');
        var array = []
        
        setTimeout(()=>{
            for (i of images){
                array.push(i.src)
             }
            console.log(array);
        },10000)
        
        
        for (v of videos) {
            console.log(v.src);
        }
    }
})
