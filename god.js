let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";
function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
})
ScrollReveal().reveal('.home-content,heading',{ origin: top });
ScrollReveal().reveal('.mypic,.about-content,.education-content,.skill-content,.project-content,.contact-content', { origin:'bottom'});
ScrollReveal().reveal('.u1', {origin:'left'});
ScrollReveal().reveal('.u2', {origin:'right'});
ScrollReveal().reveal('.c1', {origin:'top'});
ScrollReveal().reveal('.c2', {origin:'bottom'});
ScrollReveal().reveal('.c3', {origin:'top'});
ScrollReveal().reveal('.know', {origin:'top'});
ScrollReveal().reveal('.know1', {origin:'bottom'});
const typed=new Typed('.multiple-text',{
    strings:['Full stack developer','Frontend developer','Web developer'],
    typeSpeed:70,
    backspeed:70,
    backDelay:1000,
    loop:true,
})
