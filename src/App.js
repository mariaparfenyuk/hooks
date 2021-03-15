import React, {useState} from 'react'

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  return (
    <>
      <h1 styles={styles}>Количество элементов:</h1>
      <button className={'btn btn-success'} onClick={(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-warning'} onClick={(prev => !prev)}>Изменить</button>
    </>
  );
}


export default App;
