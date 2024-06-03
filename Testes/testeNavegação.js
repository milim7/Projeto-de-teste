//Esse teste entra no google, faz a pesquisa de qualquer coisa, aqui coloquei 
//a Esbam especificamente para a pesquisa e entra no site.

const { Builder, By, until} = require("selenium-webdriver");
const assert = require('assert'); 

//função principal para a pesquisa no google
async function testNavegação(){
    let driver = await new Builder().forBrowser('chrome').build();

// CT01 acessando a pag inicial do google
    try {
      driver.get('https://www.google.com');

//CT02 localizando o campo de pesquisa para inserir "ESBAM"
      let caixaPesquisa = await driver.findElement(By.name('q'));
      await caixaPesquisa.sendKeys('ESBAM');
      await caixaPesquisa.submit();

//CT03 esperar os resultados de pesquisas carregarem, coloquei 5s no maximo
      await driver.wait(until.titleContains('ESBAM'), 5000);

//CT04 localizar e clicar no link que leva ao site da Esbam
     let searchResults = await driver.wait(until.elementsLocated(By.css('h3')), 10000);

//CT05 Procurar o primeiro link que contenha "ESBAM" no texto
    for (let result of searchResults) {
     let text = await result.getText();
    if (text.includes('ESBAM')) {
    await result.click();
    break;
  }
}
//CT06 esperar a pag.da esbam ser carregada, coloquei 10s de espera
      await driver.wait(until.titleContains('ESBAM'), 10000); 

//CT07 verificando se o titulo da pag. realmente contem "Esbam"
     let tituloPag = await driver.getTitle();
     assert.ok (tituloPag.includes('ESBAM'));

    } finally {
        //await driver.quit();
    }
}
testNavegação();

//node testeNavegação.js