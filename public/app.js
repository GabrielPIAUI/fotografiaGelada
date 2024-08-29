const switchModal = () => {
    const modal = 
    document.querySelector('.modal')
    const actualStyle = 
    modal.style.display
    if(actualStyle == 'block') {
        modal.style.display = 'none'
    } 
    else {
        modal.style.display = 'block'
    }
}

    const btn = 
    document.querySelector('.login-button')
    btn.addEventListener('click', switchModal)

    window.onclick = function(event) {
        const modal = 
        document.querySelector('.modal');
        if(event.target == modal) {
            switchModal()
        }
    }

const modal = document.querySelector('.modal')
const cancel = document.querySelector('.button-cancelar').addEventListener('click', cancelar())