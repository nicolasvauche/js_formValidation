export const validateEmpty = elt => {
  if (elt.value.length === 0) {
    console.log(elt.name, ' est vide')
  }
}

export const validateChecked = elts => {
  let option = null

  elts.forEach(elt => {
    if (elt.checked) option = elt.value
  })

  if (option) {
    return option
  } else {
    console.log('orderoptions est vide')
    return false
  }
}
