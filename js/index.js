function firstFunction(){
    alert('Projects Coming Soon!');
}

function secondFunction(){
alert('Thank you for your intrest :) ')
}

var btn = document.getElementById('myBtn');

btn.addEventListener('click',firstFunction);
btn.addEventListener('click', secondFunction);

