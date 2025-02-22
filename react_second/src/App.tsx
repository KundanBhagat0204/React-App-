// import ListGroup from "./Components/ListGroup";
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

import { useState } from "react";

function App() {
  // const [drink, setDrink] = useState({
  //   title: "americano",
  //   price: 5,
  // });
  // const [customer, setCustomer] = useState({
  //   name: "kundan",
  //   address: {
  //     city: "sangli",
  //     zipCode: 410410,
  //   },
  // });

  // const [tags, setTags] = useState(["happy", "cheerful"]);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    // setDrink({ ...drink, price: 6 });
    // setCustomer({
    //   ...customer,
    //   address: {
    //     ...customer.address,
    //     zipCode: 410412,
    //   },
    // });
    //add
    // setTags([...tags, "exciting"]);

    // //remove
    // setTags(tags.filter((tag) => tag !== "happy"));

    // //update
    // setTags(tags.map((tag) => (tag === "happy" ? "happiens" : tag)));

    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {bugs.map((bug) => (
        <div key={bug.id}>
          <p>
            {bug.title} - {bug.fixed ? "Fixed ✅" : "Not Fixed ❌"}
          </p>
        </div>
      ))}
      <button onClick={handleClick}>Count</button>
    </div>
  );
}

export default App;
