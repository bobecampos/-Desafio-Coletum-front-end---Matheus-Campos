import React from 'react'

const FormTitle = ({ children }) => (
  <div className="col-12">
      <h1 className="display-5 mt-5">{children}</h1>
      <hr/>
  </div>
)

FormTitle.defaultProps = {
  children: 'Cadastro de Dados'
}

export default FormTitle