this.onmessage = function (e) {
    for (let i = 0; i < 500; i++) {
        this.postMessage(i);
        
    }
}