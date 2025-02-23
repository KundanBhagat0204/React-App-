// import ListGroup from "./Components/ListGroup";
import { useState } from "react";
import "./App.css";

// function App() {
//   let items = ["New York", "San francisco", "Tokyo", "London", "Paris"];
//   //passing funtions via props
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="cities"
//         onSelectedItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

// //Alert Passing Children
// import { useState } from "react";
// import Alert from "./Components/Alert";
// import Button from "./Components/Button";
// // function App() {
// //   return (
// //     <div className="alert alert-dark">
// //       <Alert>
// //         Hello <span>World</span>
// //       </Alert>
// //     </div>
// //   );
// // }
// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);
//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setAlertVisibility(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// }
// export default App;
// import { FaCalendarDay } from "react-icons/fa";
// function App() {
//   return (
//     <div>
//       <FaCalendarDay color="red" size="40" />
//     </div>
//   );
// }

// export default App;
// import Button from "./Components/Button/Button";
// function App() {
//   return (
//     <div>
//       <Button onClick={() => {}}>My Button</Button>
//     </div>
//   );
// }

// export default App;

// import Like from "./Components/Like";

// const App = () => {
//   return (
//     <div>
//       <Like onClick={() => console.log("clicked")} />
//     </div>
//   );
// };

// export default App;

// import Button from "./Components/Button/Button";
// import { useState } from "react";

// function App() {
//   const [isVisible, setVisibility] = useState(false);
//   let count = 0;

//   const handleClick = () => {
//     setVisibility(true);
//     count++;
//     console.log(isVisible);
//   };

//   return (
//     <div>
//       <Button onClick={handleClick}>Show</Button>
//     </div>
//   );
// }

// export default App;

// import Message from "./Message";

// function App() {
//   return (
//     <div>
//       <Message />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import produce from "immer";

// function App() {
//   // const [drink, setDrink] = useState({
//   //   title: "americano",
//   //   price: 5,
//   // });
//   // const [customer, setCustomer] = useState({
//   //   name: "kundan",
//   //   address: {
//   //     city: "sangli",
//   //     zipCode: 410410,
//   //   },
//   // });

//   // const [tags, setTags] = useState(["happy", "cheerful"]);
//   //simplying Update Logic With Immer
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);
//   const handleClick = () => {
//     // setDrink({ ...drink, price: 6 });
//     // setCustomer({
//     //   ...customer,
//     //   address: {
//     //     ...customer.address,
//     //     zipCode: 410412,
//     //   },
//     // });
//     //add
//     // setTags([...tags, "exciting"]);

//     // //remove
//     // setTags(tags.filter((tag) => tag !== "happy"));

//     // //update
//     // setTags(tags.map((tag) => (tag === "happy" ? "happiens" : tag)));

//     // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) {
//           bug.fixed = true;
//         }
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "Fixed" : "New"}
//         </p>
//       ))}
//       ;<button onClick={handleClick}>Count</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import NavBar from "./Components/NavBar";
// import Cart from "./Components/Cart";

// function App() {
//   const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }

// export default App;

//Exercise 1
//Game
// import { useState } from "react";

// function App() {
//   // const [game, setGame] = useState({
//   //   id: 1,
//   //   player: {
//   //     name: "john",
//   //   },
//   // });
//   // const [pizza, setPizza] = useState({
//   //   name: "Spicy Pepperoni",
//   //   toppings: ["mushroom"],
//   // });
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//   });

//   const handleClick = () => {
//     // setGame({ ...game, player: { ...game.player, name: "kd" } });
//     // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };

//   return (
//     <div>
//       <h2>Product 1 : Quantity {cart.items[0]?.quantity}</h2>
//       <button onClick={handleClick}>Change</button>
//     </div>
//   );
// }

// export default App;
// import ExpandableText from "./Components/ExpandableText";
// function App() {
//   return (
//     <>
//       <div>
//         <ExpandableText maxChars={20}>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro modi
//           excepturi officia quo harum, molestias tempore corporis eos
//           consequatur iste quidem expedita minus cum veniam, ab aliquam iure
//           quam exercitationem aliquid ad provident voluptates error perspiciatis
//           neque. Aliquam illum eaque harum exercitationem? Beatae quo
//           cupiditate, provident illum ducimus consequuntur, itaque nihil,
//           ratione nesciunt repudiandae obcaecati! Lorem ipsum dolor sit amet
//           consectetur adipisicing elit. Non aspernatur aliquam necessitatibus
//           quasi deserunt eius esse officiis voluptatibus adipisci ratione
//           cupiditate reiciendis minus magni quae, atque hic, in rem iure nemo
//           quibusdam? Odio quidem rerum voluptates saepe repellat similique
//           molestiae, dignissimos, quibusdam ad, repudiandae laboriosam.
//         </ExpandableText>
//       </div>
//     </>
//   );
// }

// export default App;

// import Form from "./Components/Form";

// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// export default App;
import ExpenseList from "./Expense-Tracker/Component/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 11, category: "utilities" },
    { id: 3, description: "ccc", amount: 12, category: "utilities" },
    { id: 4, description: "dd", amount: 13, category: "utilities" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
