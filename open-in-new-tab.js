// Get table of domains.
const domainTable = document.querySelector('div.apex-domain div.app-body table.ui-table');

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
    openCell.innerHTML = `<a class="mr-2" href="${httpUrl}">http</a> <a href="${httpsUrl}">https</a>`;

    domainRow.prepend(openCell);
};