const {calcularArea} = require('./src/funcao')

describe('Teste com valores corretor', () => {
    test('Valos incorretos', () =>{
        expect( () => calcularArea(-1,10).toThrow('Valos Errado') )

        test('Valores Corretor', () => {
            expect(calcularArea(2,2).toBe(4))
        })
    })
})