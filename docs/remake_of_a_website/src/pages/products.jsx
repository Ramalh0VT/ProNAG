import Pcard from "@/components/card"
import "../app/globals.css"
export default function products(){
const products = [
	{
		id:1,
		name:"Dish soap",
		desc:"Used to wash dishes and related things",
		img:"dish_washing.jpeg",
		price_usd: 2,
	},
	{
		id:2,
		name:"Powdered laundry detergent",
		desc:"Made for washing your clothes",
		img:"powdered.jpeg",
		price_usd: 5,
	},
	{
		id:3,
		name:"Soap",
		desc:"Common soap, used to wash your body parts",
		img:"soap.jpeg",
		price_usd: 1,
	}
];
	return(
		<>
			<h1>Page for products listing</h1>
			{products.map(product => {
				return <Pcard
				key = {product.id}
						titulo = {product.name}
				desc = {product.desc}
				img = {product.img}
				price = {product.price_usd}
					/>
			})}	
		</>

	)
}
