import { Table } from "reactstrap";

function Dashboard(data) {
	return (
		<div>
			<h2>Dashboard</h2>
			<Table>
				<thead>
					<tr>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.members.map((member, index) => (
						<tr key={index}>
							<td>{member.name}</td>
							<td>{member.email}</td>
							<td>{member.role}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default Dashboard;
