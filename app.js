let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList //ja targetirame listata so klasi
        if (styles.contains('namali')) {
            count--
        } else if (styles.contains('zgolemi')) {
            count++
        } else {
            count = 0
        }
        if (count > 0) {
            value.style.color = "green"
        }
        if (count < 0) {
            value.style.color = "red"
        }
        if (count === 0) {
            value.style.color = "#222"
        }
        value.textContent = count
    })
})