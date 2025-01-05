function Header() {
    return <h1>Welcome to my Cool App!</h1>
}

function Content() {
    return <p>This app is built with React!</p>
}

function App() {
    return (
        <div>
                <Header />
            <h4>Very cool</h4>
            <Content />
        </div>
    )
}

// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);