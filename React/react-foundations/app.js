function Header({ title = "Develop. Preview. Ship!" }) {
    return (
        <h1>{title ? title : "Default title"}</h1>
    )
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    return (
        <div>
            <Header />
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

root.render(<HomePage />);