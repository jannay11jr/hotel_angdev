# Hotel Angdev

Este proyecto representa una página web de un hotel desarrollada en Angular y Laravel, diseñada para gestionar las reservas, visibilidad y contacto entre hotel y cliente.

## Descripción del Proyecto

La página web permite realizar diversas operaciones relacionadas con el hotel. Estas operaciones incluyen el registro de usuarios para poder reservar la habitación, la reserva de habitaciones disponibles y el formulario de contacto entre hotel y cliente.

## Menú y funcionamiento de la aplicación

En el programa se mostrará un menú inicial con las distintas opciones que podremos ejecutar y probar:

1. "Home": Permite ver la página principal del hotel.
2. "Habitaciones": Mostrará el listado, descripción y precio de habitaciones junto con sus fotos (todo esto lo hará leyendo un archivo JSON).
3. "Contacto": Formulario de contacto pueda ponerse en contacto con el hotel.
4. "Reservar": El cliente escogerá fecha y habitación y al darle a reservar se abrirá WhatsApp donde mandará un mensaje personalizado con la fecha y el tipo de habitación que ha escogido preguntando al hotel si hay disponibilidad.
5. "Login": Tendremos un formulario para iniciar sesión y un apartado para registrarnos en caso de que no lo hayamos hecho.


La web incluye "guards" para que si al acceder al apartado del menú "Reserva" no hemos iniciado sesión antes no nos deje entrar y nos lleve al menú home.


A tener en cuenta:
- Para el envío del formulario, se debe de editar el archivo ".env" y tocar los siguiente:

"MAIL_USERNAME=tu_email@gmail.com
MAIL_PASSWORD=tupasssword_
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=tu_email@gmail.com"

- En el caso del WhatsApp para hacer llegar ese mensaje de WhatsApp a un número de teléfono determinado deberíamos de poner el del hotel en la variable whatsappPhoneNumber que se encuentra dentro de "book.component.ts"
