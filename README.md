# SecurityTrails Open In New Tab

This is a very simple Chrome extension that adds a column to the [securitytrails.com](https://securitytrails.com) subdomain results table with anchor links (http and https) pointing directly to the domain, instead of to the domain details in the SecurityTrails UI.

Much faster than selecting the domain text, right clicking, and selecting *go to ...*.

## Installation

### Chrome Web Store

[Download from the Chrome Web Store](https://chrome.google.com/webstore/detail/securitytrails-open-in-ne/mdjpmakmdlidjceihjelejcjgobmldhl).

### Manually

To install this extension manually:

1. Download/clone this repo.
2. Head to [`chrome://extensions`](chrome://extensions).
3. Enable developer mode.
4. Select *Load unpacked*.
5. Navigate to and select the `src` directory.

## Screenshots

### Before
![Screenshot of domain table without the extension.](before.png?raw=true "Screenshot of domain table without the extension.")

### After
![Screenshot of domain table with the extension.](after.png?raw=true "Screenshot of domain table with the extension.")

## Localisation

There are only about 5 words in the extension, but feel free to submit a pull request with a translation.

1. Duplicate the [`src/_locales/en`](https://github.com/sagegwatkin/securitytrails-open-in-new-tab/tree/main/src/_locales/en) directory.
2. Rename the directory with the new language code.
3. Translate all of the messages in [`src/_locales/{new language code}/messages.json`](https://github.com/sagegwatkin/securitytrails-open-in-new-tab/tree/main/src/_locales/en).

[Documentation here](https://developer.chrome.com/docs/webstore/i18n/).

## Issues

[Please use GitHub issues.](https://github.com/sagegwatkin/securitytrails-open-in-new-tab/issues)

## Notice

I am not affiliated, associated, authorized, or endorsed by SecurityTrails. SecurityTrails, & related names, marks, emblems and images are trademarks of SecurityTrails.
