import { useState, useEffect } from 'react'
import './App.css'

function App() {
  type Repo = {
    full_name: string;
    description: string;
  }

  const [data, setData] = useState<Repo[]>([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/JFLeiteee/repos')
    .then((response) => response.json())
    .then(
      (res)=>{
        setData(res);
      }
    )
  })

  return (
    <main>
      <h1>Some of mine repositories posted in <a href='https://github.com/JFLeiteee'>my profile</a> on Github:</h1>
      
      {data.map(reposes => {
        return (
          <div className='repo-container' key={reposes.full_name}>
            <h3>{reposes.full_name}</h3>
            <p>{reposes.description}</p>
          </div>
        )
      })}
    </main>
  )
}

export default App
