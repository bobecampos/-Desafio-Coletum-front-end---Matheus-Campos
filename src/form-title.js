import React from 'react'

const FormTitle = ({ children }) => (
  <h1 className="display-5 mt-5">{children}</h1>
)

FormTitle.defaultProps = {
  children: 'Cadastro de Dados'
}

export default FormTitle