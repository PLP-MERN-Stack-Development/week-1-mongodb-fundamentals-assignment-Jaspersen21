// Task: Find all books
db.books.find();

// Task: Find all books published after 1950
db.books.find({ published_year: { $gt: 1950 } });

// Task: Find all books in the "Fantasy" genre
db.books.find({ genre: "Fantasy" });

// Task: Find all books that are currently in stock
db.books.find({ in_stock: true });

// Task: Update the price of "Brave New World" to 12.99
db.books.updateOne(
  { title: "Brave New World" },
  { $set: { price: 12.99 } }
);

// Task: Delete the book titled "Moby Dick"
db.books.deleteOne({ title: "Moby Dick" });

// Task: Show only title and author of each book
db.books.find({}, { title: 1, author: 1, _id: 0 });

// Task: Sort books by publication year ascending
db.books.find().sort({ published_year: 1 });

// Task: Count how many books are in each genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      count: { $sum: 1 }
    }
  }
]);

// Task: Create an index on the "author" field
db.books.createIndex({ author: 1 });

// Task: Explain query performance for finding books by George Orwell
db.books.find({ author: "George Orwell" }).explain("executionStats");