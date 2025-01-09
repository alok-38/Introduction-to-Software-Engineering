function App() {
    return (
        <div>
            <h1>Welcome to the Employee Portal</h1>
            <Format />
        </div>
    );
}

function EmployeeData({ employee_id, name, dept_id }) {
    return (
        <div>
            <h2>Employee Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employee ID</th>
                        <th>Department ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{employee_id}</td>
                        <td>{dept_id}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function Format() {
    const employee_id = 111;
    return (
        <div>
            <EmployeeData name="Alok" employee_id={employee_id} dept_id={567} />
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
