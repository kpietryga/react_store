
type Product = {
    id: number;
    url: string;
    name: string;
    price: number;
};

interface CartItemProps {
    product: Product;
    remove: (id: number) => void; // Funkcja usuwania wymaga `id`
}

const CartItem: React.FC<CartItemProps> = ({ product, remove }) => (
    <div className="flex justify-between items-center gap-4 my-4 bg-rose-50 p-4 rounded-2xl">
        <div className="w-1/4">
            <img src={product.url} alt={product.name} />
        </div>
        <div className="flex-grow">
            <div className="text-customRed font-bold">{product.name}</div>
            <div>Cena: {product.price} zł</div>
            <div className="text-right">
                {remove &&
                <button
                    onClick={() => remove(product.id)}
                    className="text-red-500 hover:underline"
                >
                    Usuń
                </button>}
            </div>
        </div>
    </div>
);

export default CartItem;