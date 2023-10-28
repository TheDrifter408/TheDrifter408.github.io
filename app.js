const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const btnElement = document.querySelector('.btn');



hiddenElements.forEach((element) => observer.observe(element));

function darkMode() {
    let body = document.body;
    body.classList.toggle("dark");
    if(btnElement.textContent === 'Dark Mode'){
        btnElement.textContent = "Light Mode";
    } else {
        btnElement.textContent = "Dark Mode";
    }
}
