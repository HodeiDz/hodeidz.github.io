window.addEventListener('storage', function(event) {
    if (event.key === 'next' && event.newValue === 'true') {
        console.log('next');
        window.location.href = '2A.3.html';
        localStorage.setItem('next', 'false');
    }
});

window.addEventListener('storage', function(event) {
    if (event.key === 'fullscreen' && event.newValue === 'true') {
        console.log('Fullscreen');
        localStorage.setItem('fullscreen', 'false');
        const iframe = document.getElementById('video');
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge
            iframe.msRequestFullscreen();
        }
    }
});

window.addEventListener('storage', function(event) {
    if (event.key === 'minimize' && event.newValue === 'true') {
        console.log('Minimize');
        localStorage.setItem('minimize', 'false');
        const iframe = document.getElementById('video');
        const rect = iframe.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y
        });
        document.elementFromPoint(x, y).dispatchEvent(clickEvent);
    }
});