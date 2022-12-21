# API Documentation

```js
import { chainReplace, PACKAGE_INFO } from '@karmaniverous/chain-replace`;
```

## Constants

<dl>
<dt><a href="#PACKAGE_INFO">PACKAGE_INFO</a> : <code><a href="#PackageInfo">PackageInfo</a></code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#chainReplace">chainReplace(input, [replacements])</a> ⇒ <code>string</code></dt>
<dd><p>Apply a chain of replacements to a string.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PackageInfo">PackageInfo</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="PACKAGE_INFO"></a>

## PACKAGE\_INFO : [<code>PackageInfo</code>](#PackageInfo)
**Kind**: global constant  
<a name="chainReplace"></a>

## chainReplace(input, [replacements]) ⇒ <code>string</code>
Apply a chain of replacements to a string.

**Kind**: global function  
**Returns**: <code>string</code> - String result of chained replacements.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | Input string. |
| [replacements] | <code>Array.&lt;Array.&lt;(string\|Object), string&gt;&gt;</code> | Replacements array of [pattern: string\|RegExp, replacement: string]. |

<a name="PackageInfo"></a>

## PackageInfo : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | package version |

