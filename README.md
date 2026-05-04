# TI323_TEXTE_JEST_SELENIUM
Respositório para desenvolvimento da disciplina de TI323 (CICD com testes)

adicionando token localmente


execute
git remote set-url origin https://<<TOKEN>>@https://github.com/cc25729/teste_jest_selenium.git

//criar o projeto node inicial
npm init -y
//instala as dependencias do node
npm install express cors helmet
// instalar as dependencias de teste
npm install jest jest-junit supertest -D

criar o arquivo de entrada index.js

ajustar o package.json para rodar o projeto e os testes