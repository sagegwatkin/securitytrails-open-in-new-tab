function addOpenInNewTabColumnToDomainList() {
    // Get table of domains.
    const domainTable = document.querySelector('div.apex-domain div.app-body table.ui-table');

    if (! domainTable) {
        console.warn('Domain list not found.');
    } else if (domainTable.querySelector('thead tr th').innerText == chrome.i18n.getMessage('tableHeaderTitle')) {
        console.warn('Open column already added to domain list.')
    } else {
        // Add column to table header.
        const domainTableHeader = domainTable.querySelector('thead tr');

        const openColumnHeaderCell = document.createElement('th');
        openColumnHeaderCell.className = 'text-sm';
        openColumnHeaderCell.innerText = chrome.i18n.getMessage('tableHeaderTitle');

        domainTableHeader.prepend(openColumnHeaderCell);

        // Add column to domain rows.
        const domainTableRows = domainTable.querySelectorAll('tbody tr');

        for (const domainRow of domainTableRows) {
            const domain = domainRow.querySelector('td a').textContent;

            const httpUrl = 'http://' + domain;
            const httpsUrl = 'https://' + domain;

            const openCell = document.createElement('td');
            openCell.innerHTML = `<a class="mr-2" href="${httpUrl}" target="_blank">${chrome.i18n.getMessage('httpLinkText')}</a> ` +
                                 `<a href="${httpsUrl}" target="_blank">${chrome.i18n.getMessage('httpsLinkText')}</a>`;

            domainRow.prepend(openCell);
        };

        console.log('Open column added to domain list.');
    };
};

addOpenInNewTabColumnToDomainList();

// Set up the port to the service worker, so we can recieve messages when the domain table has been reloaded.
var serviceWorkerPort = chrome.runtime.connect();

serviceWorkerPort.onMessage.addListener(function (message) {
    if (message.domainsLoaded) {
        console.log('Message from service worker says the domain table has been loaded, adding column.');

        addOpenInNewTabColumnToDomainList();
    };
});