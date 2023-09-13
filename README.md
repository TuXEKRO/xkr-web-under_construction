<br/>
<p align="center">
  <a href="https://github.com/TuXEKRO/xkr-web-under_construction">
    <img src="https://github.com/TuXEKRO/xkr-web-under_construction/assets/25120872/f14b8956-59a7-407f-8409-6e2b06ac2722" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Landing page "En Construcción"</h3>

  <p align="center">
    Página web estática "En construcción" para los servidores de XEKRO Servers, utilizando HTML5, CSS3 y JavaScript.
    <br/>
    <br/>
    <a href="https://xekro.com/under_construction/index.html"><strong>Ver Demo »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/TuXEKRO/xkr-web-under_construction/issues">Informar Bug</a>
    .
    <a href="https://github.com/TuXEKRO/xkr-web-under_construction/issues">Pedir funcionalidad</a>
  </p>
</p>

![Issues](https://img.shields.io/github/issues/TuXEKRO/xkr-web-under_construction) ![License](https://img.shields.io/github/license/TuXEKRO/xkr-web-under_construction) 

## Índice de contenidos

* [Sobre el Proyecto](#sobre-el-proyecto)
* [Tecnologías Utilizadas](#tecnologías-utilizadas)
* [Comenzar](#comenzar)
  * [Prerrequisitos](#prerrequisitos)
  * [Instalación](#instalación)
* [Uso](#uso)
* [Contribuir](#contribuir)
* [Licencia](#licencia)
* [Autores](#autores)

## Sobre el Proyecto

![preview](https://github.com/TuXEKRO/xkr-web-under_construction/assets/25120872/72e4f521-708e-499a-93a4-8f5b4b96c70f)


Este proyecto sirve como una landing page temporal para XEKRO Servers mientras realizan la migración de hosting. Utiliza HTML5 semántico, CSS3 con arquitectura BEM y JavaScript puro para lograr una experiencia de usuario rápida, eficaz, interactiva y de fácil mantenimiento. 


¿Por qué utilizar este proyecto?:

* Uso de metodologías y arquitecturas modernas como BEM y Mobile First.
* Arquitectura MVC para organizar el código JavaScript.
* Optimización para SEO con meta tags y atributos ``alt`` en las imágenes.
* Fácil de mantener y escalar.

## Tecnologías Utilizadas

A continuación se lista las tecnologías utilizadas en este proyecto:

* [HTML5](https://html5.org/)
* [CSS3](https://www.css3.com/)
* [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) (Vanilla)
* [Google Fonts](https://fonts.google.com/)
* Metodologías: 
  * Diseño Responsivo
  * [Arquitectura CSS BEM](https://animaticss.com/articulo/que-es-bem-css/)
* Estándares:
  * W3C para [HTML](https://www.w3docs.com/snippets/html/html5-page-structure.html) y [CSS](https://www.w3schools.com/css/css_syntax.asp)

______

## Comenzar

Ejemplo de cómo puede usar este proyecto en su hosting web (Apache y Nginx) en Linux (Debian).

### Prerrequisitos

Servidor HTTP (no hace falta PHP).

### Instalación

1. Clone el repositorio:
```sh
git clone https://github.com/TuXEKRO/xkr-web-under_construction.git
```

2. Mueva la carpeta ``xkr-web-under_construction`` a su servidor HTTP:
###### Apache:
```sh
sudo mv xkr-web-under_construction /var/www/html/
```

###### Nginx:
```sh
sudo mv xkr-web-under_construction /usr/share/nginx/html/
```

3. Edite su ``.htaccess`` para realizar un redireccionamiento temporal:
```txt
# Redirige todo el tráfico a la carpeta trabajando.
Redirect 301 /index.html /under_construction/index.html
```

## Uso

#### Rendimiento web "perfecto":

[![Image from Gyazo](https://i.gyazo.com/0a63989e2f42a44110afc86c3038d2ad.png)](https://gyazo.com/0a63989e2f42a44110afc86c3038d2ad)

#### Botón de Discord con animación sencilla:

[![Image from Gyazo](https://i.gyazo.com/cd45dc3b58b7a9862fd338e28e9b8597.gif)](https://gyazo.com/cd45dc3b58b7a9862fd338e28e9b8597)

#### Botones de los múltiples servidores:

[![Image from Gyazo](https://i.gyazo.com/d3962c260cf60b581240b6e098ed3cd9.gif)](https://gyazo.com/d3962c260cf60b581240b6e098ed3cd9)

#### Diseño responsivo:

![49a0fa60b76cf8ba9a2b8a44e834977a](https://github.com/TuXEKRO/xkr-web-under_construction/assets/25120872/507b58b5-88df-44a8-8da1-7dfe1fe4da48)



## Contribuir

1. Haz un Fork del proyecto.
2. Cree su propia rama (`git checkout -b feature/AmazingFeature`).
3. Confirme sus cambios (`git commit -m 'Característica única e increíble.'`).
4. Suba los cambios a la rama (`git push origin feature/AmazingFeature`).
5. Abra una solicitud Pull Request.

## Licencia

Distribuido bajo la licencia MIT. Consulta el archivo [LICENCIA](https://github.com/XEKRO/xekro-servers-under_construction/blob/main/LICENSE.md) para más información.

## Autores

* **TuXEKRO** - *Desarrollador Full-stack developer* - [TuXEKRO](https://github.com/TuXEKRO)
