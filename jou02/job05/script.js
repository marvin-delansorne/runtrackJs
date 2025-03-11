
const footer = document.getElementById('footer');


function updateFooterColor() {
   
    const scrollPosition = window.scrollY; 
    const totalHeight = document.body.scrollHeight - window.innerHeight; 
    const scrollPercentage = (scrollPosition / totalHeight) * 100; 

    footer.style.backgroundColor = `hsl(${scrollPercentage * 3.6}, 100%, 50%)`;
}

window.addEventListener('scroll', updateFooterColor);