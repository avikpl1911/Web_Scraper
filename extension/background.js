console.log("background is running");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.name === 'on') {
        chrome.storage.local.set({ on: true })
    }
    else if(message.name === 'off'){
        chrome.storage.local.set({ on: false })
    }
  });

 
  
  
  

  