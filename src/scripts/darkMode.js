const chk = document.getElementById('chk')
const navcc = document.getElementById('navCC')


chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    navcc.classList.remove('bg-light')
    navcc.style.color("#FFFF")
})
