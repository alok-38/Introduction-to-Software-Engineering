const Image = ({ src, alt }) => (
    <div>
        <img src={src} alt={alt} style={imageStyle} />
    </div>
);

const Title = ({ title }) => <h2>{title}</h2>;

const Author = ({ author }) => (
    <h4 style={authorStyle}>
        {author}
    </h4>
);

const Book = ({ book }) => {
    const { imageSrc, imageAlt, title, author } = book;
    return (
        <article>
            <Image src={imageSrc} alt={imageAlt} />
            <Title title={title} />
            <Author author={author} />
        </article>
    );
};

const BookList = () => {
    const books = [
        {
            imageSrc: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
            imageAlt: "Interesting Facts For Curious Minds",
            title: "Interesting Facts For Curious Minds",
            author: "Jordan Moore"
        },
        {
            imageSrc: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
            imageAlt: "Another Book",
            title: "Another Book",
            author: "John Doe"
        },
        // Add more books as needed
    ];

    return (
        <section>
            {books.map((book, index) => (
                <Book key={index} book={book} />
            ))}
        </section>
    );
};

const authorStyle = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem'
};

const imageStyle = {
    width: "350px",
    objectFit: "cover"
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<BookList />);
