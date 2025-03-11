
const keylogger = document.getElementById('keylogger');


document.addEventListener('keydown', function(event) {
    
    if (/^[a-z]$/i.test(event.key)) {
       
        if (document.activeElement === keylogger) {
            keylogger.value += event.key + event.key;
        } else {
            
            keylogger.value += event.key;
        }
    }
});