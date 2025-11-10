// Шаг 1: Выполняем скрипт на активной вкладке
const button = document.getElementById('grabBtn');
const button2 = document.getElementById('grabBtn2');
const button3 = document.getElementById('grabBtn3');
const button4 = document.getElementById('grabBtn4');
const button5 = document.getElementById('grabBtn5');
const button6 = document.getElementById('grabBtn6');
const button7 = document.getElementById('grabBtn7');


//Кнопка для Headless
button.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate, trainerNamespace, trainerCluster]) => {
            const accIdnumber = Number(accId);

            const datePlusFive = new Date(gameDate);
            datePlusFive.setMinutes(datePlusFive.getMinutes() + 5);
            const newDatePlusFiveString = datePlusFive.toISOString();

            const dateMinusFive = new Date(gameDate);
            dateMinusFive.setMinutes(dateMinusFive.getMinutes() - 5);
            const newDateMinusFiveString = dateMinusFive.toISOString();

            // Мега адейт, теперь пространства сам подтягивает
            chrome.tabs.create({url: `https://loggia.ecoinfra.io/?q=AccountId~eq~${accId}&q=HandId~eq~${gameId}&log=&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&az=${trainerCluster}&ns=${trainerNamespace}`});
            
        });
    });

// Кнопка для NEOAdviser
button2.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer]) => {

                const accIdnumber = Number(accId);
                
                const datePlusFive = new Date(gameDate);
                datePlusFive.setMinutes(datePlusFive.getMinutes() + 5);
                const newDatePlusFiveString = datePlusFive.toISOString();
                
                const dateMinusFive = new Date(gameDate);
                dateMinusFive.setMinutes(dateMinusFive.getMinutes() - 5);
                const newDateMinusFiveString = dateMinusFive.toISOString();

                // Пример использования массива: создание новой вкладки с изменённым URL
                    chrome.tabs.create({url: `https://loggia.ecoinfra.io/?az=selectel-ru-7&ns=hint-nzt-neotrainer-prod~hint-nzt-neotrainer-test&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&text=${gameId}`});
               
               });
        });

    
// Кнопка мозговых логов по раздаче
button3.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer]) => {
        const accIdnumber = Number(accId);

        const datePlusFive = new Date(gameDate);
        datePlusFive.setMinutes(datePlusFive.getMinutes() + 5);
        const newDatePlusFiveString = datePlusFive.toISOString();
        
        const dateMinusFive = new Date(gameDate);
        dateMinusFive.setMinutes(dateMinusFive.getMinutes() - 5);
        const newDateMinusFiveString = dateMinusFive.toISOString();

        chrome.tabs.create({
                // url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&log=${dateGame}&q=node~eq~${brainServer}&q=component~eq~system&text=${accIdnumber}+${gameId}`
                url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&q=node~eq~${brainServer}&q=component~eq~system&text=${accIdnumber}+${gameId}`
         });
    });
  });

// Кнопка мозговых логов на открытие стола
button4.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate]) => {
         const accIdnumber = Number(accId);

        const datePlusFive = new Date(dateOpenTable);
        datePlusFive.setMinutes(datePlusFive.getMinutes() + 5);
        const newDatePlusFiveString = datePlusFive.toISOString();
        
        const dateMinusFive = new Date(dateOpenTable);
        dateMinusFive.setMinutes(dateMinusFive.getMinutes() - 5);
        const newDateMinusFiveString = dateMinusFive.toISOString();

        chrome.tabs.create({
                // url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&log=${dateGame}&q=node~eq~${brainServer}&q=component~eq~system&text=${accIdnumber}+${gameId}`
                url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&q=node~eq~${brainServer}&q=component~eq~system&text=${accIdnumber}+<opentable&pinned-labels=node`
         });
    });
  });


  
// Кнопка мозговых логов на открытие сессии
button5.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate]) => {

                const accIdnumber = Number(accId);
                
                const datePlusFive = new Date(openTrainerDate);
                datePlusFive.setMinutes(datePlusFive.getMinutes() + 5);
                const newDatePlusFiveString = datePlusFive.toISOString();
                
                const dateMinusFive = new Date(openTrainerDate);
                dateMinusFive.setMinutes(dateMinusFive.getMinutes() - 5);
                const newDateMinusFiveString = dateMinusFive.toISOString();

                // Пример использования массива: создание новой вкладки с изменённым URL
                   chrome.tabs.create({
                // url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&log=${dateGame}&q=node~eq~${brainServer}&q=component~eq~system&text=${accIdnumber}+${gameId}`
                url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&q=component~eq~system&text=${accIdnumber}+<opentrainer&pinned-labels=node`
         });
               
               });
        });

        
// Кнопка логов импорта
button6.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate]) => {

                const accIdnumber = Number(accId);
                
                const datePlusFive = new Date(gameDate);
                datePlusFive.setMinutes(datePlusFive.getMinutes() + 60);
                const newDatePlusFiveString = datePlusFive.toISOString();
                
                const dateMinusFive = new Date(gameDate);
                dateMinusFive.setMinutes(dateMinusFive.getMinutes() - 5);
                const newDateMinusFiveString = dateMinusFive.toISOString();

                // Пример использования массива: создание новой вкладки с изменённым URL
                   chrome.tabs.create({
                // url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&log=${dateGame}&q=node~eq~${brainServer}&q=component~eq~system&text=${accIdnumber}+${gameId}`
                url: `https://loggia.ecoinfra.io/?ns=mga-platform&app=mgaimport&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&q=component~eq~system&text=${accIdnumber}`
         });
               
               });
        });

        
// Кнопка логов ерроримпорта
button7.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate]) => {

                const accIdnumber = Number(accId);
                
                const datePlusFive = new Date(gameDate);
                datePlusFive.setMinutes(datePlusFive.getMinutes() + 60);
                const newDatePlusFiveString = datePlusFive.toISOString();
                
                const dateMinusFive = new Date(gameDate);
                dateMinusFive.setMinutes(dateMinusFive.getMinutes() - 5);
                const newDateMinusFiveString = dateMinusFive.toISOString();

                // Пример использования массива: создание новой вкладки с изменённым URL
                   chrome.tabs.create({
                // url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&log=${dateGame}&q=node~eq~${brainServer}&q=component~eq~system&text=${accIdnumber}+${gameId}`
                url: `https://loggia.ecoinfra.io/?ns=mga-platform&app=mgaerrimport&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&q=component~eq~system&text=${accIdnumber}`
         });
               
               });
        });



    // Парсинг ссылки в ХИ
    function extractUrlParams(callback) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const tabId = tabs[0].id;
            
            chrome.scripting.executeScript({
                target: {tabId: tabId},
                func: () => {
                    const url = window.location.href;
                    const parsedUrl = new URL(url);
                    const gameId = parsedUrl.searchParams.get('gameId');
                    const accId = parsedUrl.searchParams.get('accId');
                    const gameDate = parsedUrl.searchParams.get('gameDate');
                    const brainServer = parsedUrl.searchParams.get('serverCode');
                    const dateOpenTable = parsedUrl.searchParams.get('openTableDate');
                    const openTrainerDate = parsedUrl.searchParams.get('openTrainerDate');
                    const htmlContent = document.documentElement.outerHTML;
                    //Регулярка для TrainerNamespace
                    const regexForNamespace = /"TrainerNamespace".*value<\/span>=<span class="hljs-string">"(.*)"/;
                    const matchNamespace = htmlContent.match(regexForNamespace);
                    const trainerNamespace = matchNamespace[1]
                      //Регулярка для TrainerCluster
                    const regexForCluser = /"TrainerCluster".*value<\/span>=<span class="hljs-string">"(.*)"/;
                    const matchCluster = htmlContent.match(regexForCluser);
                    const trainerCluster = matchCluster[1]
                    console.log(gameDate);
                    console.log(openTrainerDate);
                    console.log(dateOpenTable);
                    console.log(trainerCluster)
                    return [gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate, trainerNamespace, trainerCluster];
                }
            }, (results) => {
                if (results && results[0] && results[0].result) {
                    callback(results[0].result);
                } else {
                    console.error('Failed to extract URL parameters');
                }
            });
        });
    }
