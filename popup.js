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
const button10 = document.getElementById('grabBtn10');
function animateCopyButton(button, successText = '✅ Скопировано') {
    if (!button) return;

    if (!button.dataset.originalText) {
        button.dataset.originalText = button.textContent;
    }

    clearTimeout(button._copyResetTimer);
    button.classList.add('copied');
    button.textContent = successText;
    button.disabled = true;

    button._copyResetTimer = setTimeout(() => {
        button.textContent = button.dataset.originalText;
        button.classList.remove('copied');
        button.disabled = false;
    }, 1600);
}


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

                   chrome.tabs.create({
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

                   chrome.tabs.create({
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

                   chrome.tabs.create({
                url: `https://loggia.ecoinfra.io/?ns=mga-platform&app=mgaerrimport&from=${newDateMinusFiveString}&to=${newDatePlusFiveString}&text=${accIdnumber}`
         });
               
               });
        });


                
// кнопка парсинга орлога
button8.addEventListener('click', function() {
    extractUrlParams(([gameId, accId, gameDate, brainServer, dateOpenTable, openTrainerDate, trainerNamespace, trainerCluster, trainerOrlog]) => {
    
    
    let cleanedText = trainerOrlog
        .replace(/RFA[^;]*;/g, '')
        .replace(/GENSEND[^;]*;/g, '');
    
    let result = cleanedText.replace(/;/g, '\n');
    
    const lines = result
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
    
    const finalresult = lines.join('\n');

    function copyVariableToClipboard(finalresult) {
    if (typeof finalresult !== 'string') {
     finalresult = String(finalresult);
     }
  
        navigator.clipboard.writeText(finalresult)
        .then(() => {
            animateCopyButton(button8, '✅ Orlog скопирован');
        })
        .catch(err => {
            console.error('Ошибка копирования');
        });
    }

    copyVariableToClipboard(finalresult);

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
                    const regexForNamespace = /"TrainerNamespace".*value<\/span>=<span class="hljs-string">"(.*)"/;
                    const matchNamespace = htmlContent.match(regexForNamespace);
                    let trainerNamespace = matchNamespace ? matchNamespace[1] : null;
                    const regexForCluser = /"TrainerCluster".*value<\/span>=<span class="hljs-string">"(.*)"/;
                    const matchCluster = htmlContent.match(regexForCluser);
                    let trainerCluster = matchCluster ? matchCluster[1] : null;
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


// кнопка парсинга GIP-команд
button10.addEventListener('click', function() {
    extractGipCommands((gipCommands) => {

        function copyVariableToClipboard(value) {
            if (typeof value !== 'string') {
                value = String(value);
            }

            navigator.clipboard.writeText(value)
                .then(() => {
                    animateCopyButton(button10, '✅ GIP2 скопирован');
                })
                .catch(err => {
                    console.error('Ошибка копирования');
                });
        }

        if (!gipCommands) {
            alert('GIP-команды не найдены');
            return;
        }

        copyVariableToClipboard(gipCommands);
    });
});

function extractGipCommands(callback) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const tabId = tabs[0].id;

        chrome.scripting.executeScript({
            target: {tabId: tabId},
            func: () => {
                const htmlContent = document.documentElement.outerHTML;

                function decodeHtmlEntities(str) {
                    const txt = document.createElement('textarea');
                    txt.innerHTML = str;
                    return txt.value;
                }

                const regexForCodeBlock = /<code[^>]*>([\s\S]*?)<\/code>/;
                const matchCodeBlock = htmlContent.match(regexForCodeBlock);
                let codeBlock = matchCodeBlock ? matchCodeBlock[1] : null;

                if (!codeBlock) {
                    return null;
                }

                codeBlock = decodeHtmlEntities(codeBlock)
                    .replace(/<span[^>]*>/g, '')
                    .replace(/<\/span>/g, '')
                    .replace(/\r\n/g, '\n')
                    .replace(/\r/g, '\n');

                const commandNames = [
                    'OpenTrainerSession',
                    'OpenTable',
                    'GameError',
                    'Sog',
                    'Igr',
                    'IgLog',
                    'Ga',
                    'GaBack',
                    'Eog',
                    'IngameAnswer'
                ];

                const lines = codeBlock.split('\n');
                const result = [];

                function findCommandStart(line) {
                    for (const commandName of commandNames) {
                        const regex = new RegExp(`<${commandName}(\\s|>|\\/)`);
                        if (regex.test(line)) {
                            return commandName;
                        }
                    }
                    return null;
                }

                function hasClosingTag(line, commandName) {
                    return new RegExp(`</${commandName}>`).test(line);
                }

                function isSelfClosed(line, commandName) {
                    return new RegExp(`<${commandName}[^>]*\\/\\s*>`).test(line);
                }

                function trimBeforeCommand(line, commandName) {
                    const regex = new RegExp(`.*?(<${commandName}(\\s|>|\\/).*)`);
                    const match = line.match(regex);
                    return match ? match[1] : line;
                }

                let currentCommand = null;
                let currentBlock = [];

                for (const rawLine of lines) {
                    const line = rawLine.trimEnd();
                    const startedCommand = findCommandStart(line);

                    if (startedCommand && currentCommand && startedCommand !== currentCommand) {
                        if (currentBlock.length > 0) {
                            result.push(currentBlock.join('\n').trim());
                        }
                        currentCommand = null;
                        currentBlock = [];
                    }

                    if (!currentCommand) {
                        if (!startedCommand) {
                            continue;
                        }

                        currentCommand = startedCommand;
                        currentBlock = [trimBeforeCommand(line, startedCommand)];

                        if (isSelfClosed(currentBlock[0], currentCommand) || hasClosingTag(currentBlock[0], currentCommand)) {
                            result.push(currentBlock.join('\n').trim());
                            currentCommand = null;
                            currentBlock = [];
                        }

                        continue;
                    }

                    currentBlock.push(line);

                    if (hasClosingTag(line, currentCommand)) {
                        result.push(currentBlock.join('\n').trim());
                        currentCommand = null;
                        currentBlock = [];
                    }
                }

                if (currentCommand && currentBlock.length > 0) {
                    result.push(currentBlock.join('\n').trim());
                }

                return [...new Set(result.filter(Boolean))].join('\n\n');
            }
        }, (results) => {
            if (results && results[0] && results[0].result !== undefined) {
                callback(results[0].result);
            } else {
                console.error('Failed to extract GIP commands');
                callback(null);
            }
        });
    });
}
