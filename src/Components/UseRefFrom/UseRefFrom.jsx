import { useEffect, useRef } from "react";


const UseRefFrom = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)

    const handleSubmitRef = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)
    }
    // focus er jonno useeffect bebohar
    useEffect(()=>{
        nameRef.current.focus();
    },[])

    return (
        <div>
            <form onSubmit={handleSubmitRef}>
                <input 
                ref={nameRef}
                type="text" name="name"/>
                <br />
                <input
                ref={emailRef}
                type="email" name="email" id="" defaultValue={'lipi@gmail.com'} />
                <br />
                <input 
                ref={phoneRef}
                type="password"name="password" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UseRefFrom;