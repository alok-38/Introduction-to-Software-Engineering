function Header() {
    return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
    return (
        <div>
            <Header />
        </div>
    )
}

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

root.render(<HomePage />);
