import React, { Component } from 'react';
import './App.css';
import FormTitle from './form-title'
import FormTextInput from './form-text-input'
import FormDateInput from './form-date-input'
import FormStarInput from './form-star-input'

// ------------------------------------------------------- RENDER
class App extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <FormTitle>Cadastro de Pokémon</FormTitle>
          <div className="col-md-7">
            <form>
              <FormTextInput label="Nome/Espécie" componentId="nomeespecie89604" type="textfield" helpBlock={null} order={0} components={null} />
              <FormTextInput label="Apelido carinhoso" componentId="apelidoCarinhoso89605" type="textfield" helpBlock="Invente um apelido para ele" order={1} components={null} />
              <FormDateInput label="Data da captura" componentId="dataDaCaptura89876" type="datefield" helpBlock={null} order={2} components={null} />
              <FormStarInput label="Força" componentId="forca90032" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;