// insert.js
// Този файл съдържа всички insert заявки за базата данни "onlineBookstore"

// Създаване на базата данни
//use onlineBookstore;

// Добавяне на книги
// Вмъкваме 10 книги с различни жанрове, цени и допълнителна информация
//  Колекция 1: books
db.books.insertMany([
    { 
      title: "Под игото",
      genre: "Роман",
      price: 19.99,
      stock: 12,
      author: "Иван Вазов",
      tags: ["българска литература", "класика"],
      details: { pages: 500, language: "Български" }
    },
    {
      title: "Бай Ганьо",
      genre: "Сатира",
      price: 14.50,
      stock: 8,
      author: "Алеко Константинов",
      tags: ["хумор", "сатира"],
      details: { pages: 300, language: "Български" }
    },
    {
      title: "1984",
      genre: "Dystopian",
      price: 15.00,
      stock: 20,
      author: "George Orwell",
      tags: ["политика", "антиутопия"],
      details: { pages: 328, language: "English" }
    },
    { title: "Книга 4", genre: "Фентъзи", price: 18.99, stock: 6, author: "Автор 4", tags: ["магия"], details: { pages: 400, language: "Български" } },
    { title: "Книга 5", genre: "Фентъзи", price: 22.50, stock: 10, author: "Автор 5", tags: ["приключения"], details: { pages: 450, language: "Български" } },
    { title: "Книга 6", genre: "Роман", price: 12.00, stock: 5, author: "Автор 6", tags: ["любов"], details: { pages: 320, language: "Български" } },
    { title: "Книга 7", genre: "История", price: 21.30, stock: 9, author: "Автор 7", tags: ["история"], details: { pages: 290, language: "Български" } },
    { title: "Книга 8", genre: "Научна фантастика", price: 16.00, stock: 7, author: "Автор 8", tags: ["бъдеще"], details: { pages: 330, language: "Български" } },
    { title: "Книга 9", genre: "Сатира", price: 10.00, stock: 4, author: "Автор 9", tags: ["хумор"], details: { pages: 280, language: "Български" } },
    { title: "Книга 10", genre: "Поезия", price: 9.99, stock: 15, author: "Автор 10", tags: ["лирика"], details: { pages: 150, language: "Български" } }
  ]);
  

// Добавяне на автори
// Вмъкваме 10 автора с информация за националност, жанрове и награди
  // Колекция 2: authors
  db.authors.insertMany([
    { name: "Иван Вазов", birthYear: 1850, nationality: "Българин", genres: ["Роман"], awards: ["Национален герой"] },
    { name: "Алеко Константинов", birthYear: 1863, nationality: "Българин", genres: ["Сатира"], awards: [] },
    { name: "George Orwell", birthYear: 1903, nationality: "British", genres: ["Dystopian"], awards: ["Prometheus Hall of Fame"] },
    { name: "Автор 4", birthYear: 1970, nationality: "Българин", genres: ["Фентъзи"], awards: [] },
    { name: "Автор 5", birthYear: 1965, nationality: "Българин", genres: ["Фентъзи"], awards: [] },
    { name: "Автор 6", birthYear: 1980, nationality: "Българин", genres: ["Роман"], awards: [] },
    { name: "Автор 7", birthYear: 1955, nationality: "Българин", genres: ["История"], awards: [] },
    { name: "Автор 8", birthYear: 1990, nationality: "Българин", genres: ["Научна фантастика"], awards: [] },
    { name: "Автор 9", birthYear: 1975, nationality: "Българин", genres: ["Сатира"], awards: [] },
    { name: "Автор 10", birthYear: 1960, nationality: "Българин", genres: ["Поезия"], awards: [] }
  ]);
  
  // Добавяне на клиенти
// Вмъкваме 10 клиента с интереси и статус VIP
  //  Колекция 3: customers
  db.customers.insertMany([
    { name: "Иван Петров", email: "ivan@example.com", city: "София", interests: ["романи", "история"], vip: true },
    { name: "Мария Георгиева", email: "maria@example.com", city: "Пловдив", interests: ["поезия"], vip: false },
    { name: "Петър Димитров", email: "petar@example.com", city: "Варна", interests: ["фентъзи"], vip: true },
    { name: "Галя Иванова", email: "galya@example.com", city: "Русе", interests: ["сатира"], vip: false },
    { name: "Никола Стоянов", email: "nikola@example.com", city: "Бургас", interests: ["романи", "драма"], vip: false },
    { name: "Росица Михайлова", email: "rosica@example.com", city: "Плевен", interests: ["фантастика"], vip: true },
    { name: "Таня Николова", email: "tanya@example.com", city: "Стара Загора", interests: ["класика"], vip: false },
    { name: "Георги Пенчев", email: "georgi@example.com", city: "Видин", interests: ["романтика"], vip: true },
    { name: "Даниела Йорданова", email: "dani@example.com", city: "Перник", interests: ["история"], vip: false },
    { name: "Симеон Попов", email: "simeon@example.com", city: "Шумен", interests: ["антиутопия"], vip: true }
  ]);

  //  Добавяне на поръчки
// Вмъкваме 10 поръчки с имейл, книги и обща стойност
  //  Колекция 4: orders
  db.orders.insertMany([
    { customerEmail: "ivan@example.com", items: [{ title: "Под игото", qty: 1 }], total: 19.99, date: new Date("2024-01-10") },
    { customerEmail: "maria@example.com", items: [{ title: "Книга 10", qty: 2 }], total: 19.98, date: new Date("2024-02-12") },
    { customerEmail: "petar@example.com", items: [{ title: "Книга 5", qty: 1 }], total: 22.50, date: new Date("2024-03-01") },
    { customerEmail: "galya@example.com", items: [{ title: "Бай Ганьо", qty: 1 }], total: 14.50, date: new Date("2024-03-15") },
    { customerEmail: "nikola@example.com", items: [{ title: "Книга 6", qty: 1 }], total: 12.00, date: new Date("2024-03-18") },
    { customerEmail: "rosica@example.com", items: [{ title: "Книга 8", qty: 2 }], total: 32.00, date: new Date("2024-03-21") },
    { customerEmail: "tanya@example.com", items: [{ title: "Под игото", qty: 1 }, { title: "Книга 9", qty: 1 }], total: 29.99, date: new Date("2024-04-05") },
    { customerEmail: "georgi@example.com", items: [{ title: "Книга 4", qty: 3 }], total: 56.97, date: new Date("2024-04-07") },
    { customerEmail: "dani@example.com", items: [{ title: "Книга 7", qty: 1 }], total: 21.30, date: new Date("2024-04-10") },
    { customerEmail: "simeon@example.com", items: [{ title: "1984", qty: 2 }], total: 30.00, date: new Date("2024-04-15") }
  ]);
  
//  Добавяне на ревюта
// Вмъкваме 10 ревюта от клиенти за книги
  // Колекция 5: reviews
  db.reviews.insertMany([
    { bookTitle: "Под игото", reviewer: "ivan@example.com", rating: 5, comment: "Класика!" },
    { bookTitle: "1984", reviewer: "simeon@example.com", rating: 4, comment: "Много добра книга." },
    { bookTitle: "Бай Ганьо", reviewer: "galya@example.com", rating: 3, comment: "Смешна, но трудна за четене." },
    { bookTitle: "Книга 10", reviewer: "maria@example.com", rating: 5, comment: "Поезията е красива." },
    { bookTitle: "Книга 5", reviewer: "petar@example.com", rating: 4, comment: "Много приятно фентъзи." },
    { bookTitle: "Книга 6", reviewer: "nikola@example.com", rating: 2, comment: "Очаквах повече." },
    { bookTitle: "Книга 7", reviewer: "dani@example.com", rating: 5, comment: "Много интересна история." },
    { bookTitle: "Книга 8", reviewer: "rosica@example.com", rating: 4, comment: "Научната фантастика ми хареса." },
    { bookTitle: "Книга 9", reviewer: "tanya@example.com", rating: 3, comment: "Става." },
    { bookTitle: "Книга 4", reviewer: "georgi@example.com", rating: 5, comment: "Чудесна книга!" }
  ]);
  

