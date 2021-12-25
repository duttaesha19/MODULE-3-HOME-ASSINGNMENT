id=document.querySelector('.id');
list=document.querySelector('.list');
head=document.querySelector('.head');
id.addEventListener('click', () => {
    list.classList.toggle('active');
    head.classList.toggle('h-nav');
})

