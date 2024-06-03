//Esse teste faz o play no botão de video que contem na pag da Esbam mencionada

const { Builder, By, until } = require('selenium-webdriver');

async function clicarEmPlay() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        let url = 'https://esbam.edu.br/portal-do-aluno/';
        await driver.get(url);

//CT01 Esperar até que a página esteja totalmente carregada, com 10s de tempo
        await driver.manage().setTimeouts({ implicit: 10000 });

//CT02 Localizar o iframe que contém o vídeo
        let iframe = await driver.findElement(By.xpath('//*[@id="main"]/div[1]/div/main/div/div/div[3]/div[2]/div/iframe'));
        
//CT03 Mudar para o contexto do iframe
        await driver.switchTo().frame(iframe);

//CT04 Esperar até que o botão de play esteja visível
        let botaoPlay = await driver.wait(until.elementLocated(By.css('.ytp-large-play-button')), 10000);
        await botaoPlay.click();

        console.log('Botão de play clicado com sucesso!');

    } catch (error) {
        console.error('Erro ao clicar no botão de play:', error);
    }
}

clicarEmPlay();
//node testFuncionalPlay.js
