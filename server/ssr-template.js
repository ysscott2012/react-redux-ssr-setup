// html skeleton provider
export default function template(title, initialState = {}, content = "") {
    let scripts = ''; // Dynamically ship scripts based on render type
    if (content) {
        scripts = ` <script>
                        window.__STATE__ = ${JSON.stringify(initialState)}
                    </script>
                    <script src="serverBundle.js"></script>
                    `
    } else {
        scripts = `<script src="http://localhost:8081/clientBundle.js"></script>`
    }
    let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title> ${title} </title>
                    <link href="style.css" rel="stylesheet">
                </head>
                <body>
                    <div class="content">
                        <div id="app" class="wrap-inner">
                        ${content}
                        </div>
                    </div>

                    ${scripts}
                </body>
                `;

    return page;
}
