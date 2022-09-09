import { validateEmpty, validateChecked } from './modules/formvalidation.js'

const orderForm = document.getElementById('orderForm')
const acceptedBrands = ['Renault', 'Peugeot', 'Toyota']
const acceptedOptions = [
  'Vitres électriques',
  'GPS',
  'Peinture métallisée',
  'Lecteur CD'
]
let choosenOption = ''

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

  // Validation du formulaire
  errors += validateEmpty(orderDateElt)
  errors += validateEmpty(orderTypeElt)
  errors += validateEmpty(orderBrandElt)
  errors += validateEmpty(orderColorElt)
  choosenOption = validateChecked(orderOptionElts)
  if (!choosenOption) errors++

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
    recapOption.innerText = choosenOption ? choosenOption : ''
  }
})
