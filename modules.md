***Type 1***
<details>

This is the exporting module (mod1.mjs):

```javascript
const a = "Suhana";
export default a
```

This is the importing module (mod2.mjs):

```javascript
import x from ./mod1.mjs;
console.log(x)
```

Output:
```
Suhana
```

</details>

***Type 2***
<details>

This is the exporting module (mod1.mjs):

```javascript
const a = "Suhana";
const b = "React";
export default { a, b }
```

This is the importing module (mod2.mjs):

```javascript
import x from ./mod1.mjs;
console.log(x.a, "is doing", x.b)
```

Output:
```
Suhana is doing React
```

</details>


***Type 3***
<details>

This is the exporting module (mod1.mjs):

```javascript
export const a = "Suhana";
export const b = "React";
export default a
```

This is the importing module (mod2.mjs):

```javascript
import x, { a, b } from ./mod1.mjs;
console.log(x, "is doing", b)
```

Output:
```
Suhana is doing React
```

</details>

