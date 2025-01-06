function Header(props) {
    console.log(props);
    return <h1>{props.title}</h1>;
}

function HomePage() {
    return (
        <div>
            <Header title="React" />
        </div>
    )
}

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

root.render(<HomePage />);
