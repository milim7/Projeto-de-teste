//Esse teste verificar o tempo de leva de carregamento da pagina e outros elementos da pagina
const { Builder, By } = require('selenium-webdriver');

async function medirDesempenho() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        let url = 'https://esbam.edu.br';
        let tempoInicial, tempoFinal, tempoTotal;

        await driver.get(url);

//CT01 Captura o tempo inicial
        tempoInicial = new Date().getTime();

//CT02 Clicar no elemento para a pag de calendario academico 
        await driver.findElement(By.xpath('//*[@id="menu-item-17980"]/a')).click();

//CT03 Esperar que a página seja carregada completamente, espera de 5s
        await driver.sleep(5000); 

//CT04 Captura o tempo final após o carregamento
        tempoFinal = new Date().getTime();

//CT05 Calcula o tempo total de carregamento da página
        tempoTotal = tempoFinal - tempoInicial;

        console.log(`O tempo total de carregamento da página após clicar no CALENDARIO ACADÊMICO foi de: ${tempoTotal} ms`);

    } catch (error) {
        console.error(error);
    }
}
medirDesempenho();

// node testVerificarCarregamento.js
