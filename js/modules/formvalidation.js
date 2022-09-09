// Validate if empty
export const validateEmpty = elt => {
  if (elt.value.length === 0) {
    addErrorElt(elt, 'Ce champ ne peut pas être vide')

    return 1
  }

  const existingElt = elt.parentNode.querySelector('.error')
  if (existingElt) existingElt.remove()

  return 0
}

// Validate if checked
export const validateChecked = elts => {
  let option = null

  elts.forEach(elt => {
    if (elt.checked) option = elt
  })

  if (option) {
    return option
  } else {
    addErrorElt(elts[0].parentNode.parentNode, 'Ce champ ne peut pas être vide')
    return false
  }
}

// Validate date
export const validateDate = elt => {
  // Test string pattern
  const regDate = new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
  if (!regDate.test(elt.value)) {
    addErrorElt(elt, 'La date saisie est invalide')

    return 1
  }

  // Test date vs today
  const givenDate = new Date(elt.value)
  if (givenDate > new Date()) {
    addErrorElt(elt, "La date saisie ne doit pas être supérieure à aujourd'hui")

    return 1
  }

  return 0
}

// Validate if value in in list
export const validateInList = (elt, list, isOption = false) => {
  if (!list.includes(elt.value)) {
    addErrorElt(
      isOption ? elt.parentNode.parentNode : elt,
      'Veuillez choisir un élément dans la liste, espèce de petit voyou !'
    )

    return 1
  }

  const existingElt = isOption
    ? elt.parentNode.parentNode.parentNode.querySelector('.error')
    : elt.parentNode.querySelector('.error')
  if (existingElt) existingElt.remove()

  return 0
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
