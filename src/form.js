import React, { Component } from 'react'
import FormTitle from './form-title'
import FormTextInput from './form-text-input'
import FormDateInput from './form-date-input'
import FormStarInput from './form-star-input'
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formInfo: []
    }
  }
  
  componentDidMount () {
    axios.get("https://coletum.com/api/graphql?query={form_structure(formId:6950){label,componentId,type,helpBlock,order,components}}&token=7s5txcu909kwc48wookgw8g00occokk")
      .then(response => {
        this.setState({
          formInfo: response.data.data.form_structure 
        })
        console.log(this.state.formInfo)
      }).catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
        <div className="container">
          <div className="row">
          <div className="col-12">
            <FormTitle>Cadastro de Pokémon</FormTitle>
            <hr/>
          </div>
          <div className="col-md-7">
            <form>
                {this.state.formInfo.map((i, index) => (
                  <div key={index} className="form-group row">
                  <label className="col-sm-4 col-form-label text-label" htmlFor={i.componentId}>{i.label}</label>
                  <div className="col-sm-8">
                    { (i.type === 'textfield') ? <FormTextInput componentId={i.componentId} order={i.order} /> : null }
                    { (i.type === 'datefield') ? <FormDateInput componentId={i.componentId} order={i.order} /> : null }
                    { (i.type === 'ratingfield') ? <FormStarInput componentId={i.componentId} order={i.order} /> : null }
                    { (i.type === 'urlfield') ? <FormTextInput componentId={i.componentId} order={i.order} /> : null }
                    <small className="form-text">{i.helpBlock}</small>
                  </div>
              </div>
                ))}

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form

// label, componentId, type, helpBlock, order, components

/* <div className="form-group row">
                    <label className="col-sm-4 col-form-label text-label" htmlFor={this.props.componentId}>Nome/Espécie</label>
                    <div className="col-sm-8">
                        <FormTextInput label="Nome/Espécie" componentId="nomeespecie89604" />
                        <small className="form-text">{this.props.helpBlock}</small>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label text-label" htmlFor={this.props.componentId}>Apelido carinhoso</label>
                    <div className="col-sm-8">
                        <FormTextInput label="Apelido carinhoso" componentId="apelidoCarinhoso89605" helpBlock="Invente um apelido para ele" />
                        <small className="form-text">Invente um apelido para ele</small>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label text-label" htmlFor={this.props.componentId}>Data da captura</label>
                    <div className="col-sm-8">
                        <FormDateInput label="Data da captura" componentId="dataDaCaptura89876" />
                        <small className="form-text">{this.props.helpBlock}</small>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label text-label" htmlFor={this.props.componentId}>Força</label>
                    <div className="col-sm-8">
                        <FormStarInput label="Força" componentId="forca90032" />
                        <small className="form-text">{this.props.helpBlock}</small>
                    </div>
                </div> */