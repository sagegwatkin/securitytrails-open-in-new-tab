const tabPorts = {};

chrome.runtime.onConnect.addListener(function (port) {
    const tabId = port.sender.tab.id;

    if (tabId) {
        tabPorts[tabId] = port;

        port.onDisconnect.addListener(function (port) {
            const tabId = port.sender.tab.id;

            tabPorts[tabId] = null;

            console.log(`Tab ${tabId} disconnected.`);
        });
    };

    console.log(`Connected to tab ${tabId}.`);
});

chrome.webRequest.onCompleted.addListener(
    function (details) {
        if (details.statusCode === 200) {
            const tabId = details.tabId;

            const tabPort = tabPorts[tabId];

            if (! tabId) {
                console.warn('Domain list request completed in unknown tab, ignoring.');
            } else if (! tabPort) {
                console.warn(`Domain list request completed in tab ${tabId}, but no port connected to that tab.`);
            } else {
                console.log(`Domain list request from tab ${tabId} completed, sending message to foreground script.`);

                tabPort.postMessage({'domainsLoaded': true});
            };
        };
    },
    {
        urls: [
            "*://securitytrails.com/_next/data/caae4664/list/apex_domain/*"
        ]
    }
);

console.log('Extension initialised.');