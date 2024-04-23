function distanceFromHqInBlocks(location) {
  const hqAddress = 42;
  const distance = Math.abs(location - hqAddress); 
  return distance;
}
function distanceFromHqInFeet(location) {
  const hqAddress = 42;
  const blockLengthInFeet = 264;
  const distanceInFeet = Math.abs(location - hqAddress) * blockLengthInFeet;
  return distanceInFeet;
}
function distanceTravelledInFeet(start, end) {
  const blockLengthInFeet = 264;
  const distanceInFeet = Math.abs(end - start) * blockLengthInFeet;
  return distanceInFeet;
}
function calculatesFarePrice(start, destination) {
  const totalDistance = distanceTravelledInFeet(start, destination)

  if (totalDistance <= 400) {
    return 0;
}else if (totalDistance >400 && totalDistance <=2000){
  return (totalDistance - 400) * 0.02;
}else if (totalDistance >2000 && totalDistance <=2500){
  return 25;
}else {
  return "cannot travel that far"
}
}