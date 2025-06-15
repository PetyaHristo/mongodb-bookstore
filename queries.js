// queries.js
// Този файл съдържа всички заявки, различни от insert, включително четене, обновяване, изтриване и агрегиране


// Колекция 1: books
// Извличане на данни
// Всички книги:
db.books.find();

// Книги с жанр "Роман":
db.books.find({ genre: "Роман" });

// Книги с жанр "Роман" и автор "Иван Вазов":
db.books.find({ genre: "Роман", author: "Иван Вазов" });

// Актуализация
// Промяна на цената на "Под игото":
db.books.updateOne({ title: "Под игото" }, { $set: { price: 21.99 } });

// Изтриване
// Изтриване на книга със заглавие "Книга 9":
db.books.deleteOne({ title: "Книга 9" });

// Агрегиране
// Групиране по жанр и изчисляване на средна цена:
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Филтриране и сортиране по цена:
db.books.aggregate([
  { $match: { price: { $gte: 15 } } },
  { $sort: { price: -1 } }
]);



// Колекция 2: authors
//  Извличане на данни
// Всички автори:
db.authors.find();

// Автори с националност "Българин":
db.authors.find({ nationality: "Българин" });

// Автори, родени преди 1960 и пишещи "Роман":
db.authors.find({ birthYear: { $lt: 1960 }, genres: "Роман" });

// Актуализация
// Добавяне на награда на George Orwell:
db.authors.updateOne({ name: "George Orwell" }, { $push: { awards: "Нобелова номинация" } });

// Изтриване
// Изтриване на автор "Автор 9":
db.authors.deleteOne({ name: "Автор 9" });

// Агрегиране
// Групиране по националност и броене:
db.authors.aggregate([
  { $group: { _id: "$nationality", count: { $sum: 1 } } }
]);



// Колекция 3: customers
// Извличане на данни
// Всички клиенти:
db.customers.find();

// Клиенти от град "София":
db.customers.find({ city: "София" });

// VIP клиенти от "Варна":
db.customers.find({ vip: true, city: "Варна" });

// Актуализация
// Промяна на VIP статуса на "Мария Георгиева":
db.customers.updateOne({ email: "maria@example.com" }, { $set: { vip: true } });

// Изтриване
// Изтриване на клиент "Симеон Попов":
db.customers.deleteOne({ email: "simeon@example.com" });

// Агрегиране
// Групиране по град и броене на клиенти:
db.customers.aggregate([
  { $group: { _id: "$city", total: { $sum: 1 } } }
]);



// Колекция 4: orders
// Извличане на данни
// Всички поръчки:
db.orders.find();

// Поръчки на "ivan@example.com":
db.orders.find({ customerEmail: "ivan@example.com" });

// Поръчки над 20 лв след 01.03.2024:
db.orders.find({ total: { $gt: 20 }, date: { $gte: new Date("2024-03-01") } });

// Актуализация
// Промяна на дата на поръчка за "maria@example.com":
db.orders.updateOne({ customerEmail: "maria@example.com" }, { $set: { date: new Date("2024-02-14") } });

// Изтриване
// Изтриване на поръчка за "georgi@example.com":
db.orders.deleteOne({ customerEmail: "georgi@example.com" });

// Агрегиране
// Групиране по имейл и обща сума:
db.orders.aggregate([
  { $group: { _id: "$customerEmail", totalSpent: { $sum: "$total" } } }
]);



//  Колекция 5: reviews
// Извличане на данни
// Всички оценки:
db.reviews.find();

// Оценки за "Книга 10":
db.reviews.find({ bookTitle: "Книга 10" });

// Оценки с рейтинг >= 4 за книга "1984":
db.reviews.find({ bookTitle: "1984", rating: { $gte: 4 } });

//Актуализация
// Промяна на коментар за "Книга 6":
db.reviews.updateOne({ bookTitle: "Книга 6" }, { $set: { comment: "Все пак става." } });

//  Изтриване
// Изтриване на оценка за "Книга 9":
db.reviews.deleteOne({ bookTitle: "Книга 9" });

// Агрегиране
// Среден рейтинг по книга:
db.reviews.aggregate([
  { $group: { _id: "$bookTitle", avgRating: { $avg: "$rating" } } }
]);

// Сортиране на оценки по рейтинг:
db.reviews.aggregate([
  { $sort: { rating: -1 } }
]);
