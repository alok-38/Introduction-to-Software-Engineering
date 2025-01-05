function HelloMessage({ name }) {
    return <div>Hello {name}</div>;
}

// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HelloMessage name="123" />);