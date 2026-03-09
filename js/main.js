/* Mockup switcher */
function show(id){
  document.querySelectorAll('.mockup').forEach(m=>m.classList.remove('active'));
  document.querySelectorAll('.switcher-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  var map={'forge':0,'armi-mock':1,'signal':2,'current-armi':3};
  var btns=document.querySelectorAll('.switcher-btn');
  if(btns[map[id]])btns[map[id]].classList.add('active');
  window.scrollTo(0,0);
  localStorage.setItem('armi-mockup',id);
}

/* Restore mockup selection on page load */
document.addEventListener('DOMContentLoaded',function(){
  var saved=localStorage.getItem('armi-mockup');
  if(saved&&document.getElementById(saved)){
    document.querySelectorAll('.mockup').forEach(m=>m.classList.remove('active'));
    document.querySelectorAll('.switcher-btn').forEach(b=>b.classList.remove('active'));
    document.getElementById(saved).classList.add('active');
    var map={'forge':0,'armi-mock':1,'signal':2,'current-armi':3};
    var btns=document.querySelectorAll('.switcher-btn');
    if(btns[map[saved]])btns[map[saved]].classList.add('active');
  }
});

/* Light/dark mode toggle */
function toggleMode(mockupId, isOn) {
  var el = document.getElementById(mockupId);
  if (!el) return;
  if (mockupId === 'forge') {
    el.classList.toggle('light-mode', isOn);
  } else if (mockupId === 'signal') {
    el.classList.toggle('dark-mode', isOn);
  } else if (mockupId === 'armi-mock') {
    el.classList.toggle('dark-mode', isOn);
  } else if (mockupId === 'current-armi') {
    el.classList.toggle('dark-mode', isOn);
  }
}

/* Testimonial carousel */
document.addEventListener('click',function(e){
  var btn=e.target.closest('.tc-prev,.tc-next,.tc-dot');
  if(!btn)return;
  var carousel=btn.closest('.testimonial-carousel');
  if(!carousel)return;
  var items=carousel.querySelectorAll('.testimonial-item');
  var dots=carousel.querySelectorAll('.tc-dot');
  var cur=carousel.querySelector('.testimonial-item.active');
  var idx=Array.from(items).indexOf(cur);
  if(btn.classList.contains('tc-prev')){
    idx=(idx-1+items.length)%items.length;
  }else if(btn.classList.contains('tc-next')){
    idx=(idx+1)%items.length;
  }else if(btn.classList.contains('tc-dot')){
    idx=Array.from(dots).indexOf(btn);
  }
  items.forEach(function(it){it.classList.remove('active')});
  dots.forEach(function(d){d.classList.remove('active')});
  items[idx].classList.add('active');
  dots[idx].classList.add('active');
});

/* Dropdown nav toggle */
document.addEventListener('click',function(e){
  var trigger=e.target.closest('.nav-dropdown-trigger');
  if(trigger){
    e.preventDefault();
    var dd=trigger.parentElement.querySelector('.nav-dropdown');
    if(dd){
      var wasOpen=dd.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(d=>d.classList.remove('open'));
      if(!wasOpen)dd.classList.add('open');
    }
    return;
  }
  if(!e.target.closest('.nav-dropdown')){
    document.querySelectorAll('.nav-dropdown.open').forEach(d=>d.classList.remove('open'));
  }
});
