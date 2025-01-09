const Image = () => <h2>Image placeholder</h2>;

const Title = () => <h2>Book title</h2>;

const Author = () => <h4>Author</h4>;

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
};

const BookList = () => {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<BookList />);