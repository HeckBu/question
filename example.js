const CORRECTION = {
  top: 0.22,
  left: 0.45,
}

const box = document.getElementById('box')

function resize() {
  if (document.getElementById('box')) {
    const area = box.getBoundingClientRect()
  
    const point = document.getElementById("point")
    point.style.top = area.top + CORRECTION.top * area.height + "px" 
    point.style.left = area.left + CORRECTION.left * area.width + "px"
  }
}

setTimeout(() => {
  resize() 
  window.addEventListener("resize", () => {
    resize() 
  })
}, 25)
