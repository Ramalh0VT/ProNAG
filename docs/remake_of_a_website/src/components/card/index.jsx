import "./card.css"
export default function card({name,desc,img,price}){
	return(
		<>
			<div className="wrapper">
				<h2>{name}</h2>
				<img src="images/dish_washing.jpeg" alt="imagem"/>
				<p>{desc}</p>
				<p>Price: {price} USD<b></b></p>
			</div>

		</>
	);
}
