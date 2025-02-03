# Tampermonkey Script Template

<details>
<summary>Method 1 (Functional)</summary>

This method doesn't auto update what gets loaded, when you refresh the page where the scripts run (`@match`)

## How to Use

1. **Create a New Script**:
   - Open the Tampermonkey dashboard.
   - Click on the `+` button to create a new script.

2. **Write Your Script**:
   - In the new script editor, write your Tampermonkey script. make it look like this:

```javascript
(function() {
  'use strict';

   // Your script here

});
```

3. **Add Metadata Block**:
   - Add a metadata block at the top of your script. See below Methods.

4. **Save and Enable the Script**:
   - Save the script and make sure it is enabled.

5. **Test the Script**:
   - Navigate to a webpage that matches the `@match` pattern in the script to ensure it loads correctly.
   - The `@match` pattern can be used to specify multiple different sites where the script should run. For example:

```javascript
// @match        *://example.com/*
// @match        *://another-example.com/*
```

6. **Auto Install Script**:
   - By making the Monkey-script filename end in `.user.js`, you can create a link that auto installs the Tampermonkey script. For example, if your script is hosted on GitHub, you can provide a link like `https://github.com/username/repository/raw/branch/filename.user.js`.

</details>

<details>
<summary>Method 2 (Non-Functional yet!!!)</summary>

This repository contains a template for creating a Tampermonkey script that loads another script from a GitHub repository. This should auto update what gets loaded, when you refresh the page where the scripts run (`@match`)

## How to Use

1. **Create a New Script**:
   - Open the Tampermonkey dashboard.
   - Click on the `+` button to create a new script.

2. **Copy the Template Script**:
   - Copy the content of `Template.js` from this repository.

3. **Paste the Script**:
   - Paste the copied script into the new script editor in Tampermonkey.

4. **Modify the Script URL**:
   - Replace `https://raw.githubusercontent.com/username/repository/branch/script.user.js` in the script with the raw URL of the script you want to load from GitHub.

5. **Save and Enable the Script**:
   - Save the script and make sure it is enabled.

6. **Test the Script**:
   - Navigate to a webpage that matches the `@match` pattern in the script to ensure it loads correctly.
   - The `@match` pattern can be used to specify multiple different sites where the script should run. For example:

```javascript
// @match        *://example.com/*
// @match        *://another-example.com/*
```

7. **Auto Install Script**:
   - By making the Monkey-script filename end in `.user.js`, you can create a link that auto installs the Tampermonkey script. For example, if your script is hosted on GitHub, you can provide a link like `https://github.com/username/repository/raw/branch/filename.user.js`. <<< make sure this is the Monkey-Script and not the one you want to load with it!!!

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

</details>

## Metadata Block

The metadata block in a Tampermonkey script contains information about the script. Here are some common metadata fields you can edit:

- `@name`: The name of the script.
- `@namespace`: A unique identifier for the script, usually a URL.
- `@version`: The version of the script.
- `@description`: A brief description of what the script does.
- `@author`: The author of the script.
- `@match`: The URL patterns where the script should run.
- `@exclude`: The URL patterns where the script should not run.
- `@grant`: Permissions that the script requires, such as access to certain APIs.
- `@run-at`: Specifies when the script should run (e.g., `document-start`, `document-end`).
- `@require`: URLs of external scripts that should be loaded before this script.
- `@resource`: URLs of external resources (e.g., images, stylesheets) that the script can use.
- `@icon`: URL of an icon for the script.
- `@updateURL`: URL where updates for the script can be found.
- `@downloadURL`: URL where the script can be downloaded.

<details>
<summary>@run-at Arguments</summary>

The `@run-at` metadata specifies when the script should be executed. Here are the common values:

- `document-start`: The script runs as soon as possible, before the page's HTML is fully loaded.
- `document-end`: The script runs after the page's HTML is fully loaded and parsed.

</details>

Here is an example of a metadata block with these fields:

```javascript
// ==UserScript==
// @name         Example Script
// @namespace    http://example.com/
// @version      1.0
// @description  An example Tampermonkey script
// @author       Your Name
// @match        *://example.com/*
// @exclude      *://example.com/exclude/*
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// @require      https://example.com/external-script.js
// @resource     exampleImage https://example.com/image.png
// @icon         https://example.com/icon.png
// @updateURL    https://example.com/update
// @downloadURL  https://example.com/download
// ==/UserScript==
```

Replace the placeholder values with actual data relevant to your script.

