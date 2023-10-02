import Product from "./components/Product";

const products = [

    {
        id: 1,
        title: "Product One",
        price: 99,
        description: "Elu produit de l'année"

    },

    {
        id: 2,
        title: "Product Two",
        price: 45,
        description: "Elu produit de l'année d'aprés"

    },

    {
        id: 3,
        title: "Product Three",
        price: 33,
        description: "Elu produit de l'année suivante"
    }
];

function App() {
    return (
        <div>
            <h1 style={{ textAlign : "center" }}>Liste des produits</h1>

            {products.map((product) => (
                <Product key={product.id} productData={product} />
            ))}
        </div>
    );
}




//function App() {
  //  const [count, setCount] = useState(0); //Hook [variable, setter d'etat]
  //  const buttonStyle = {
  //      color:'blue',
  //      backgroundColor:'yellow',
  //      padding: '10px 20px',
  //      border: 'none',
    //    borderRadius: '5px',
   //     cursor: 'pointer',
   // }

  //  function increment() {
   //    setCount(count +1);
   // }

   // function decrement()  {
   //   setCount(count -1);
  //  }
  //  return (
   //     <div>
    //       <Button text="+" clickMe={increment} />
    //        <h2>Counter :
    //            <span style={{ color: (count >0 ? "green" : "red") }}>(count)</span></h2>
    //        <Button text="-" clickMe={decrement} />
   // </div>
//);

//}

export default App;