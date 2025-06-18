## Functions

<dl>
<dt><a href="#countWordOccurrences">countWordOccurrences(text, word)</a> ⇒ <code>number</code></dt>
<dd><ul>
<li>Searches for matches of a keyword in a string</li>
</ul>
</dd>
<dt><a href="#getYearMonth">getYearMonth(timeStamp)</a> ⇒ <code>Temporal.PlainYearMonth</code></dt>
<dd></dd>
<dt><a href="#getDataPlot">getDataPlot(initData, techTerms)</a> ⇒ <code><a href="#DataPlot">DataPlot</a></code></dt>
<dd><ul>
<li>generates a data plot object from joblisting data object</li>
</ul>
</dd>
<dt><a href="#refineQualityMetrics">refineQualityMetrics(data, minFrequency, excludeList)</a> ⇒ <code><a href="#DataPlot">DataPlot</a></code></dt>
<dd></dd>
<dt><a href="#sniff">sniff(data, keywords)</a> ⇒ <code><a href="#DataPlot">DataPlot</a></code></dt>
<dd></dd>
<dt><a href="#sniffTimeSorted">sniffTimeSorted(data, keywords)</a> ⇒ <code><a href="#TimeSortedDataPlot">TimeSortedDataPlot</a></code></dt>
<dd></dd>
<dt><a href="#flattenTimeSorted">flattenTimeSorted(data)</a> ⇒ <code>Array.&lt;{year: string, month: string, term: string, occurrences: number, jobrefs: Array.&lt;(string|number)&gt;}&gt;</code></dt>
<dd></dd>
<dt><a href="#sortByTime">sortByTime(data, options)</a> ⇒ <code><a href="#TimeSortedJobListings">TimeSortedJobListings</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TermData">TermData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#DataPlot">DataPlot</a> : <code>Object.&lt;string, TermData&gt;</code></dt>
<dd><p>An object mapping each term (string) to its data.</p>
</dd>
<dt><a href="#MonthTermData">MonthTermData</a> : <code>Object.&lt;string, DataPlot&gt;</code></dt>
<dd></dd>
<dt><a href="#YearTermData">YearTermData</a> : <code>Object.&lt;string, MonthTermData&gt;</code></dt>
<dd></dd>
<dt><a href="#TimeSortedDataPlot">TimeSortedDataPlot</a> : <code>Object.&lt;string, YearTermData&gt;</code></dt>
<dd></dd>
<dt><a href="#sortByTimeConfig">sortByTimeConfig</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#MonthData">MonthData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#YearData">YearData</a> : <code>Object.&lt;string, MonthData&gt;</code></dt>
<dd><p>An object mapping month strings (e.g. &quot;2&quot;, &quot;5&quot;) to MonthData.</p>
</dd>
<dt><a href="#TimeSortedJobListings">TimeSortedJobListings</a> : <code>Object.&lt;string, YearData&gt;</code></dt>
<dd><p>An object mapping year strings (e.g. &quot;2025&quot;) to YearData.</p>
</dd>
</dl>

<a name="countWordOccurrences"></a>

## countWordOccurrences(text, word) ⇒ <code>number</code>
- Searches for matches of a keyword in a string

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| word | <code>string</code> | 

<a name="getYearMonth"></a>

## getYearMonth(timeStamp) ⇒ <code>Temporal.PlainYearMonth</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| timeStamp | <code>string</code> | 9557 String |

**Example**  
```js
getYearMonth("2025-02-05T00:23:07.424Z")
```
<a name="getDataPlot"></a>

## getDataPlot(initData, techTerms) ⇒ [<code>DataPlot</code>](#DataPlot)
- generates a data plot object from joblisting data object

**Kind**: global function  

| Param | Type |
| --- | --- |
| initData | <code>JobListingsResponse</code> | 
| techTerms | <code>Array.&lt;string&gt;</code> | 

<a name="getDataPlot..dataPlot"></a>

### getDataPlot~dataPlot : [<code>DataPlot</code>](#DataPlot)
**Kind**: inner property of [<code>getDataPlot</code>](#getDataPlot)  
<a name="refineQualityMetrics"></a>

## refineQualityMetrics(data, minFrequency, excludeList) ⇒ [<code>DataPlot</code>](#DataPlot)
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| data | [<code>DataPlot</code>](#DataPlot) |  | 
| minFrequency | <code>number</code> | <code>10</code> | 
| excludeList | <code>Array.&lt;string&gt;</code> |  | 

<a name="sniff"></a>

## sniff(data, keywords) ⇒ [<code>DataPlot</code>](#DataPlot)
**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>JobListingsResponse</code> | 
| keywords | <code>Array.&lt;string&gt;</code> | 

<a name="sniffTimeSorted"></a>

## sniffTimeSorted(data, keywords) ⇒ [<code>TimeSortedDataPlot</code>](#TimeSortedDataPlot)
**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>JobListingsResponse</code> | 
| keywords | <code>Array.&lt;string&gt;</code> | 


* [sniffTimeSorted(data, keywords)](#sniffTimeSorted) ⇒ [<code>TimeSortedDataPlot</code>](#TimeSortedDataPlot)
    * [~sortedData](#sniffTimeSorted..sortedData) : [<code>TimeSortedJobListings</code>](#TimeSortedJobListings)
    * [~sortedDataPlot](#sniffTimeSorted..sortedDataPlot) : [<code>TimeSortedDataPlot</code>](#TimeSortedDataPlot)

<a name="sniffTimeSorted..sortedData"></a>

### sniffTimeSorted~sortedData : [<code>TimeSortedJobListings</code>](#TimeSortedJobListings)
**Kind**: inner property of [<code>sniffTimeSorted</code>](#sniffTimeSorted)  
<a name="sniffTimeSorted..sortedDataPlot"></a>

### sniffTimeSorted~sortedDataPlot : [<code>TimeSortedDataPlot</code>](#TimeSortedDataPlot)
**Kind**: inner property of [<code>sniffTimeSorted</code>](#sniffTimeSorted)  
<a name="flattenTimeSorted"></a>

## flattenTimeSorted(data) ⇒ <code>Array.&lt;{year: string, month: string, term: string, occurrences: number, jobrefs: Array.&lt;(string\|number)&gt;}&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| data | [<code>TimeSortedDataPlot</code>](#TimeSortedDataPlot) | 

<a name="sortByTime"></a>

## sortByTime(data, options) ⇒ [<code>TimeSortedJobListings</code>](#TimeSortedJobListings)
**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>JSON.&lt;JobListingsResponse&gt;</code> | 
| options | [<code>sortByTimeConfig</code>](#sortByTimeConfig) | 

<a name="sortByTime..timeDataPlot"></a>

### sortByTime~timeDataPlot : [<code>TimeSortedJobListings</code>](#TimeSortedJobListings)
**Kind**: inner property of [<code>sortByTime</code>](#sortByTime)  
<a name="TermData"></a>

## TermData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| occurrences | <code>number</code> | Number of times the term has occurred. |
| jobrefs | <code>Array.&lt;(string\|number)&gt;</code> | List of job listing IDs referencing the term. |

<a name="DataPlot"></a>

## DataPlot : <code>Object.&lt;string, TermData&gt;</code>
An object mapping each term (string) to its data.

**Kind**: global typedef  
<a name="MonthTermData"></a>

## MonthTermData : <code>Object.&lt;string, DataPlot&gt;</code>
**Kind**: global typedef  
<a name="YearTermData"></a>

## YearTermData : <code>Object.&lt;string, MonthTermData&gt;</code>
**Kind**: global typedef  
<a name="TimeSortedDataPlot"></a>

## TimeSortedDataPlot : <code>Object.&lt;string, YearTermData&gt;</code>
**Kind**: global typedef  
<a name="sortByTimeConfig"></a>

## sortByTimeConfig : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| scale | <code>&quot;month&quot;</code> \| <code>&quot;year&quot;</code> | 

<a name="MonthData"></a>

## MonthData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| listings | <code>Array.&lt;JobListing&gt;</code> | Array of job listings for the month. |

<a name="YearData"></a>

## YearData : <code>Object.&lt;string, MonthData&gt;</code>
An object mapping month strings (e.g. "2", "5") to MonthData.

**Kind**: global typedef  
<a name="TimeSortedJobListings"></a>

## TimeSortedJobListings : <code>Object.&lt;string, YearData&gt;</code>
An object mapping year strings (e.g. "2025") to YearData.

**Kind**: global typedef  
