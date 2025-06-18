# BizzNEST Prism

**Empowering interns with data-driven career insights.**
Prism is a lightweight data engine at the heart of the **Career Harvest** application — designed to efficiently collect, process, and serve career-focused data.

<img src="./docs/images/prism.png" alt="Project Image" width="200" style="border-radius:200px"/>

---

## 📚 Table of Contents

API DOCS : [API REFERENCE](./docs/API.md)

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
   mkdir -p ./data/api
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
Here’s a more **structured and clear example usage section** for your documentation, along with **brief explanations** of what `sniffTimeSorted` and `flattenTimeSorted` do and how they relate.

---

## 📘 Example Usage

```js
import { sniffTimeSorted, flattenTimeSorted } from "./src/jobListings/dataFunctions/keysniffer.js";

// Assume initData is a valid JobListingsResponse JSON
const keywords = ["React"];

const options = {
  threshold: 0,         // Minimum number of occurrences to include a term
  excludeList: []       // Terms to exclude from the results
};

const timeSortedData = await sniffTimeSorted(initData, keywords, options);

const flattened = flattenTimeSorted(timeSortedData);

console.log(flattened);
```

---

## 🧠 Function Breakdown

### 🔍 `sniffTimeSorted(data, keywords, options)`

* **Purpose**: Analyzes job listings over time (by year and month) for keyword mentions.

* **How it works**:

  1. **Groups** job listings by year and month (`sortByTime`).
  2. **Counts** keyword occurrences in job descriptions for each time slice (`sniff` + `getDataPlot`).
  3. **Returns** a nested object showing term metrics per month and year.

* **Output** (sample structure):

```js
{
  "2025": {
    "3": {
      "React": {
        occurrences: 12,
        jobrefs: [123, 124]
      }
    },
    ...
  },
  ...
}
```

---

### 🔄 `flattenTimeSorted(data)`

* **Purpose**: Converts the nested `TimeSortedDataPlot` structure into a flat array of entries for easier processing or visualization.
* **Input**: Output from `sniffTimeSorted`.
* **Output**:

```js
[
  {
    year: "2025",
    month: "3",
    term: "React",
    occurrences: 12,
    jobrefs: [123, 124]
  },
  ...
]
```

---

## 🔗 How They Work Together

`sniffTimeSorted` gives you a **structured time-series breakdown** of keyword usage in job listings.
`flattenTimeSorted` then **converts that structure into a flat array**, which is ideal for rendering in charts, tables, or exporting as data.

This pipeline is useful when you want to analyze and visualize **how often certain tech terms appear over time** in job descriptions.

---

Let me know if you'd like visual examples, sample `initData`, or integration tips!

---
