import {
  validateEmpty,
  validateChecked,
  validateDate,
  validateInList
} from './modules/formvalidation.js'

const orderForm = document.getElementById('orderForm')
const acceptedBrands = ['Renault', 'Peugeot', 'Toyota']
const acceptedOptions = [
  'Vitres électriques',
  'GPS',
  'Peinture métallisée',
  'Lecteur CD'
]
let choosenOptionElt = null

orderForm.addEventListener('submit', event => {
  event.preventDefault()

  const orderDateElt = document.getElementById('orderDate')
  const orderTypeElt = document.getElementById('orderType')
  const orderBrandElt = document.getElementById('orderBrand')
  const orderColorElt = document.getElementById('orderColor')
  const orderOptionElts = document.querySelectorAll(
    '.form-options input[type=radio]'
  )
  let errors = 0

  // Validation de la date
  if (!validateEmpty(orderDateElt)) {
    errors += validateDate(orderDateElt)
  } else {
    errors++
  }

  // Validation du type
  errors += validateEmpty(orderTypeElt)

  // Validation de la marque
  if (!validateEmpty(orderBrandElt)) {
    errors += validateInList(orderBrandElt, acceptedBrands)
  } else {
    errors++
  }

  // Validation de la couleur
  errors += validateEmpty(orderColorElt)

  // Validation de l'option
  choosenOptionElt = validateChecked(orderOptionElts)
  if (choosenOptionElt) {
    errors += validateInList(choosenOptionElt, acceptedOptions, true)
  } else {
    errors++
  }

  // Traiter le formulaire
  if (errors === 0) {
    const recapDate = document.getElementById('recapDate')
    recapDate.innerText = orderDateElt.value

    const recapType = document.getElementById('recapType')
    recapType.innerText = orderTypeElt.value

    const recapBrand = document.getElementById('recapBrand')
    recapBrand.innerText = orderBrandElt.value

    const recapColor = document.getElementById('recapColor')
    recapColor.innerText = orderColorElt.value

    const recapOption = document.getElementById('recapOption')
    recapOption.innerText = choosenOptionElt ? choosenOptionElt.value : ''
  }
})
