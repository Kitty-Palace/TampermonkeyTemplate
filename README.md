# Tampermonkey Script Template

This repository contains a template for creating a Tampermonkey script that loads another script from a GitHub repository.

## How to Use

1. **Create a New Script**:
   - Open the Tampermonkey dashboard.
   - Click on the `+` button to create a new script.

2. **Copy the Template Script**:
   - Copy the content of `Template.js` from this repository.

3. **Paste the Script**:
   - Paste the copied script into the new script editor in Tampermonkey.

4. **Modify the Script URL**:
   - Replace `https://raw.githubusercontent.com/username/repository/branch/script.js` in the script with the raw URL of the script you want to load from GitHub.

5. **Save and Enable the Script**:
   - Save the script and make sure it is enabled.

6. **Test the Script**:
   - Navigate to a webpage that matches the `@match` pattern in the script to ensure it loads correctly.
   -The `@match` pattern can be used to specify multiple different sites where the script should run. For example:

```javascript
// @match        *://example.com/*
// @match        *://another-example.com/*
```

## Example

Here is an example of what the modified script might look like:

```javascript
// ==UserScript==
// @name         GitHub Script Loader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Load a script from a GitHub repository
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const scriptUrl = 'https://raw.githubusercontent.com/username/repository/branch/script.js';
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = function() {
        console.log(`${GM_info.script.name} by ${GM_info.script.author} loaded successfully.`);
    };
    document.head.appendChild(script);
})();
```

Replace `https://raw.githubusercontent.com/username/repository/branch/script.js` with the actual URL of the script you want to load.