## Functions

<dl>
<dt><a href="#countWordOccurrences">countWordOccurrences(text, word)</a> ⇒ <code>number</code></dt>
<dd><ul>
<li>Searches for matches of a keyword in a string</li>
</ul>
</dd>
<dt><a href="#getDataPlot">getDataPlot(initData, techTerms)</a> ⇒ <code><a href="#DataPlot">DataPlot</a></code></dt>
<dd><ul>
<li>generates a data plot object from joblisting data object</li>
</ul>
</dd>
<dt><a href="#refineQualityMetrics">refineQualityMetrics(data, minFrequency, excludeList)</a> ⇒ <code><a href="#DataPlot">DataPlot</a></code></dt>
<dd></dd>
<dt><a href="#sniff">sniff(data, keywords)</a> ⇒ <code><a href="#DataPlot">DataPlot</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TermData">TermData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#DataPlot">DataPlot</a> : <code>Object.&lt;string, TermData&gt;</code></dt>
<dd><p>An object mapping each term (string) to its data.</p>
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
