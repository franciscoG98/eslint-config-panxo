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
