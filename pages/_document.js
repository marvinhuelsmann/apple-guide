import { Html, Head, Main, NextScript } from "next/document";

// Setzt das Farbschema vor dem ersten Rendern, damit nichts flackert.
const themeScript = `
(function(){try{var s=localStorage.getItem("ag-theme");var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();
`;

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f5f5f7" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
