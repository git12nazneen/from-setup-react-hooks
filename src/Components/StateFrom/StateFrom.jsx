import { useState } from "react";


const StateFrom = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
   const [phone, setPhone] = useState(null);
    const [name, setName] = useState('lipi')
    const [error, setError] = useState('')
    
    
    const handlState = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('set your password minimum 6 character')
        }
        else{
            setError('')
            console.log(email,password,phone, name)
        }
    }

    const handleEmail = e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlepassword = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handlePhone = e =>{
        console.log(e.target.value);
        setPhone(e.target.value);
    }

    const handleName = e =>{
        setName(e.target.value)
    }



    return (
        <div>
             <form onSubmit={handlState}>
                <input value={name}
                onChange={handleName}  type="text" name="name"/>
                <br />
                <input 
                 onChange={handleEmail}
                type="email" name="email" id="" />
                <br />
                <input 
                onChange={handlepassword}
                type="password" name="password" id="" required/>
                <br />

                <input
                onChange={handlePhone}
                type="text"name="phone" />
                <br />
                <button>Submit</button>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFrom;