// Шаг 1: Выполняем скрипт на активной вкладке
const button = document.getElementById('grabBtn');
const button2 = document.getElementById('grabBtn2');
const button3 = document.getElementById('grabBtn3');
const button4 = document.getElementById('grabBtn4');
const button5 = document.getElementById('grabBtn5');
const button6 = document.getElementById('grabBtn6');
const button7 = document.getElementById('grabBtn7');
const button8 = document.getElementById('grabBtn8');
const button9 = document.getElementById('grabBtn9');

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
            if (trainerNamespace == null || trainerCluster == null || trainerCluster == '' || trainerCluster == '')
            // Мега адейт, теперь пространства сам подтягивает
            //chrome.tabs.create({url: `https://loggia.ecoinfra.io/?q=AccountId~eq~${accId}&q=HandId~eq~${gameId}&log=&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}`});
            //else chrome.tabs.create({url: `https://loggia.ecoinfra.io/?q=AccountId~eq~${accId}&q=HandId~eq~${gameId}&log=&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&az=${trainerCluster}&ns=${trainerNamespace}`});
            chrome.tabs.create({url: `https://loggia.ecoinfra.io/?pinned-fields=legacy_labels.SessionId&level=info&text=${gameId}&attr=deeplay.account_id~in~${accId}&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}`});
            else chrome.tabs.create({url: `https://loggia.ecoinfra.io/?pinned-fields=legacy_labels.SessionId&level=info&text=${gameId}&az=${trainerCluster}&ns=${trainerNamespace}&attr=deeplay.account_id~in~${accId}&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}`});
      
        
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
                //url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&q=node~eq~${brainServer}&q=component~eq~system&text=${accIdnumber}+${gameId}`
                url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&text=${accIdnumber}+${gameId}&app=serverapp&q=%40loggia.node%7Eeq%7E${brainServer}&q=%40loggia.extra.app_name%7Eeq%7Eserverapp&view=custom&view-name=Brain_filter&view-wl=%40loggia.node&view-bl=%40loggia.node`
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
                //url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&q=node~eq~${brainServer}&q=component~eq~system&text=${accIdnumber}+<opentable&pinned-labels=node`
                url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&text=${accIdnumber}+%3Copentable&app=serverapp&q=%40loggia.extra.app_name%7Eeq%7Eserverapp&view=custom&view-name=Brain_filter&view-wl=%40loggia.node`
      
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
                //url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&q=component~eq~system&text=${accIdnumber}+<opentrainer&pinned-labels=node`
                url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&text=<OpenTrainerSession+${accIdnumber}&app=serverapp&q=%40loggia.extra.app_name%7Eeq%7Eserverapp&view=custom&view-name=Brain_filter&view-wl=%40loggia.node`
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
                url: `https://loggia.ecoinfra.io/?ns=mga-platform&app=mgaimport&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&text=${accIdnumber}`
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
                url: `https://loggia.ecoinfra.io/?ns=mga-platform&app=mgaerrimport&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&text=${accIdnumber}`
         });
               
               });
        });


                
// кнопка парсинга орлога
button8.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate, trainerNamespace, trainerCluster, trainerOrlog]) => {
    
    
    // 1. Удаляем строки с RFA и GENSEND
    let cleanedText = trainerOrlog
        .replace(/RFA[^;]*;/g, '') // Удаляем RFA с числами
        .replace(/GENSEND[^;]*;/g, ''); // Удаляем GENSEND и всё до следующей ;
    
    // 2. Заменяем оставшиеся точки с запятой на переносы строк
    let result = cleanedText.replace(/;/g, '\n');
    
    // 3. Разбиваем на строки, обрезаем пробелы и фильтруем пустые строки
    const lines = result
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
    
    // 4. Объединяем обратно с переносами строк
    const finalresult = lines.join('\n');

    // Создаем функцию, которая принимает переменную
    function copyVariableToClipboard(finalresult) {
    // Проверяем тип переменной
    if (typeof finalresult !== 'string') {
    // Если не строка, преобразуем в строку
     finalresult = String(finalresult);
     }
  
        // Копируем
        navigator.clipboard.writeText(finalresult)
        .then(() => {
         // Показываем уведомление
        copyStatus.style.display = 'inline';
        copyStatus.style.color = 'green';
        // Скрываем через 2 секунды
        setTimeout(() => {
            copyStatus.style.display = 'none';
        }, 2000);
        })
        .catch(err => {
            copyStatus.textContent = '❌ Ошибка';
            copyStatus.style.color = 'red';
            copyStatus.style.display = 'inline';
         setTimeout(() => {
            copyStatus.style.display = 'none';
         }, 2000);
        });
    }

    // Копируем разные переменные
    copyVariableToClipboard(finalresult);  // "JohnDoe123"

               });
        });


        // Axon сборка
  button9.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate]) => {
         const accIdnumber = Number(accId);

        const datePlusFive = new Date(dateOpenTable);
        datePlusFive.setMinutes(datePlusFive.getMinutes() + 5);
        const newDatePlusFiveString = datePlusFive.toISOString();
        
        const dateMinusFive = new Date(dateOpenTable);
        dateMinusFive.setMinutes(dateMinusFive.getMinutes() - 5);
        const newDateMinusFiveString = dateMinusFive.toISOString();

        chrome.tabs.create({
                //url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&q=node~eq~${brainServer}&text=${accIdnumber}&pinned-labels=node&log=${newDateMinusFiveString}&logger=com.gmware.lib.services.axonclient.AxonClient&level=trace`
                 url: `https://loggia.ecoinfra.io/?az=brains&ns=brain-platform&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&text=${accIdnumber}&pinned-labels=node&log=${newDateMinusFiveString}&logger=com.gmware.lib.services.axonclient.AxonClient&level=trace&view=custom&view-wl=%40loggia.node&view-name=Brain_filter&view-bl=%40loggia.node`
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
                    let trainerNamespace = matchNamespace ? matchNamespace[1] : null;
                    //Регулярка для TrainerCluster
                    const regexForCluser = /"TrainerCluster".*value<\/span>=<span class="hljs-string">"(.*)"/;
                    const matchCluster = htmlContent.match(regexForCluser);
                    let trainerCluster = matchCluster ? matchCluster[1] : null;
                    //Регулярка для парсинга орлога
                    const regexForOrlog = /(START V1[^;]*;[\s\S]*?PreGameOver)/;
                    const matchOrlog = htmlContent.match(regexForOrlog);
                    let trainerOrlog = matchOrlog ? matchOrlog[1] : null;
                    console.log(gameDate);
                    console.log(openTrainerDate);
                    console.log(trainerOrlog);
                    return [gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate, trainerNamespace, trainerCluster, trainerOrlog];
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
