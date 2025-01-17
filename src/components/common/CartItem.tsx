type Product = {
    url: string;
    name: string;
    price: number;
};

const CartItem = ({product}: { product: Product }) => (
    <div className="flex justify-between items-center gap-4 my-4 bg-rose-50 p-4 rounded-2xl">
        <div className="w-1/4"><img src={product.url} alt={product.name}/></div>
        <div className="flex-grow">
            <div className="text-customRed font-bold"> {product.name} </div>
            <div> Cena: {product.price} zł </div>
            <div className="text-right"> <button>Usuń</button> </div>
        </div>

    </div>
)
export default CartItem