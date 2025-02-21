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
import Button from "./Components/Button/Button";
function App() {
  return (
    <div>
      <Button onClick={() => {}}>My Button</Button>
    </div>
  );
}

export default App;
