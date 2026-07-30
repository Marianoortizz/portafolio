# Portfolio de Ciberseguridad — Mariano Facundo Ortiz

Sitio web estático de 5 páginas, proyecto final del curso. Desarrollado con
HTML semántico, SCSS (arquitectura de partials) y Bootstrap.

## Estructura

```
├── index.html
├── pages/
│   ├── sobre-mi.html
│   ├── experiencia.html
│   ├── certificaciones.html
│   └── contacto.html
├── scss/
│   ├── main.scss          (solo @use, sin código propio)
│   └── partials/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _base.scss
│       ├── _navbar.scss
│       ├── _terminal.scss
│       ├── _cards.scss
│       ├── _footer.scss
│       ├── _animations.scss
│       └── _responsive.scss
├── styles/
│   └── main.css            (CSS compilado, listo para producción)
├── assets/
│   ├── shield.svg
│   └── avatar-terminal.svg
└── js/
    └── main.js
```

## Contenido real usado

- Nombre: Mariano Facundo Ortiz
- Perfil: Cybersecurity Student | SOC Analyst (Aspiring) | Blue Team | Security+
- Ubicación: Buenos Aires, Argentina
- Email: Mfoservicies@gmail.com
- LinkedIn: https://www.linkedin.com/in/mariano-facundo-ortiz-232851398/
- 8 certificaciones (Universidad Siglo 21, LetsDefend, EducacionIT, Coderhouse)

## Pendiente antes de entregar

1. En `pages/certificaciones.html`, reemplazar los enlaces `#` de "Mostrar credencial"
   por las URLs reales de cada certificación (las tenés en tu perfil de LinkedIn).
2. Si compilás el SCSS con `sass` en tu máquina (`sass scss/main.scss styles/main.css`),
   se regenerará `styles/main.css` — ya está incluido el resultado compilado a mano
   porque este entorno no tiene el compilador `sass` disponible.
3. Subir a GitHub en modo público con al menos 2 commits descriptivos.
4. Desplegar en Vercel o Netlify.
5. Pegar acá abajo el link del deploy:

   **Deploy:** https://mfoservicies.netlify.app
