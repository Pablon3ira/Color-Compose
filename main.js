function updateColor(){
    const red = document.getElementById('red_range').valueAsNumber
    const green = document.getElementById('green_range').valueAsNumber
    const blue = document.getElementById('blue_range').valueAsNumber
    const color_number = (red << 16) + (green << 8) + blue
    const color_hex_code = `#${color_number.toString(16)}`
    document.getElementById('color').style-backgroundColor = color_hex_code
}

function handleChange(event) {
    const range = event.target
    const monitor = range.nextElementSibling
    monitor.value = range.value
    updateColor()
}

const ranges = document.querySelectorAll('input[type=range]')
for (const range of ranges) {
    range.oninput = handleChange 
}

updateColor()