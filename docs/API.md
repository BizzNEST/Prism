## Constants

<dl>
<dt><a href="#loadData">loadData</a> ⇒ <code>JSON</code></dt>
<dd><ul>
<li>finds a local Json file if not found it fetches and caches the file from a url endpoint.</li>
</ul>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#fetchData">fetchData(url)</a> ⇒ <code>JSON</code></dt>
<dd><p>fetches data from a url endpoint and returns a json object</p>
</dd>
<dt><a href="#doesFileExist">doesFileExist(filepath, filename)</a> ⇒ <code>boolean</code></dt>
<dd><ul>
<li>checks if a given file is present in a directory</li>
</ul>
</dd>
<dt><a href="#storeFile">storeFile(config)</a></dt>
<dd><ul>
<li>stores a file via object config</li>
</ul>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#loadDateConfig">loadDateConfig</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#storeFileConfig">storeFileConfig</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#JobListing">JobListing</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#JobListingsResponse">JobListingsResponse</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="loadData"></a>

## loadData ⇒ <code>JSON</code>
- finds a local Json file if not found it fetches and caches the file from a url endpoint.

**Kind**: global constant  

| Param | Type |
| --- | --- |
| config | [<code>loadDateConfig</code>](#loadDateConfig) | 


* [loadData](#loadData) ⇒ <code>JSON</code>
    * [~result](#loadData..result) : <code>JSON</code>
    * [~jsonFile](#loadData..jsonFile) : <code>string</code>
    * [~url](#loadData..url) : <code>string</code>
    * [~fileExist](#loadData..fileExist) : <code>boolean</code>
    * [~file](#loadData..file) : <code>JSON</code>

<a name="loadData..result"></a>

### loadData~result : <code>JSON</code>
**Kind**: inner property of [<code>loadData</code>](#loadData)  
<a name="loadData..jsonFile"></a>

### loadData~jsonFile : <code>string</code>
**Kind**: inner property of [<code>loadData</code>](#loadData)  
<a name="loadData..url"></a>

### loadData~url : <code>string</code>
**Kind**: inner constant of [<code>loadData</code>](#loadData)  
<a name="loadData..fileExist"></a>

### loadData~fileExist : <code>boolean</code>
**Kind**: inner constant of [<code>loadData</code>](#loadData)  
<a name="loadData..file"></a>

### loadData~file : <code>JSON</code>
**Kind**: inner constant of [<code>loadData</code>](#loadData)  
<a name="fetchData"></a>

## fetchData(url) ⇒ <code>JSON</code>
fetches data from a url endpoint and returns a json object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | A url endpoint |

<a name="fetchData..data"></a>

### fetchData~data : <code>JSON</code>
**Kind**: inner constant of [<code>fetchData</code>](#fetchData)  
<a name="doesFileExist"></a>

## doesFileExist(filepath, filename) ⇒ <code>boolean</code>
- checks if a given file is present in a directory

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| filepath | <code>string</code> | a relative or absoulte file path to directory |
| filename | <code>string</code> | the name of file |

<a name="storeFile"></a>

## storeFile(config)
- stores a file via object config

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>storeFileConfig</code>](#storeFileConfig) | the file path to store file |

<a name="loadDateConfig"></a>

## loadDateConfig : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| fileDir | <code>string</code> | 
| fileName | <code>string</code> | 
| fallBackUrl | <code>string</code> | 

<a name="storeFileConfig"></a>

## storeFileConfig : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| filePath | <code>string</code> | 
| content | <code>string</code> | 

<a name="JobListing"></a>

## JobListing : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique identifier for the listing. |
| display | <code>string</code> | Display value for the listing (typically a title or label). |
| title | <code>string</code> | Title of the job position. |
| company | <code>string</code> | Company offering the job. |
| location | <code>string</code> | Job location. |
| pay | <code>string</code> | Compensation information (may be unavailable). |
| description | <code>string</code> | JSON-encoded string containing arrays of job responsibilities, qualifications, and skills. |
| typeOfWork | <code>string</code> | Nature of the job (e.g., "Full-time", "Internship"). |
| timeCommitment | <code>string</code> | Time commitment expected for the job (may be missing). |
| link | <code>string</code> | URL to the job listing. |
| scraped_by | <code>string</code> | Description or tag for the scraping operation. |
| scraped_at | <code>string</code> | ISO timestamp when the data was scraped. |
| jobCategory | <code>string</code> | Category of the job (may be "Uncategorized"). |

<a name="JobListingsResponse"></a>

## JobListingsResponse : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| listings | [<code>Array.&lt;JobListing&gt;</code>](#JobListing) | An array of job listings. |

