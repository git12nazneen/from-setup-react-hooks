
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
import Reusablefrom from './Components/Reusable/Reusablefrom'
import HookFrom from './Components/HookFrom/HookFrom'
import UseRefFrom from './Components/UseRefFrom/UseRefFrom'
import SimpleFrom from './Components/SimpleFrom/SimpleFrom'
import StateFrom from './Components/StateFrom/StateFrom'

function App() {
  
  const handleSignUpSubmit = data =>{
  console.log('sign up,', data)
  }

  const handleUpdateprofile = data =>{
   console.log('update', data)
  }

  return (
    <>
    
      <h1>Form master with react</h1>
      
      <h3>Simple from</h3>
     <SimpleFrom></SimpleFrom>
     <hr />
     <h3>State from</h3>
     <StateFrom></StateFrom>
     <hr />
     <h3>useref from</h3>
     <UseRefFrom></UseRefFrom>
     <hr />
     <HookFrom></HookFrom>
    <hr />
    <Reusablefrom 
    fromTitle={'Sign up'}
     handleSubmit={handleSignUpSubmit}
     >
      <div>
        <h2>Reusbale sign up from</h2>
      </div>
     </Reusablefrom>
    <Reusablefrom 
    fromTitle={'Profile update'}
    submitBtnText='Update'
    handleSubmit={handleUpdateprofile}
    >

      <div>
        <h3>Update sign up from</h3>
      </div>
    </Reusablefrom>
    <hr />
    <h3>Using context api ,by props dilling</h3>
    <Grandpa></Grandpa>
    </>
  )
}

export default App
