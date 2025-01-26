var nextPage;
var prevPage;

window.onload = function() {                //? VIDEO VARIABLES 

    if (window.location.pathname.endsWith('2A.1.html')) {
        prevPage = null;
        nextPage = '2A.2.html';
        console.log('"2A.1.html"');

    } else if (window.location.pathname.endsWith('2A.2.html')) {
        prevPage = '2A.1.html';
        nextPage = '2A.3.html';
        console.log('"2A.2.html"');

    } else if (window.location.pathname.endsWith('2A.3.html')) {
        nextPage = '2B.1.html';
        prevPage = '2A.2.html';
        console.log('"2A.3.html"');

    } else if (window.location.pathname.endsWith('2B.1.html')) {
        nextPage = '2B.2.html';
        prevPage = '2A.3.html';
        console.log('"2B.1.html"');

    } else if (window.location.pathname.endsWith('2B.2.html')) {
        nextPage = '2B.3.html';
        prevPage = '2B.1.html';
        console.log('"2B.2.html"');

    } else if (window.location.pathname.endsWith('2B.3.html')) {
        nextPage = '2D.1.html';
        prevPage = '2B.2.html';
        console.log('"2B.3.html"');

    } else if (window.location.pathname.endsWith('2D.1.html')) {
        nextPage = '2D.2.html';
        prevPage = '2B.3.html';
        console.log('"2D.1.html"');

    } else if (window.location.pathname.endsWith('2D.2.html')) {
        nextPage = '2D.3.html';
        prevPage = '2D.1.html';
        console.log('"2D.2.html"');

    } else if (window.location.pathname.endsWith('2D.3.html')) {
        nextPage = '2E.1.html';
        prevPage = '2D.2.html';
        console.log('"2D.3.html"');

    } else if (window.location.pathname.endsWith('2E.1.html')) {
        nextPage = '2E.2.html';
        prevPage = '2D.3.html';
        console.log('"2E.1.html"');

    } else if (window.location.pathname.endsWith('2E.2.html')) {
        nextPage = '2E.3.html';
        prevPage = '2E.1.html';
        console.log('"2E.2.html"');

    } else if (window.location.pathname.endsWith('2E.3.html')) {
        nextPage = null;
        prevPage = '2E.2.html';
        console.log('"2E.3.html"');
    }
}


document.onkeydown = function(e) {          //? Cambio de paginas con flechas
    if (e.keyCode == 39) { // next page
        if (nextPage == null) {
            console.log('no next page');
        } else {
        window.location.href = nextPage;
    }}

    if (e.keyCode == 37) {  // previous page
        if (prevPage == null) {
            console.log('no prev page');
        } else {
        window.location.href = prevPage;
    }}
};

setInterval(function(){                     //? checkeo de next
    if (localStorage.getItem('next') == 'true') {
        console.log('next')
        if (nextPage == null) {
            console.log('no next page');
        } else {
        window.location.href = nextPage;
        }
        localStorage.setItem('next', 'false')
    }
}, 1000); 

setInterval(function(){                     //? checkeo de prev(ious)
    if (localStorage.getItem('prev') == 'true') {
        console.log('prev')
        if (prevPage == null) {
            console.log('no prev page');
        } else {
        window.location.href = prevPage;
        }
        localStorage.setItem('prev', 'false')
    }
}, 1000); 

setInterval(function() { // ! FULSCREEN
    if (localStorage.getItem('fullscreen') === 'true') {
        console.log('Fullscreen');
        localStorage.setItem('fullscreen', 'false');
       
        const iframe = document.getElementById('video');
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        }
    }
}, 1000); // Check every 1 second





setInterval(function() { // ! ni idea que hace esto hay que revisarlo
    if (localStorage.getItem('minimize') === 'true') {
        console.log('Fullscreen');
        
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
        
        localStorage.setItem('minimize', 'false');
                   
/*             const iframe = document.getElementById('video');
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } */
        }
        }, 1000);