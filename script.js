const hands=new Hands({
 locateFile:(file)=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});
hands.setOptions({
 maxNumHands:1,
 modelComplexity:1,
 minDetectionConfidence:0.7,
 minTrackingConfidence:0.5
});

hands.onResults((results)=>{
 if(results.multiHandLandmarks && results.multiHandLandmarks.length){
   const lm=results.multiHandLandmarks[0];
   if(isDrawingGesture(lm)){
      const x=(1-lm[8].x)*canvas.width;
      const y=lm[8].y*canvas.height;
      drawPoint(x,y);
   }else{
      stopDraw();
   }
 }else{
   stopDraw();
 }
});

navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
 video.srcObject=stream;
 const camera=new Camera(video,{
  onFrame:async()=>{await hands.send({image:video});},
  width:1280,
  height:720
 });
 camera.start();
});
