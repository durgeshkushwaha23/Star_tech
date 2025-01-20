import React from 'react'
import { useState } from 'react'
import Structure from './comonents/structure/Structure'
import Homepage from './comonents/homepage/homepage'
import Nameform from './comonents/name-Form/namepage'

const App = () => {
  const [username, setusername] = useState('')
  return (
    <div>

      <Structure/>
      {username ===""?<Nameform/>:<Homepage/>}

    </div>
  )
}

export default App