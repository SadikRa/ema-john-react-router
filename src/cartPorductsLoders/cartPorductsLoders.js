import { getShoppingCart } from "../utilities/fakedb";

const cartPorductsLoders = async() =>{
    const cartProduct = await fetch('products.json');
    const products = await cartProduct.json();

    const storedCart = getShoppingCart();

    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // if you need to send two things
    // return [products, savedCart]
    // another options
    // return { products, cart: savedCart }

    return savedCart;
}
export default cartPorductsLoders;