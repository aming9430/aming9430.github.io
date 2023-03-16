
const sister_btn=document.getElementById('sister-btn');
const brother=document.getElementById('brother');
const sister=document.getElementById("sister");
const brother_btn=document.getElementById('brother-btn');

sister_btn.addEventListener('click', ()=>{
    brother.classList.add('active');
    sister.classList.add("hide");
});

brother_btn.addEventListener('click', ()=>{
    brother.classList.remove('active');
    sister.classList.remove("hide");
});
