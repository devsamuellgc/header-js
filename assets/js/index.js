const linkDropdown = document.getElementById('more')
const locationDropdown = document.querySelector('#location')
const cardDropdown = document.querySelector('#link-dropdown')

function openLinkDropdown() {
    cardDropdown.style.display = 'flex'
}

function closeLinkDropdown() {
    cardDropdown.style.display = 'none'
}

function openLocationDropdown() {
    console.log('Abriu')
}

linkDropdown.addEventListener('mouseover', openLinkDropdown)
linkDropdown.addEventListener('mouseout', closeLinkDropdown)
cardDropdown.addEventListener('mouseover', openLinkDropdown)
cardDropdown.addEventListener('mouseout', closeLinkDropdown)
locationDropdown.addEventListener('mouseover', openLocationDropdown)

//Formulário

const formulario = document.getElementById('form');
const license = document.getElementById('license');
const invalidLicense = document.getElementById('invalid-license');
const invalidState = document.getElementById('invalid-state');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const numberPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (license.value.match( numberPattern )) {
        license.style.border = '2px solid green'
        invalidLicense.style.display = 'none';
    } else {
        license.style.border = '2px solid red'
        invalidLicense.style.display = 'flex'
    }

    if (state.value === 'ma') {
        alert('Estado indisponível')
    } else if (state.value) {
        state.style.border = '2px solid green'
        invalidState.style.display = 'none'
    } else {
        state.style.border = '2px solid red'
        invalidState.style.display = 'flex'
    }


})