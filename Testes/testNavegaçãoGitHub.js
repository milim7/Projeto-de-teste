//Esse teste entra no google, faz a pesquisa de qualquer coisa, aqui coloquei 
//o Github especificamente para a pesquisa e entra no site.

const { Builder, By, until} = require("selenium-webdriver");
const assert = require('assert'); 

async function Navegação(){
    let driver = await new Builder().forBrowser('chrome').build();

// CT01 acessando a pag inicial do google
    try {
      driver.get('https://www.google.com');

//CT02 localizando o campo de pesquisa para inserir "Github"
      let caixaPesquisar = await driver.findElement(By.name('q'));
      await caixaPesquisar.sendKeys('GitHub');
      await caixaPesquisar.submit();

//CT03 esperar os resultados de pesquisas carregarem, coloquei 2s no maximo
      await driver.wait(until.titleContains('GitHub'), 2000);

//CT04 localizar e clicar no link que leva ao GitHub
     let searchResults = await driver.wait(until.elementsLocated(By.css('h3')), 10000);

//CT05 Procurar o primeiro link que contenha "GitHub" no texto
    for (let result of searchResults) {
     let text = await result.getText();
    if (text.includes('GitHub')) {
    await result.click();
    break;
  }
}
//CT06 esperar a pag. ser carregada, coloquei 10s de espera
      await driver.wait(until.titleContains('GitHub'), 10000); 

//CT07 verificando se o titulo da pag. realmente contem "Github"
     let tituloPag = await driver.getTitle();
     assert.ok (tituloPag.includes('GitHub'));

    } catch (error) {
        console.error(error);
    }
}
Navegação();

// node testNavegaçãoGitHub.js