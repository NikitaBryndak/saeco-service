function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function handleButtonClick() {
    if (isMobileDevice()) {
        window.location.href = '#contact';
        window.location.href = 'tel:+380689070070';
        var button = document.getElementById('callButton');
        button.innerHTML = '+380689070070';
        
    } else {
        window.location.href = '#contact';
        var button = document.getElementById('callButton');
        button.innerHTML = '+380689070070';
        button.removeEventListener('click', handleButtonClick); // Remove the click event listener to prevent further changes
    }
}
function handleButtonClick2() {
    if (isMobileDevice()) {
        window.location.href = 'tel:+380689070070';
        var button = document.getElementById('callButton2');
        button.innerHTML = '+380689070070';
    } else {
        var button = document.getElementById('callButton2');
        button.innerHTML = '+380689070070';
        button.removeEventListener('click', handleButtonClick2); // Remove the click event listener to prevent further changes
    }
}
function handleButtonClick3() {
    if (isMobileDevice()) {
        window.location.href = 'tel:+380689070070';
        var button = document.getElementById('callButton3');
        button.innerHTML = '+380689070070';
    } else {
        var button = document.getElementById('callButton3');
        button.innerHTML = '+380689070070';
        button.removeEventListener('click', handleButtonClick3); // Remove the click event listener to prevent further changes
    }
}
function handleButtonClick4() {
    if (isMobileDevice()) {
        window.location.href = 'tel:+380689070070';
        var button = document.getElementById('callButton4');
        button.innerHTML = '+380689070070';
    } else {
        var button = document.getElementById('callButton4');
        button.innerHTML = '+380689070070';
        button.removeEventListener('click', handleButtonClick4); // Remove the click event listener to prevent further changes
    }
}
function handleButtonClick5() {
    if (isMobileDevice()) {
        window.location.href = 'tel:+380689070070';
        var button = document.getElementById('callButton5');
        button.innerHTML = '+380689070070';
    } else {
        var button = document.getElementById('callButton5');
        button.innerHTML = '+380689070070';
        button.removeEventListener('click', handleButtonClick5); // Remove the click event listener to prevent further changes
    }
}
function handleButtonClick6() {
        window.location.href = 'https://www.google.com/maps/dir/Current+Location/м.Хмельницький, вул.Подільська, 171/1';
}


function handleContactLinkClick(event) {
    if (isMobileDevice()) {
        window.location.href = 'tel:+380689070070';
        window.location.href = '#contact';

    } 
    else {
        event.preventDefault(); // Prevent the default link behavior
        document.querySelector('.contact-link').innerHTML = '+380689070070'; // Update link text
        window.location.href = '#contact';
    }
    
}

window.addEventListener('load', function() {
    document.getElementById('callButton').addEventListener('click', handleButtonClick);
    document.getElementById('callButton2').addEventListener('click', handleButtonClick2);
    document.getElementById('callButton3').addEventListener('click', handleButtonClick3);
    document.getElementById('callButton4').addEventListener('click', handleButtonClick4);
    document.getElementById('callButton5').addEventListener('click', handleButtonClick5);
    document.getElementById('map-link').addEventListener('click', handleButtonClick6);
    document.querySelector('.contact-link').addEventListener('click', handleContactLinkClick);
});

