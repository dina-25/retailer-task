import React, { useEffect, useState } from 'react';
import './styles/App.css';

function App() {

    const [orders, setOrders] = useState([]);

    //React hppk to render data once they are available
    useEffect(() => {
        //async function to fetch data from cart 
        const fetchCartData = async () => {
            const response = await fetch('https://fakestoreapi.com/carts');
            const cartData = await response.json();

            setOrders(cartData)
        }
        fetchCartData();
    }, []);

    return ( 
    <div className = "App" >
        <header className = "Cart Details">
        <h2>Orders Details</h2>
        <table>
            <thead>
                <tr>
                    <th>User#</th>
                    <th>Order date</th>
                    <th>product</th>
                    <th>quantity</th>
                    <th>Invoice</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((cart,i) =>
                    <tr key={i}>
                        <td>{cart.userId}</td>
                        <td>{cart.date}</td>
                        <td>{cart.products.map((item, index) =>
                            <React.Fragment key={index}>
                                {item.productId}
                                <br/>
                            </React.Fragment>
                        )}</td>
                        <td>{cart.products.map((item, index) =>
                            <React.Fragment key={index}>
                                {item.quantity} 
                                <br/>
                            </React.Fragment>
                            
                        )}</td>
                        <td>
                            <button className='invoiceButton' onClick={()=> alert("Function will be available soon")}>Send Invoice</button>
                        </td>
                    </tr>
                     )}
                
            </tbody>
        </table>
        </header>
    </div>
    );
    
}



export default App;