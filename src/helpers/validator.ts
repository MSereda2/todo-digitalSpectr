const requiredField = (value: string) => {
  if(value) return undefined;
  return 'Обязательное поле';  
}

export {
  requiredField,
}