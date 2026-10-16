import "./card.css"
export default function news({title,desc,category}){
	return (
		<>
			<div className="wrapper">
				<h2>{title}</h2>
				<p>{desc}</p>
				<p>{category}</p>
			</div>
		</>
	);
}
