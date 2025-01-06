function Header({ title = "Develop. Preview. Ship!" }) {
    return (
        <h1>{title ? title : "Default title"}</h1>
    )
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    function handleClick() {
        console.log("Increment like count")
    }
    return (
        <div>
            <Header />
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <button onClick={ handleClick }>Like</button>
        </div>
    )
}

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

root.render(<HomePage />);