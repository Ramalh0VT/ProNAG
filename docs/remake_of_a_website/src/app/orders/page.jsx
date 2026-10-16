"use client"
import {useState} from "react"
import "./styles.css"

export default function Orders(){
	const [ordens, setOrders] = useState([]);

	const [client, setClient] = useState("");
	const [equipment, setEquipment] = useState("");
	const [desc, setDesc] = useState("");

	const [error, setError] = useState("");

	function submitOrder(event){
		event.preventDefault();

		if(client.trim() === "" || equipment.trim() === "" || desc.trim() === ""){
			setError("Fill in all fields!");
			return;
		}

		if (desc.trim().length > 100 || desc.trim().length < 15){
			setError("The description length should be in a range of 15 to 100 characters!");
			return;
		}

		const newOrder = {
			id: Date.now(),
			client: client.trim(),
			equipment: equipment.trim(),
			desc: desc.trim(),
			status: "open"
		}

		setOrders([...ordens, newOrder])
		setClient("")
		setEquipment("")
		setDesc("")
		setError("")
	}

	function closeOrder(id){
		setOrders(ordens.map(order =>
			order.id === id ? { ...order, status: "closed" } : order
		))
	}

	return(
		<main className="container">
			<h1>Service orders</h1>
			<form onSubmit={submitOrder} className="order-form">
				<div>
					<label htmlFor="client">Client</label>
					<input type="text" name="client" id="client" value={client} placeholder="Client's name" onChange={(event) => setClient(event.target.value)}/>

					<label htmlFor="equipment">Equipment</label>
					<input type="text" name="equipment" id="equipment" value={equipment} placeholder="E.g. laptop" onChange={(event) => setEquipment(event.target.value)}/>

					<label htmlFor="desc">Description</label>
					<input type="text" name="desc" id="desc" value={desc} placeholder="Description (15-100 characters)" onChange={(event) => setDesc(event.target.value)}/>

					<button type="submit">Submit</button>
				</div>
			</form>

			{error && <p className="error-msg">{error}</p>}

			<table className="orders-table">
				<thead>
					<tr>
						<th>Client name</th>
						<th>Equipment</th>
						<th>Description</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{ordens.length === 0 ? (
						<tr>
							<td colSpan="5" className="empty-row">No orders yet</td>
						</tr>
					) : (
						ordens.map(order => (
							<tr key={order.id}>
								<td>{order.client}</td>
								<td>{order.equipment}</td>
								<td>{order.desc}</td>
								<td>
									<span className={order.status === "open" ? "status-open" : "status-closed"}>
										{order.status === "open" ? "Open" : "Closed"}
									</span>
								</td>
								<td>
									{order.status === "open" ? (
										<button className="close-btn" onClick={() => closeOrder(order.id)}>
											Close order
										</button>
									) : (
										<span>—</span>
									)}
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</main>
	)
}
