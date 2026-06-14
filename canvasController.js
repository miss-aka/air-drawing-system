const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
const video=document.getElementById('video');
let prev=null;
function resize(){
 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight*0.9;
}
window.addEventListener('resize',resize);resize();

function drawPoint(x,y){
 const color=document.getElementById('colorPicker').value;
 const size=parseInt(document.getElementById('brushSize').value);
 ctx.strokeStyle=color;
 ctx.lineWidth=size;
 ctx.lineCap='round';
 if(prev){
   ctx.beginPath();
   ctx.moveTo(prev.x,prev.y);
   ctx.lineTo(x,y);
   ctx.stroke();
 }
 prev={x,y};
}
function stopDraw(){prev=null;}
document.getElementById('clearBtn').onclick=()=>ctx.clearRect(0,0,canvas.width,canvas.height);
document.getElementById('saveBtn').onclick=()=>{
 const a=document.createElement('a');
 a.download='drawing.png';
 a.href=canvas.toDataURL();
 a.click();
};
