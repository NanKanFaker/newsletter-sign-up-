let btn = document.querySelector('.btn');
let dismiss_btn = document.querySelector('.dismiss_btn')
let main = document.querySelector('.main')
let newsletter = document.querySelector('.newsletter');
let picture = document.querySelector('.picture');
let success = document.querySelector('.success');
let email = document.querySelector('.email');
let wrong_email = document.querySelector('.wrong_email');
let inp = document.querySelector('.inp');
let error = 0;


btn.addEventListener('click',function(){

    email.innerHTML = inp.value;
    let check = inp.value.indexOf('@');
    console.log('check:'+check)

    if(check===-1){error=-1}else{
        newsletter.classList.add('block');
        picture.classList.add('block');
        success.classList.remove('block');
        inp.classList.remove('error');
        wrong_email.classList.add('block');
        main.style.width='auto';
    };

    if(error===-1){
        inp.classList.add('error');
        wrong_email.classList.remove('block');
    };

})

dismiss_btn.addEventListener('click',function(){
    success.classList.add('block');
    newsletter.classList.remove('block');
    picture.classList.remove('block');
    main.style.width='1440px';
})