function Mother() {
    return (
        <div>
            <h1>This is a parent component</h1>
            <p>Here is the child one <Child /></p>
            <p>Passing props to my child</p>
            <Child name="Alok" age={40} height={"170cm"} />
        </div>
    );
}

function Child(props) {
    return (
        <div>
            <p>Hi! My name is {props.name} and I recently turned {props.age}.</p>
            <h2>Passing Props to Destructuring</h2>
            {/* Pass props to the Destructuring component */}
            <Destructuring name={props.name} age={props.age} height={props.height} />
        </div>
    );
}

function Destructuring({ name, age, height }) {
    return (
        <div>
            <h2>Destructured Son!!</h2>
            <table>
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Age</th>
                        <th>Height</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{height}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Mother />);
