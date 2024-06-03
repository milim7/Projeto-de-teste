//Esse teste entra no google, faz a pesquisa de qualquer coisa, aqui coloquei 
//o Selenium especificamente para a pesquisa e em seguida entra no site, 
//na barra de navegação ele clica em documentation "Documentação sobre o selenium" e finaliza

const { Builder, By, until} = require("selenium-webdriver");
const assert = require('assert'); 

async function NavegaçãoEclick(){
    let driver = await new Builder().forBrowser('chrome').build();

// CT01 acessando a pag inicial do google
    try {
      driver.get('https://www.google.com');

//CT02 localizando o campo de pesquisa para inserir "selenium"
      let caixaPesquisar = await driver.findElement(By.name('q'));
      await caixaPesquisar.sendKeys('selenium');
      await caixaPesquisar.submit();

//CT03 esperar os resultados de pesquisas carregarem, coloquei 2s no maximo
      await driver.wait(until.titleContains('selenium'), 2000);

//CT04 localizar e clicar no link que leva  sobre selenium
     let searchResults = await driver.wait(until.elementsLocated(By.css('h3')), 10000);

//CT05 Procurar o primeiro link que contenha "selenium" no texto
    for (let result of searchResults) {
     let text = await result.getText();
    if (text.includes('Selenium')) {
    await result.click();
    break;
  }
}
//CT06 esperar a pag.da  ser carregada, coloquei 10s de espera
      await driver.wait(until.titleContains('Selenium'), 10000); 

//CT07 verificando se o titulo da pag. realmente contem "selenium"
     let tituloPag = await driver.getTitle();
     assert.ok (tituloPag.includes('Selenium'));

// CT08 Esperar e clicar no botão de menu ,com 20s
await driver.wait(until.elementLocated(By.id('main_navbar')), 20000);
let menuBotao = await driver.findElement(By.id('main_navbar'));
await menuBotao.click();

//CT09 Rolar até o elemento "Documentation" e clicar nele, com 20s
await driver.wait(until.elementLocated(By.id('//*[@id="main_navbar"]/ul/li[3]/a/span/font/font')), 20000);

let documentationLink = await driver.findElement(By.xpath('//*[@id="main_navbar"]/ul/li[3]/a/span/font/font'));
await driver.executeScript("arguments[0].scrollIntoView();", documentationLink);
await documentationLink.click();

    } catch (error) {
        console.error(error);
    }
}
NavegaçãoEclick();

// node testNavegaçãoSeleniumjs