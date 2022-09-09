// Validate if empty
export const validateEmpty = elt => {
  if (elt.value.length === 0) {
    addErrorElt(elt, 'Ce champ ne peut pas être vide')

    return 1
  }

  const existingElt = elt.parentNode.querySelector('.error')
  if(existingElt) existingElt.remove()

  return 0
}

// Validate if checked
export const validateChecked = elts => {
  let option = null

  elts.forEach(elt => {
    if (elt.checked) option = elt.value
  })

  if (option) {
    return option
  } else {
    addErrorElt(elts[0].parentNode.parentNode, 'Ce champ ne peut pas être vide')
    return false
  }
}

// Helper : add error message
const addErrorElt = (elt, errorMsg) => {
  const existingElt = elt.parentNode.querySelector('.error')

  if (!existingElt) {
    const errorElt = document.createElement('p')
    errorElt.classList.add('error')
    errorElt.innerText = errorMsg
    elt.parentNode.appendChild(errorElt)
  }
}
