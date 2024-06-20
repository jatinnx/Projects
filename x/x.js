let links = document.querySelectorAll('.link');
    
links.forEach(element => {
    let originalText = element.innerHTML;
    
    element.addEventListener('mouseover', function(event) {
        event.preventDefault();
        element.innerHTML = 'Click on Sign in';
    });
    
    element.addEventListener('mouseout', function(event) {
        event.preventDefault();
        element.innerHTML = originalText;
    });
});

const signup = document.querySelector('.signup');
const signbox = document.querySelector('.sign-box');
const overlay = document.querySelector('.overlay');
const cross = document.querySelector('.cross');


function Displaycard(e) {
        e.preventDefault();
        overlay.classList.toggle('active');
        signbox.classList.toggle('active');
    }

signup.addEventListener('click', Displaycard);
overlay.addEventListener('click', Displaycard);
cross.addEventListener('click', Displaycard);


window.addEventListener('DOMContentLoaded', (event) => {
        let inputs = document.querySelectorAll('.input-container input');
        inputs.forEach(input => {
            if (input.value !== "") {
                input.classList.add('not-empty');
            }
        });
    });