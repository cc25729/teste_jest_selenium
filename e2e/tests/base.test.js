const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const fs = require('fs')
const path = require('path')

const BASE_URL = process.env.APP_URL || 'http://localhost:3000'
const SCREENSHOTS_DIR = path.join(__dirname, '..', 'screenshots')

// garante que o diretorio existe e se nao cria-o
if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, {recursive: true})

async function tiraFoto(name){
    try{
        const img = await driver.takeScreenshot()
        const filePath = path.join(SCREENSHOTS_DIR,`${name}.png`)
        fs.writeFileSync(filePath, img, 'base64')
        console.log(`Foto tirada ${name}.png`)
    }
    catch(err){
        console.warn('Erro ao tirar foto')
    }
}

async function tirarFoto(nome) {
 
}
async function main() {
    try{
        const opts = new chrome.Options()
        opts.addArguments(
            '--headless=new',
            '--no-sangbox',
            '--disiable-dev-shm-usage',
            '--window-size=800, 640',
            '--disable-gpu'
        )

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(opts)
            .build()

        await driver.manage().setTimeouts({implicite: 5000, pageLoad: 5000})

        await driver.get(BASE_URL+'/login')
        tiraFoto('pagina_login')
        await driver.findElement(By.id("username")).sendKeys('Adm')
        await driver.findElement(By.id('password')).sendKeys('admin')

        tiraFoto('Dados_preenchidos')
        
        await driver.findElement(By.id('loginForm').submit())
        await new Promise(r => setTimeout(r, 800))

        tiraFoto('pagina_erro')

    }finally{
        
    }
}

main().catch( err => {
    console.log('Erro fatal', err)
    process.exit(1)
})