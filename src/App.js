import React, {useState, useEffect, useRef} from 'react'

// let renderCount = 1

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value);
  })

  // https://www.youtube.com/watch?v=9KJxaFHotqI 45:23

  return (
    <div>
      <h1>Количесто рендеров: {renderCount.current}</h1>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className="btn btn-success" ></button>
    </div>
  );
}


export default App;
