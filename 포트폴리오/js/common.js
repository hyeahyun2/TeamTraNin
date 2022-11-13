/*유수현 자바스크립트 시작*/

/* 섹션2 */
const pc = document.querySelector('#pcNotice button');
const pcSlider =document.querySelector('#PCSliderWrap_sh');
const mobile = document.querySelector('#mobileNotice button');
const mSlider = document.querySelector('#MSliderWrap_sh');
const pcBtn = document.querySelector('#PCBtnWrap_sh');
const mBtn = document.querySelector('#MBtnWrap_sh');

pc.addEventListener('click', function(){
  mobile.classList.remove('on')
  pc.classList.add('on')
  mSlider.classList.remove('see')
  mSlider.classList.add('unsee')
  pcSlider.classList.remove('unsee')
  pcSlider.classList.add('see')
  mBtn.classList.remove('see')
  pcBtn.classList.add('see')
});
mobile.addEventListener('click', function(){
  pc.classList.remove('on')
  mobile.classList.add('on')
  pcSlider.classList.remove('see')
  pcSlider.classList.add('unsee')
  mSlider.classList.remove('unsee')
  mSlider.classList.add('see')
  pcBtn.classList.remove('see')
  mBtn.classList.add('see')
});

/*섹션2 슬라이더*/
function pcSlider_sh() {
  $('.PCSlider1_sh li:first').css({'opacity':0}).animate({'opacity':1},1000, function(){
    $('.PCSlider1_sh').append($('.PCSlider1_sh li:first').css({'opacity':0}).animate({'opacity':1},1000))
  })

  state_sh=1;
}
function mSlider_sh() {
  $('.MSlider_sh li:first').css({'opacity':0}).animate({'opacity':1},1000, function(){
    $('.MSlider_sh').append($('.MSlider_sh li:first').css({'opacity':0}).animate({'opacity':1},1000))
  })
}

let pcpc = setInterval(pcSlider_sh,1000);
let mbmb = setInterval(mSlider_sh,1000);

/*슬라이더 버튼 */
const pcBtn_sh = document.querySelector('.PCBtn_sh')
const mBtn_sh = document.querySelector('.MBtn_sh')



$('.PCBtn_sh').on('click',function(){
  state_sh=0;
  clearInterval(pcpc);
  $('.PCSlider1_sh').append($('.PCSlider1_sh li:first').stop().css({'opacity':0}).animate({'opacity':1}))
  pcpc = setInterval(pcSlider_sh,1000);
})
$('.MBtn_sh').on('click',function(){
  clearInterval(mbmb);
  $('.MSlider_sh').append($('.MSlider_sh li:first').stop().css({'opacity':0}).animate({'opacity':1}))
  mbmb =setInterval(mSlider_sh,1000);;
})



/* 푸터 */

const member_sh =document.querySelectorAll('.member_sh a');

for(let a= 0; a < 5; a++){
member_sh[a].addEventListener('mouseenter', function() {
  for(let i = 0; i< member_sh.length; i++){
      member_sh[i].classList.remove('onX');
      member_sh[a].classList.add('onX');
  }
})
}

for(let b= 0; b < 5; b++){
  member_sh[b].addEventListener('mouseleave', function() {
    for(let i = 0; i< member_sh.length; i++){
      member_sh[i].classList.remove('offX');
      member_sh[b].classList.add('offX');
    }
  })
  }

/*유수현 자바스크립트 끝*/
