chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
                // hostEquals: 'developer.chrome.com'
                schemes: ['http', 'https']
            },
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
  });

  chrome.pageAction.onClicked.addListener( function () {
    // query the current tab on the current window
     chrome.tabs.query( { active: true, currentWindow: true }, function ( tabs ) {
      // exceute the main.js script on this tab
      chrome.tabs.executeScripts(
        tabs[0].id, 
        { file: 'main.js' }
      );
     });
   });