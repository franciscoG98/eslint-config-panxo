# eslint-config-panxo

Opinionated ESLint flat config for TypeScript projects.

## Installation
```
pnpm add -D eslint typescript typescript-eslint eslint-config-prettier eslint-config-panxo
```

## Usage (eslint.config.js)

```
import panxo from "eslint-config-panxo";

export default panxo;
```

### ✅ Correcto

```
const user = {
  name: "Juan",
  age: 20,
};

function greet() {
  const message = "Hola";
  return message;
}
```

### ❌ Incorrecto (marcará error)

```
var user = {name:"Juan"}
console.log(user)

if (1 == "1") {
  let x = 5;
}
```

Errores:

- var
- sin espacios en objeto
- sin punto y coma
- ==
- console.log
- falta trailing comma si es multiline
