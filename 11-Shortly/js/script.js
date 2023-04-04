const hamburger = document.getElementById('hamburger');
const hamburger_sec = document.getElementById('hamburger-container');

hamburger.addEventListener('click', openToggle)

function openToggle() {
    hamburger.classList.toggle('open')
    hamburger_sec.classList.toggle('hidden')
    hamburger_sec.classList.toggle('flex')
}

// Form Validation

const forminput = document.getElementById('forminput');
const formbutton = document.getElementById('formbutton');
const formspan = document.getElementById('formspan');

formbutton.addEventListener('click', formSubmit)

function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

function formSubmit(e) {
    e.preventDefault();
    if (forminput.value === "") {
        formspan.innerHTML = 'Please enter something'
        formspan.style.color = 'red'
        forminput.classList.add('border-red');
    } 
    else if(!validURL(forminput.value)) {
        formspan.innerHTML = 'Please enter a valid link'
        formspan.style.color = 'red'
        forminput.classList.add('border-red')
    }
    else {
        formspan.innerHTML = 'Link validated successfully'
        formspan.style.color = 'green'
        forminput.classList.remove('border-red')
        forminput.classList.add('border-green-600')
    }
}