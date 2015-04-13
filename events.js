var frm = document.getElementById('donform');
var btn = document.getElementById('submitfrm');
console.dir(frm);
btn.addEventListener('click',function(){
var loc = new TopPot(frm[0].value,frm[1].value,frm[2].value,frm[3].value);
loc.render();
});

