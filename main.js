const navbar_ul = document.querySelector('.navbar ul');
const klik = document.querySelector('.klik')
const klik_slide = document.querySelector('.slide')

klik.addEventListener('click',function(){
    navbar_ul.classList.toggle('slide');
});


const klik_transisi = document.querySelector('.klik');
klik_transisi.addEventListener('click',() =>{
    klik.classList.toggle("active")
})
