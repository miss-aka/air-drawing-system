function isDrawingGesture(lm){
  if(!lm) return false;
  return lm[8].y < lm[6].y && lm[12].y > lm[10].y;
}
