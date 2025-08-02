function BookDetails() {
  const books = [
    { id: 1, bname: "Master React", price: 670 },
    { id: 2, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 3, bname: "Mongo Essentials", price: 450 },
  ];

  return (
    <div className="section">
      <h2>Book Details</h2>
      {books.map((book) => (
        <div key={book.id}>
          <strong>{book.bname}</strong>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
