const nav_Items = document.querySelectorAll('.nav__items');
const nav_Checkbox = document.getElementById('checkbox');
const nav_Background = document.querySelector('.nav__background');
const nav_Navbar = document.querySelector('.nav__navbar');
const anchors_To_Top = document.querySelector('.anchors__to-top');
const anchors_To_Bottom = document.querySelector('.anchors__to-bottom');
const header = document.querySelector('.header');
const about = document.getElementById('about');
const features = document.querySelector('.features');
const packages = document.querySelector('.packages');
const testimonials = document.querySelector('.testimonials');
const tools = document.querySelector('.tools');
const join = document.getElementById('join');


nav_Items.forEach(item => {
    
    item.addEventListener("click", ()=>{
        nav_Checkbox.checked = false;
        nav_Background.style.transition = 'transform .6s ease-in';
        nav_Navbar.style.transition = 'all ease-in .6s';
    });

})



anchors_To_Top.addEventListener('click', ()=>{
    anchors_To_Top.style.display = "none";
    anchors_To_Bottom.style.display = "inline-block";
})



anchors_To_Bottom.addEventListener('click', ()=>{
    anchors_To_Bottom.style.display = "none";
    anchors_To_Top.style.display = "block";
})


header.addEventListener('wheel', (e)=>{
    anchors_To_Top.style.display = "none";
    anchors_To_Bottom.style.display = "inline-block";       
})


about.addEventListener('wheel', (e)=>{
    if(e.deltaY < 0){
        // console.log('up');
        anchors_To_Top.style.display = "none";
        anchors_To_Bottom.style.display = "inline-block";
    }else if(e.deltaY > 0){
        // console.log('down');
        anchors_To_Top.style.display = "block";
        anchors_To_Bottom.style.display = "inline-block";
    }    
    
})

features.addEventListener('wheel', (e)=>{
        anchors_To_Top.style.display = "block";
        anchors_To_Bottom.style.display = "inline-block";       
})

packages.addEventListener('wheel', (e)=>{
        anchors_To_Top.style.display = "block";
        anchors_To_Bottom.style.display = "inline-block";       
})

testimonials.addEventListener('wheel', (e)=>{
        anchors_To_Top.style.display = "block";
        anchors_To_Bottom.style.display = "inline-block";       
})

tools.addEventListener('wheel', (e)=>{
        anchors_To_Top.style.display = "block";
        anchors_To_Bottom.style.display = "inline-block";       
})
    
join.addEventListener('wheel', (e)=>{
    if(e.deltaY < 0){
        // console.log('up');
        anchors_To_Top.style.display = "block";
        anchors_To_Bottom.style.display = "inline-block";
    }else if(e.deltaY > 0){
        // console.log('down');
        anchors_To_Top.style.display = "block";
        anchors_To_Bottom.style.display = "none";
    }

})
