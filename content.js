// content.js
function hasHref(item) {
  return item.getAttribute("href") && item.getAttribute("href").includes('http');
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      let asArray = Array.prototype.slice.call( document.getElementsByTagName("a") )
      let firstHref = asArray.filter(hasHref)[0].getAttribute("href");
      console.log(firstHref);
    }
  }
);
