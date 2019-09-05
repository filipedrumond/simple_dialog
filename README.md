# SIMPLE DIALOGS BOOTSTRAP BOXES

Atalho simples para criação e uso de modais e confirm do bootstrap

Alert Básico:

```js
import { SimpleAlerts } from "@filipedp/fd_modais";
SimpleAlerts.success({
    title: "Alert charmoso porem simples",
    text: "texto de um modal simples, fácil não ?",
    });
```
## Retorno
### É retornado um objeto jQuery com o modal instanciado


Confirm Básico:

```js
import { SimpleConfirms } from "@filipedp/fd_modais";
SimpleConfirms.success({
    title: "Confirm Simples de Escolha",
    text: "texto de um confirm simples, fácil não ?",
    });
```
## Retorno
### É retornado um objeto jQuery com o modal instanciado

---

## Instalação
Via [npm](http://npmjs.org):
```shell
npm install simple_dialog --save
```
## Opções e configurações
### Alerts
```js
let options = {
    title: "Alert charmoso porem simples", // Título do modal (string)
    text: "texto de um modal simples, fácil não ?", // Texto do modal (string)
    time: 5000, // Tempo que o modal permanece aberto em MS
    img: $('<img src="icone.svg" class="modal-img">'), //  Objeto jquery de imagem com um src IMPORTANTE A CLASSE CSS
    closeText: "Fechar", //  Texto do botão fechar
    closeCallback: function () { return } // Função executada após o fechamento do modal
}
import { SimpleAlerts } from "@filipedp/fd_modais";
SimpleAlerts.success(options);
```
--
### Confirm
```js
let options = {
    title: "Confirm Simples de Escolha", // Título do modal (string)
    text: "texto de um confirm simples, fácil não ?", // Texto do modal (string)
    img: $('<img src="icone.svg" class="modal-img">'), //  Objeto jquery de imagem com um src IMPORTANTE A CLASSE CSS
    confirmText: "Sim", // Texto do botão de escolha positiva
    negateText: "Não",  // Texto do botão de escolha negativa
    successText: "Sucesso", // Texto do modal pós sucesso de execução
    confirmCallback: function () { return }, // Função executada após a confirmção
    negateCallback: function () { return }  // Função executada após a negação
}
import { SimpleConfirms } from "@filipedp/fd_modais";
SimpleConfirms.success(options);
```
## TIP
Se não forem passadas parametros serão subtituídos por padrão:
### Alerts
```js
optionsDefault: {
    text: "",
    title: "",
    time: 5000,
    img: false,
    closeText: "Fechar",
    closeCallback: function () { return }
},
```
### Confirms
```js
optionsDefault: {
    text: "",
    title: "",
    img: "",
    confirmText: "Sim",
    negateText: "Não",
    successText: "Sucesso",
    confirmCallback: function () { return },
    negateCallback: function () { return }
},
```

## CORES E ESTILOS
### Alerts
```js
let options = {
    title: "Confirm Simples de Escolha",
    text: "texto de um confirm simples, fácil não ?",
}
import { SimpleAlerts } from "@filipedp/fd_modais";
SimpleAlerts.success(options);
SimpleAlerts.info(options);
SimpleAlerts.warning(options);
SimpleAlerts.error(options);
```

### Confirms
```js
let options = {
    title: "Confirm Simples de Escolha",
    text: "texto de um confirm simples, fácil não ?",
}
import { SimpleConfirms } from "@filipedp/fd_modais";
SimpleConfirms.success(options);
SimpleConfirms.info(options);
SimpleConfirms.warning(options);
SimpleConfirms.error(options);
```


## Contributors

- Felipe Araujo

---

## License & copyright
© Filipe Drumond, 2019 - 2020