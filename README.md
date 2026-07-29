# Anari Letrak

Web bilingüe para organizar discografía y letras.

## Cómo verlo en tu ordenador

1. Instala Node.js: https://nodejs.org
2. Abre una terminal en esta carpeta.
3. Ejecuta:

```bash
npm install
npm run dev
```

4. Abre en el navegador la URL que aparece, normalmente `http://localhost:4321`.

## Cómo editar letras

Las canciones están en `src/content/songs/` como archivos Markdown.

Ejemplo:

```md
---
title: "Aingura Hegodunak"
album: "Zebra"
year: "2005"
slug: "aingura-hegodunak"
originalLang: "eu"
translationLang: "es"
---

## Euskara

Letra autorizada aquí.

## Castellano

Traducción autorizada aquí.
```

## Publicar online

La opción más sencilla es subir este proyecto a GitHub y conectarlo a Vercel o Netlify.

## Nota legal

No se incluyen letras completas por defecto. Añade solo letras autorizadas, propias o con permiso de publicación.
