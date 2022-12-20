# API Documentation

```js
import { chainReplace } from '@karmaniverous/chain-replace`;
```

<a name="chainReplace"></a>

## chainReplace(input, [replacements]) ⇒ <code>string</code>
Apply a chain of replacements to a string.

**Kind**: global function  
**Returns**: <code>string</code> - String result of chained replacements.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | Input string. |
| [replacements] | <code>Array.&lt;Array.&lt;(string\|Object), string&gt;&gt;</code> | Replacements array of [pattern: string|RegExp, replacement: string]. |
