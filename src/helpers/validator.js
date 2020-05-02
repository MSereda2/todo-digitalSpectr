const requiredField = (value) => {
  if(value) return undefined;
  return 'Обязательное поле';  
}

export {
  requiredField,
}