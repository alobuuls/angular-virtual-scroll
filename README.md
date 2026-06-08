<h1 align="center">⚡ Angular Virtual Scroll</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-12-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Performance-Virtual%20Scroll-blue" alt="Virtual Scroll" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-virtual-scroll" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-virtual-scroll/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-virtual-scroll?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-virtual-scroll/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-virtual-scroll" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [⚡ Angular Virtual Scroll](#-angular-virtual-scroll)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-virtual-scroll/

---

## 📖 Description

> [!NOTE]
> Angular 12 application that demonstrates Virtual Scrolling techniques to efficiently render large collections of data while maintaining optimal performance.

The project showcases how to improve rendering performance by displaying only the visible elements within the viewport, reducing DOM size and memory consumption while providing a smooth user experience.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

* 📦 **Node.js:** `v12.14.x – v14.x` *(recommended: v14.21.3 LTS)*
* 📦 **npm:** `v6+`
* 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-virtual-scroll.git

cd angular-virtual-scroll
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a simple Angular architecture focused on performance optimization through virtual scrolling.

### 📦 Virtual Scroll Component

Responsible for:

* Virtual list rendering
* Visible item calculation
* Scroll event handling
* DOM optimization
* Performance management

### 📦 App Component

Responsible for:

* Application bootstrap
* Component integration
* Data initialization

### 📦 Main Module

Responsible for:

* Dependency registration
* Component declarations
* Application configuration

---

## ✨ Features

* ⚡ Virtual scrolling implementation
* 📜 Efficient large list rendering
* 🚀 DOM performance optimization
* 🧠 Reduced memory consumption
* 🔄 Dynamic item rendering
* 📦 Scroll-based rendering strategy
* 🎯 Improved application performance
* 🖥️ Smooth scrolling experience
* ⚙️ Angular component architecture
* 🎯 Strong typing with TypeScript

---

## 🛠 Technologies Used

| Technology                 | Purpose                  |
| -------------------------- | ------------------------ |
| Angular 12                 | Framework                |
| TypeScript                 | Application Logic        |
| Angular CDK Virtual Scroll | Performance Optimization |
| HTML5                      | Structure                |
| CSS3                       | Styling                  |

---

## 📁 Project Structure

```text
angular-virtual-scroll/

├── src/
│
├── app/
│   ├── virtual-scroll/
│   │   ├── virtual-scroll.component.ts
│   │   ├── virtual-scroll.component.html
│   │   └── virtual-scroll.component.css
│   │
│   ├── app.component.ts
│   └── app.module.ts
│
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔥 Best Practices Implemented

* Performance-first rendering
* Virtual scrolling pattern
* DOM optimization
* Separation of concerns
* Reusable component architecture
* Strong typing with TypeScript
* Efficient memory usage
* Angular component organization
* Scalable UI rendering
* Maintainable project structure

---

## 🎯 Project Goal

Practice and strengthen Angular performance optimization concepts through the implementation of virtual scrolling techniques:

* Virtual Scroll
* Performance Optimization
* Large Data Rendering
* DOM Management
* Memory Efficiency
* Angular Components
* TypeScript
* UI Performance
* Scalable Front-End Architecture
* User Experience Optimization

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
