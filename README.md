# 🚀 Angular Virtual Scroll App

Aplicación desarrollada en **Angular 12** que implementa virtual scrolling utilizando **Angular CDK** para renderizar grandes listas de datos de forma eficiente.

El proyecto está optimizado para manejar hasta **100,000 elementos** sin afectar el rendimiento del navegador.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- 📦 **Node.js:** `v14.x` o `v16.x` *(preferiblemente `v24.13.0`)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verificar versiones instaladas

Ejecuta en la terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd virtual-scroll-app
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar el proyecto

```bash
ng serve
```

Luego abre en tu navegador:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

Este proyecto utiliza un único componente principal optimizado para performance.

### 📦 VirtualScrollComponent

- Genera una lista de **100,000 usuarios** en memoria
- Renderiza solo los elementos visibles en pantalla
- Utiliza `cdk-virtual-scroll-viewport`
- Optimiza el DOM evitando renders innecesarios

---

## ⚙️ Funcionalidades principales

- ⚡ Renderizado eficiente de listas grandes
- 📜 Virtual scrolling con Angular CDK
- 🧠 Optimización de performance en DOM
- 📦 Manejo de 100k+ elementos sin lag
- 🔄 Uso de `trackBy` para optimización de render

---

## 🧰 Tecnologías utilizadas

- 🅰️ Angular 12
- 🧩 Angular CDK Scrolling
- ⚡ TypeScript
- 🎨 CSS moderno

---

## 📁 Estructura del proyecto

```bash
src/app/
├── virtual-scroll/
│   ├── virtual-scroll.component.ts
│   ├── virtual-scroll.component.html
│   └── virtual-scroll.component.css
├── app.module.ts
├── app.component.ts
```

---

## 🔥 Conceptos implementados

- Virtual scrolling con Angular CDK
- Optimización de rendimiento en listas grandes
- `trackBy` function para optimizar renders
- Renderizado eficiente del DOM
- Generación de datasets simulados

---

## 📊 Resultado

La aplicación puede manejar listas de **100,000+ elementos** sin degradar el rendimiento gracias al renderizado virtual.

---

## 📄 Licencia

Este proyecto es de uso educativo y forma parte de un portafolio personal.
