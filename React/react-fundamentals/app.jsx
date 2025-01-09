const Greeting = () => <h2>My first component!</h2>;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Greeting />);
