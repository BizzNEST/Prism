# BizzNEST Prism

**Empowering interns with data-driven career insights.**
Prism is a lightweight data engine at the heart of the **Career Harvest** application — designed to efficiently collect, process, and serve career-focused data.

<img src="./docs/images/prism.png" alt="Project Image" width="200" style="border-radius:200px"/>

---

## 📚 Table of Contents

* [About Prism](#about-prism)
* [How Interns Benefit](#how-interns-benefit)
* [Installation](#installation)
* [Usage Example](#usage-example)

---

## 📌 About Prism

Prism simplifies how career data is handled by aggregating, caching, and processing job market information in real time. It acts as a backend data engine powering insights for interns using the **Career Harvest** platform.

---

## 🌱 How Interns Benefit

### 💡 Data-Driven Insights

Interns can now make smarter career decisions with real-time access to:

* Job market demand trends
* Market sentiment analysis
* Key technical and soft skill patterns
* Career opportunity clustering

Prism turns raw data into actionable intelligence.

---

## ⚙️ Installation

Follow these steps to set up the development environment:

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate to the project directory**

   ```sh
   cd your-repo
   ```

3. **Install dependencies**

   ```sh
   npm install
   ```

4. **Create API cache directory**

   ```sh
   mkdir -p ./src/data/api
   ```

5. **Start the development server**

   ```sh
   npm start
   ```

---

## 🚀 Usage Example

Below is an example of how to load and analyze job data using Prism:

```js
// Import Cache Loader
import { loadData } from "./dataManager/dataLoader.js";

// Import Keyword Sniffer
import { sniff } from "./jobListings/dataFunctions/keysniffer.js";

// Load job data from cache or fallback URL
const initData = await loadData({
    fileDir: "./data/api/",
    fileName: "cachedData.json", 
    fallBackUrl: "https://api.careerharvest.org/api/jobs"
});

// Load technical terms list
const techTerms = await loadData({
    fileDir: "./data/", 
    fileName: "techTerms.json", 
    fallBackUrl: ""
});

// Load soft skills list
const skills = await loadData({
    fileDir: "./data/", 
    fileName: "skills.json", 
    fallBackUrl: ""
});

// Analyze job listings for technical terms
const techTermsAnalytics = await sniff(initData, techTerms, {
    threshold: 0,
    excludeList: []
});

// Analyze job listings for soft skills
const softSkillsAnalytics = await sniff(initData, skills, {
    threshold: 0,
    excludeList: []
});

console.log({ techTermsAnalytics, softSkillsAnalytics });
```

---
