Онлайн Книжарница - MongoDB проект

1.Общо описание

"Онлайн Книжарница" е MongoDB проект, който моделира система за електронна книжарница. Той съдържа информация за книги, автори, клиенти, поръчки и потребителски оценки. Системата позволява добавяне, извличане, актуализиране и изтриване на документи, както и извършване на агрегиращи заявки.

2.Структура на проекта

onlineBookstore
├── insert.js       # Всички insert заявки
├── queries.js      # Всички заявки за четене, обновяване, изтриване и агрегиране
└── README.md       # Документация на проекта

3.Колекции и структура

1. books (Книги)

title: Име на книгата (string)

genre: Жанр (string)

price: Цена (number)

stock: Налично количество (number)

author: Автор (string)

tags: Масив от етикети (array)

details: Обект с допълнителна информация (pages, language)

2. authors (Автори)

name: Име (string)

birthYear: Година на раждане (number)

nationality: Националност (string)

genres: Жанрове (array)

awards: Награди (array)

3. customers (Клиенти)

name: Име (string)

email: Имейл (string)

city: Град (string)

interests: Интереси (array)

vip: Статус (boolean)

4. orders (Поръчки)

customerEmail: Имейл на клиента (string)

items: Масив от книги и количества (array от обекти)

total: Обща сума (number)

date: Дата на поръчката (Date)

5. reviews (Ревюта)

bookTitle: Заглавие на книгата (string)

reviewer: Имейл на клиента (string)

rating: Оценка (number)

comment: Коментар (string)

4.Инсталация и стартиране

Клонирайте хранилището:

git clone https://github.com/PetyaHristo/mongodb-bookstore
cd onlineBookstore

Стартирайте MongoDB, ако още не е стартиран:

mongod

Изпълнете insert.js за добавяне на начални данни:

mongosh < insert.js

Изпълнете queries.js за заявки към базата данни:

mongosh < queries.js

Проектът е подходящ за обучение, демонстриране на CRUD операции и работа с MongoDB.
