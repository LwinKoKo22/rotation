document.addEventListener("DOMContentLoaded", initDetect)

function initDetect(){
  window.addEventListener("resize", detectDevice)
  detectDevice()
}

detectDevice = () => {
  let detectDeviceObj = {
    device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
    orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
  }

  updateText(detectDeviceObj)
}

updateText = (detectDeviceObj) => {
  let h1Text = document.querySelector(".h1_text")
  let h2Text = document.querySelector(".h2_text")

  h1Text.innerHTML = `Device: ${detectDeviceObj.device}`
  h2Text.innerHTML = `Orientation: ${detectDeviceObj.orientation}`
}