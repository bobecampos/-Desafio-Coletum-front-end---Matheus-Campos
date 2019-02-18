const structure = { data: {
    form_structure: [ {
        label: 'Nome / Espécie',
        componentId: 'nomeespecie89604',
        type: 'textfield',
        helpBlock: null,
        order: 0,
        components: null
    }, {
        label:'Apelido carinhoso',
        componentId: 'apelidoCarinhoso89605',
        type: 'textfield',
        helpBlock: 'Invente um apelido para ele',
        order: 1,
        components: null
    },{
        label:'Data da captura',
        componentId: 'dataDaCaptura89876',
        type: 'datefield',
        helpBlock: null,
        order: 2,
        components: null
    },{
        label: 'Força',
        componentId: 'forca90032',
        type: 'ratingfield',
        helpBlock: null,
        order: 3,
        components: null
    },{
        label: 'URL para informações do Pokémon',
        componentId:'urlParaInformacoesDoPokemon89878',
        type: 'urlfield',
        helpBlock: null,
        order: 4,
        components: null
    }]
}}

function generateLabel () {
    for (let i in structure.data.form_structure) {
        console.log(structure.data.form_structure[i].label)
    }
    
}

generateLabel()
