### Arrow Functions
hello = function() {
    return "Hello World!";
}

As arrow function (if the function only has one statement):

hello = () => "Hello world!";


### Hooks
- Can only be used inside the function component
    - Not inside class component
- Can't put hook inside if-statement
- I.e. they have to be at the top of function
- not inside anything
- useState() hook is the function version
    - classes have their own
Example:

    const [count, setCount] = useState(defaultParam)

- Where [currentstate, function_allows_update_state]
- Say we want to increase or decrease a count;

function App() {

  const [count, setCount] = useState(5);

  function decreaseCount() {
    setCount(prevCount => prevCount - 1)
  }
  
  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
    <button onClick={decreaseCount}> - </button>
    <span>{count}</span>
    <button onClick={increaseCount}> + </button>
    </>
  );
}
- Notice how the html is in return and the hooks are before that.

##### NOTE:
- If our default state param is a complex calculation,
  pass it as a function instead, s.t. it doesnt run each time:


function useInitial(){
    console.log("run function);
    return 4
}

// Passing an arrow function instead of number:
const [count, setCount] = useState(()=>useInitial());


function decreaseCount() {
setCount(prevCount => prevCount - 1)
}

function increaseCount() {
setCount(prevCount => prevCount + 1)
}
