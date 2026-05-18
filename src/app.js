// ponto de declaração das API´s

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

// faremos uma entrada para ver se o servidor está no AR
app.get('/health',(req, res ) =>{
    res.json(
        {
            status: 'ok',
            timestamp: new Date().toISOString()
        }
    )
})


app.post('/api/calcular', (req, res) =>{
    const dados = req.body;

    if(!dados || typeof dados !== 'object'){
        return res.status(400).json({error:'Cospo da requisição está errado'})
    }

    const{altura = 0, largura = 0,} = dados
    if(altura <= 0)throw new Error('Altura com valor errado')
    if(largura <= 0) throw new Error('')
})








module.exports = app;