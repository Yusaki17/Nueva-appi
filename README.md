Proyecto Angular: Consumo de API con HttpClient

Descripción
Esta aplicación Angular consume una API REST pública y muestra información en una tabla.  
Se utiliza **HttpClient** para obtener datos desde el servicio y se implementa un componente para listarlos, filtrarlos y gestionarlos.

API utilizada
URL:https://jsonplaceholder.typicode.com/users  
Estructura JSON:
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona"
  }
}
