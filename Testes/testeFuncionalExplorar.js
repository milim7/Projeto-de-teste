//Esse teste entra direto no youtube e faz o clique no menu
//e entra na opção "Em alta" onde se encontra todos os videos que estão em alta

const { Builder, By, until } = require('selenium-webdriver');

async function explorarDoYoutube() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.youtube.com');

// CT01 Esperar e clicar no botão de menu lateral,com 10s
        await driver.wait(until.elementLocated(By.id('guide-icon')), 10000);
        let menuButton = await driver.findElement(By.id('guide-icon'));
        await menuButton.click();

// CT02 Rolar até o elemento "Em alta" e clicar nele, com 10s
        await driver.wait(until.elementLocated(By.xpath("//yt-formatted-string[contains(text(), 'Em alta')]")), 10000);

        let emAlta = await driver.findElement(By.xpath("//yt-formatted-string[contains(text(), 'Em alta')]"));
        await driver.executeScript("arguments[0].scrollIntoView();", emAlta);
        await emAlta.click();

    } catch (error) {
        console.error(error);
    }
}
explorarDoYoutube();

//node testeFuncionalExplorar.js