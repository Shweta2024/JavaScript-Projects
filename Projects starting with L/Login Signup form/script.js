let container =document.getElementById('container')
// toggle for signup and login
toggle = () => {
    container.classList.toggle('sign-in')
    container.classList.toggle('sign-up')
}

setTimeout(() => {
container.classList.add('sign-in')
}, 200)