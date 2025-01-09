import employees from './data';

function MyApp() {
    return <Employees />;
}

function Employees() {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Hire Date</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Address</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.hireDate}</td>
                        <td>{employee.position}</td>
                        <td>{employee.department}</td>
                        <td>{employee.salary}</td>
                        <td>
                            {employee.address.street}, {employee.address.city}, {employee.address.state}, {employee.address.zipCode}
                        </td>
                        <td>{employee.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
