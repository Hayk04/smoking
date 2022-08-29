if(document.title == 'Experts'){
    let expert_slider = new Swiper(".our__experts_mobile", {
        slidesPerView: 1.2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

else if(document.title == 'Smoking'){
    let swiper = new Swiper(".certificate__slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1400: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 1,
          centeredSlides: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1
        }
      },
    });
    
    
    let buttons = document.querySelectorAll('button.reg__btn');
    
    buttons.forEach(button => {
    button.addEventListener('click', () => {
      contactPopup.style.display = 'block';
    });
    });
    
    
    closeBtn.addEventListener('click', () => {
      contactPopup.style.display = 'none';
    });
    
    buttons = document.querySelectorAll('button.btn__icon');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        contactPopup.style.display = 'block';
      });
    });
    
    
    closeBtn.addEventListener('click', () => {
      contactPopup.style.display = 'none';
    });


    let btn1 = document.getElementById('tab-btn-1'),
        btn2 = document.getElementById('tab-btn-2'),
        content1 = document.getElementById('content-1'),
        content2 = document.getElementById('content-2'),
        btn3 = document.getElementById('tab-btn-3'),
        btn4 = document.getElementById('tab-btn-4'),
        content3 = document.getElementById('content-3'),
        content4 = document.getElementById('content-4');

    btn1.addEventListener('click', () => {
      content1.style.display = 'block';
      content2.style.display = 'none';
    });

    btn2.addEventListener('click', () => {
      content2.style.display = 'block';
      content1.style.display = 'none';
    });

    btn3.addEventListener('click', () => {
      content3.style.display = 'block';
      content4.style.display = 'none';
    });

    btn4.addEventListener('click', () => {
      content4.style.display = 'block';
      content3.style.display = 'none';
    });

    let popupName = document.getElementById('popupName'),
        popupPhone = document.getElementById('popupPhone'),
        contactPopupInner = document.getElementById('contactPopupInner');


    popupName.addEventListener('click', () => {
      contactPopupInner.classList.toggle('inputActive');
    });

    popupPhone.addEventListener('click', () => {
      contactPopupInner.classList.toggle('inputActive');
    });

}





// fetch('https://api.ipify.org/?format=json')
//   .then(results => results.json())
//   .then(data => console.log(data.ip));