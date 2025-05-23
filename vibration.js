// Vibration detection logic for mobile devices

window.addEventListener('devicemotion', (event) => {
  const acceleration = event.accelerationIncludingGravity;
  if (!acceleration) return;

  // Calculate total acceleration magnitude
  const totalAcc = Math.sqrt(
    acceleration.x * acceleration.x +
    acceleration.y * acceleration.y +
    acceleration.z * acceleration.z
  );

  // Debug: print acceleration to console
  console.log('Acceleration:', totalAcc.toFixed(2));

  // Example: threshold for vibration vs earthquake
  if (totalAcc > 15) {
    alert('⚠️ Earthquake detected! Please stay calm and take safety precautions.');
  } else if (totalAcc > 7) {
    alert('⚠️ Vibration detected. Possible earthquake or heavy nearby movement.');
  }
});
