function scrollListAndReturnPos() {
    
    x = 0;
    vert = document.height;
    
    window.scroll(x,vert);
    
    return vert;
}

function countList() {
    
var ul = document.getElementById("queue");
var liNodes = [];
 
    for (var i = 0; i < ul.childNodes.length; i++) {
     	if (ul.childNodes[i].nodeName == "LI") {
     		liNodes.push(ul.childNodes[i]);
     	}
    }
    return liNodes.length;
}

function loopScroll() {
  
  old = curr;
  curr = scrollListAndReturnPos();

    if(curr==old) {
        clearInterval(refreshIntervalId);
        
        alert(countList());
        
        return;
       }
}

function main() {
    
    old = 0;
    curr = scrollListAndReturnPos();
    
    refreshIntervalId = setInterval(loopScroll, 1000);
}