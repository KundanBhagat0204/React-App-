//PascalCasing
let count = 0;

function Message() {
  //jsx: javaScript XML
  // const name="";
  // if(name)
  // return <h1>Hello {name}</h1>;
  // else
  // return <h1>Hello World</h1>
  console.log("message called", count);

  count++;
  return <div>Message {count}</div>;
}

export default Message;
