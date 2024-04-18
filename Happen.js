
const container = document.querySelector('.container');
const close = document.querySelector('.close');
const profile = document.querySelector('.profile');
const home = document.querySelector('.active');
const start = document.querySelector('.start');
const protab = document.querySelector('.protab');
const mab = document.querySelector('.mab');
const pro = document.querySelector('.pro');
const leave = document.querySelector('.leave');
const mys = document.querySelector('.mys');
const ms = document.querySelector('.ms');
const service = document.querySelector('.service');
const remove = document.querySelector('.remove');
const myskill = document.querySelector('.myskill');
const skill = document.querySelector('.skill');
const exit = document.querySelector('.exit');
const roller = document.querySelector('.skill-per');
const css = document.querySelector('.css');
const js = document.querySelector('.Javascript');
const pyt = document.querySelector('.python');
const contact = document.querySelector('.contactm');
const call = document.querySelector('.call');








start.addEventListener('click', ()=>{
    container.classList.add('active-popup');
    profile.classList.add('active-popup');
    home.classList.add('active-popup');
    start.classList.add('active-popup');
});

close.addEventListener('click', ()=>{
    container.classList.remove('active-popup');
    profile.classList.remove('active-popup');
    home.classList.remove('active-popup');
    start.classList.remove('active-popup');
    protab.classList.remove('active-popup');
});

home.addEventListener('click', ()=>{
    container.classList.add('active-popup');
    myskill.classList.remove('active-popup');
    call.classList.remove('active-popup');
    contact.classList.remove('active-popup');
    skill.classList.remove('active-popup'); 
    profile.classList.add('active-popup');
    home.classList.add('active-popup');
    mys.classList.remove('active-popup');
    service.classList.remove('active-popup'); 
    start.classList.add('active-popup');
    protab.classList.remove('active-popup');
    pro.classList.remove('active-popup');
});

mab.addEventListener('click', ()=>{
    protab.classList.add('active-popup');
    myskill.classList.remove('active-popup');
    call.classList.remove('active-popup');
    contact.classList.remove('active-popup');
    mys.classList.remove('active-popup');
    skill.classList.remove('active-popup'); 
    container.classList.remove('active-popup');
    profile.classList.remove('active-popup');
    home.classList.remove('active-popup');   
    start.classList.add('active-popup');
    pro.classList.add('active-popup');
});

leave.addEventListener('click', ()=>{
    protab.classList.remove('active-popup');
     start.classList.remove('active-popup');
     skill.classList.remove('active-popup'); 
     home.classList.remove('active-popup');
     pro.classList.remove('active-popup');    
});

pro.addEventListener('click', ()=>{
    protab.classList.add('active-popup');
    myskill.classList.remove('active-popup');
    skill.classList.remove('active-popup'); 
    container.classList.remove('active-popup');
    call.classList.remove('active-popup');
    contact.classList.remove('active-popup');
    profile.classList.remove('active-popup');
    home.classList.remove('active-popup');   
    start.classList.add('active-popup');
    mys.classList.remove('active-popup');
    service.classList.remove('active-popup'); 
    pro.classList.add('active-popup');
});

ms.addEventListener('click', ()=>{
    mys.classList.add('active-popup');
    skill.classList.remove('active-popup'); 
    myskill.classList.remove('active-popup'); 
    service.classList.add('active-popup'); 
    call.classList.remove('active-popup');
    contact.classList.remove('active-popup');
    pro.classList.remove('active-popup');
    protab.classList.remove('active-popup');
    home.classList.remove('active-popup');
    pro.classList.remove('active-popup');   
});

remove.addEventListener('click', ()=>{
    mys.classList.remove('active-popup');
    start.classList.remove('active-popup');
    home.classList.remove('active-popup');
    pro.classList.remove('active-popup');  
    service.classList.remove('active-popup');
    skill.classList.remove('active-popup');    
});

service.addEventListener('click', ()=>{
    mys.classList.add('active-popup'); 
    call.classList.remove('active-popup');
    contact.classList.remove('active-popup');
    service.classList.add('active-popup');
    skill.classList.remove('active-popup');  
    pro.classList.remove('active-popup');
    protab.classList.remove('active-popup');
    home.classList.remove('active-popup');
    myskill.classList.remove('active-popup');
    pro.classList.remove('active-popup'); 
    start.classList.add('active-popup');  
    container.classList.remove('active-popup');
    profile.classList.remove('active-popup');
});


skill.addEventListener('click', ()=>{
    myskill.classList.add('active-popup');
    protab.classList.remove('active-popup');
    container.classList.remove('active-popup');
    profile.classList.remove('active-popup');
    call.classList.remove('active-popup');    
    contact.classList.remove('active-popup');
    home.classList.remove('active-popup');   
    start.classList.add('active-popup');
    service.classList.remove('active-popup'); 
    pro.classList.remove('active-popup');   
    mys.classList.remove('active-popup'); 
    skill.classList.add('active-popup'); 
    roller.classList.add('active-popup');
    css.classList.add('active-popup');
    js.classList.add('active-popup');
    pyt.classList.add('active-popup');
});

exit.addEventListener('click', ()=>{
    mys.classList.remove('active-popup');
    start.classList.remove('active-popup');
    home.classList.remove('active-popup');
    pro.classList.remove('active-popup');  
    service.classList.remove('active-popup');
    skill.classList.remove('active-popup'); 
    myskill.classList.remove('active-popup');   
});
call.addEventListener('click', ()=>{
    myskill.classList.remove('active-popup');
    protab.classList.remove('active-popup');
    container.classList.remove('active-popup');
    profile.classList.remove('active-popup');
    home.classList.remove('active-popup');   
    start.classList.add('active-popup');
    service.classList.remove('active-popup'); 
    pro.classList.remove('active-popup');   
    mys.classList.remove('active-popup'); 
    skill.classList.remove('active-popup'); 
    call.classList.add('active-popup');
    contact.classList.add('active-popup');
});

