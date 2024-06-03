//Esse teste basicamente e direto no site da Esbam, clica na lupa de pesquisar
//especificamente coloquei pesquisar por "Cursos", e finaliza entrando no conteudo 
 
const { Builder, By, until} = require("selenium-webdriver");
const assert = require('assert'); 

async function Pesquisar() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://esbam.edu.br');

    //CT01 Clique do botão de pesquisar do site Esbam
        await driver.findElement(By.css('a[href="?s="][rel="nofollow"]')).click();

    //CT02 Preenchendo o campo de pesquisa com "Cursos"
        await driver.findElement(By.id('s')).sendKeys('Cursos');

    //CT03 Clique no botão de pesquisa novamente
        await driver.findElement(By.id('searchsubmit')).click();

    //CT04 Esperar um pouco para a página carregar, coloquei 1s
        await driver.sleep(1000);

    //CT05 Focar na janela atual, sem abrir uma nova aba
      await driver.switchTo().window(driver.getWindowHandle());

    //CT06 Esperar um pouco antes de fechar o navegador
      await driver.sleep(2000);

    } catch (error) {
        console.error(error);
    }
}
Pesquisar();

//node testeFuncionalPesquisar.js