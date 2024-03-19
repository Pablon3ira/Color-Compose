function handleChange(event) {
    const range = event.target
    const monitor = range.nextElementSibling
    monitor.value = range.value
}

const ranges = document.querySelectorAll('input[type=range]')
for (const range of ranges) {
    range.oninput = handleChange 
}