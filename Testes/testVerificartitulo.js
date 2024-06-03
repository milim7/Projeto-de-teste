//teste de verificação de titulo da Pag., se esta correto ou não 
const { Builder, By } = require("selenium-webdriver");
const assert = require('assert'); 

async function verificarTitulo() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.borgonove.tech/');

  //CT01 Verificando se o título da pag. web está correto
        let title = await driver.getTitle();
        assert.strictEqual(title, "Borgonove Tech");

    } catch (error) {
        console.error(error);
    }
}
verificarTitulo();

//node testVerificartitulo.js