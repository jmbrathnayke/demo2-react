import  { createContext,useState } from 'react'
import Comp2 from './comp2'

// Create a context to share user data 
export const UserApp = createContext(); 

function Comp1() {
    const [username, setUsername] = useState("guest")
    
    return (
        <>
        {/* Provide the username to all child components */}
        {/* This allows any child component to access the username using useContext */}
            <UserApp.Provider value={username}>
            <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
                <h1>Parent component</h1>
                <p>Welcome {username}</p>
            </div>
            <div>
                <input type="text" placeholder='Enter your name' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <br /><br />
            {/*nested child component */}
            <Comp2 />
            </UserApp.Provider>
        </>
    )
}

export default Comp1;