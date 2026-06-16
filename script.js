function login(){
if(document.getElementById('pwd').value==='bantul'){
loginBox=document.getElementById('login');loginBox.style.display='none';
app.style.display='block';startReveal();typeLetter();
}else document.getElementById('msg').innerText='Access Denied 😝';
}
const app=document.getElementById('app');

function typeLetter(){
const txt="Dear ,\nThank you for every smile, memory and laugh. Happy Birthday ❤️";
let i=0; let el=document.getElementById('letter');
let t=setInterval(()=>{el.innerHTML+=txt[i]=="\n"?"<br>":txt[i];i++;if(i>=txt.length)clearInterval(t)},40);
}

let imgs=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'];let idx=0;
setInterval(()=>{let s=document.getElementById('slide'); if(s){idx=(idx+1)%imgs.length;s.src=imgs[idx];}},2500);

function startReveal(){
const c=document.getElementById('canvas'),ctx=c.getContext('2d');
const img=new Image(); img.src='images/profile.jpg';
img.onload=()=>{
ctx.drawImage(img,0,0,500,500);
let d=ctx.getImageData(0,0,500,500).data; ctx.clearRect(0,0,500,500);
let pts=[];
for(let y=0;y<500;y+=4){for(let x=0;x<500;x+=4){
let i=(y*500+x)*4;if(d[i+3]>30) pts.push({x,y,ox:Math.random()*500,oy:Math.random()*500});
}}
function a(){
ctx.clearRect(0,0,500,500);
pts.forEach(p=>{p.ox+=(p.x-p.ox)*0.03;p.oy+=(p.y-p.oy)*0.03;ctx.fillRect(p.ox,p.oy,2,2);});
requestAnimationFrame(a);
}a();
};
}

function gift(){
document.getElementById('giftText').innerHTML='🎉 Happy Birthday Priya ❤️🌹';
for(let i=0;i<150;i++){
let h=document.createElement('div');h.className='heart';h.innerHTML=Math.random()>0.5?'💖':'🌸';
h.style.left=Math.random()*100+'vw';h.style.fontSize=(10+Math.random()*25)+'px';
h.animate([{transform:'translateY(0)'},{transform:'translateY(110vh)'}],{duration:4000+Math.random()*3000});
document.body.appendChild(h);setTimeout(()=>h.remove(),7000);
}
}
