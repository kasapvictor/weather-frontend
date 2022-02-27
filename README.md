# Task
Создать сайт, выводящий погоду в определенных (на Ваш выбор) городах.
1 страница, стилизация вольная, мобилка не нужна. Использовать https://openweathermap.org/current API.

### Что сайт должен содержать:
1. Таблицу, в которой выводится названия городов и информация по погоде в них
2. Строку поиска, с помошью которой можно добавить город в таблицу (естественно, в таблице должем быть крестик для 
   удаления города из таблицы
3. Сохранение отображаемых городов и погоды в них в SessionStorage и обновление информации лишь по кнопке “обновить 
   информацию”, но не реже одного раза в 5 минут*

----- 

# Стартовый набор 
для разработки front-end проектов

    - parcle2
    - post html
    - parcel-namer
    - sharp image
    - autoprefixer
    - babel
    - eslitn
    - prettier
    - jest
    - axios
    - list.js
    - on-change
    - dotenv

---
## Start 

```bash 
# 1. установка

make install
```

```bash 
# 2. запуск веб сервера
# [i] скрипт дополнительно запускает удаление прошлого кэша

make server
```

```bash  
# 3. сборка файлов /dist

make build
```

---

## Parcel 
Manual ParcelJS - https://parceljs.org/getting-started/webapp

### Package.json
>По умолчанию Parcel не выполняет транспиляцию кода. Это означает, что если вы напишете свой код с использованием современных языковых функций, Parcel будет выводить именно это. 
> 
>Вы можете указать браузеры, поддерживаемые вашим приложением, используя `browserslist` поле. Когда это поле объявлено, Parcel соответствующим образом перенесет ваш код, чтобы обеспечить совместимость с вашими поддерживаемыми браузерами.
```json
{
  "browserslist": "> 0.5%, last 2 versions, not dead"
}
```

----

### Sources 

> list.js
> 
> 
> https://listjs.com/overview/download/

> on-change
> 
> https://github.com/sindresorhus/on-change

> dotenv
> 
> https://github.com/motdotla/dotenv
