(function(){
  // 모바일 메뉴
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('site-nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');
    });
    nav.addEventListener('click',function(e){if(e.target.closest('a')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
  }
  // 교육과정 분류 필터
  var tabs=document.querySelectorAll('.tab'),cards=document.querySelectorAll('.course');
  tabs.forEach(function(t){t.addEventListener('click',function(){
    var c=t.getAttribute('data-cat');
    tabs.forEach(function(x){x.setAttribute('aria-pressed',x===t?'true':'false');});
    cards.forEach(function(k){k.hidden=!(c==='all'||k.getAttribute('data-cat')===c);});
  });});
})();
