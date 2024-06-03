//Esse teste verifica o comportamento em diferentes tamanhos de tela

const { Builder, By, Key, until } = require('selenium-webdriver');

async function Responsividade() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
//CT01 lista com diferentes tamanhos de telas
        const listaDimensaoTelas = [
            { width: 1600, height: 800 },
            { width: 1200, height: 800 },
            { width: 992, height: 800 },
            { width: 768, height: 800 },
            { width: 480, height: 800 },
            { width: 360, height: 800 }
        ];
//CT02 testanto
        await driver.get('https://www.borgonove.tech/');

        for (const dimensao of listaDimensaoTelas) {

            await driver.manage().window().setRect(dimensao);
            console.log(`Tamanho da janela: ${dimensao.width}x${dimensao.height}`);

            await driver.sleep(2000);
        }

    } catch (error) {
        console.error('Ocorreu um erro:', error);
    } 
}
Responsividade();

// node testResponsividade1.js
