import useInputValue from "../../Hooks/useInputState";


const HookFrom = () => {

    // const [name, handleNameChange] = useInputValue('lipi')

    const emailState = useInputValue('lipi@gm.com')

    const handleSubmit = e =>{
        e.preventDefault ();
        console.log('from data', emailState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input  value={name} onChange={handleNameChange} type="text" name="name"/> */}
                <input {...emailState} type="text" name="name" id=""  />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text"name="password" />
                <br />
                <button type="submit" value="Submit" >Submit</button>
            </form>
        </div>
    );
};

export default HookFrom;