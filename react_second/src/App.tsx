// import ListGroup from "./Components/ListGroup";
// import { useState } from "react";
// import { useEffect, useState } from "react";
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
// import { useState } from "react";
// import ExpenseList from "./Expense-Tracker/Component/ExpenseList";
// import ExpenseFilter from "./Expense-Tracker/Component/ExpenseFilter";
// import ExpenseForm from "./Expense-Tracker/Component/ExpenseForm";

// function App() {
//   const [selectCategory, setSelectedCategory] = useState("");
//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "bbb", amount: 11, category: "Utilities" },
//     { id: 3, description: "ccc", amount: 12, category: "Utilities" },
//     { id: 4, description: "dd", amount: 13, category: "Entertainment" },
//   ]);

//   const visibleExpenses = selectCategory
//     ? expenses.filter((e) => e.category === selectCategory)
//     : expenses;

//   return (
//     <div>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(newExpense) =>
//             setExpenses((prevExpenses) => [
//               ...prevExpenses,
//               { ...newExpense, id: prevExpenses.length + 1 },
//             ])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         />
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       />
//     </div>
//   );
// }

// export default App;

// import { useEffect } from "react";
// import ProductList from "./Expense-Tracker/Component/ProductList";

// function App() {
//   // const ref = useRef<HTMLInputElement>(null);

//   // useEffect(() => {
//   //   if (ref.current) ref.current.focus();
//   // });

//   // useEffect(() => {
//   //   document.title = "My App";
//   // });

//   const connect = () => console.log("Connecting");
//   const disconnect = () => console.log("DisConnecting");

//   useEffect(() => {
//     connect();

//     return () => disconnect();
//   });

//   return (
//     <div>
//       {/* <input ref={ref} type="text" className="form-control" />
//       <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="HouseHold">HouseHold</option>
//       </select>
//       <ProductList category={category} /> */}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { CanceledError } from "./services/api-client";
import UserService from "./services/userService";
import useUsers from "./hooks/userUsers";

interface User {
  id: number;
  name: string;
}

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "kundan kd" };
    setUsers([newUser, ...users]);

    UserService.add(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " !" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    UserService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
