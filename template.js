export default () => {
    return `<!doctype html>
      <html lang="en">
        <head>
            <title></title>
            <meta charset="UTF-8">
            <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap" rel="stylesheet">
            <meta name="viewport"  content="width=device-width initial-scale=1"/>
        </head>
        <body>
          <script type="text/javascript" src="/js/main.js"></script>
          <div id="root"></div>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`;
}
