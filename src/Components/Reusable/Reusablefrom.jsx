

const Reusablefrom = ({fromTitle,handleSubmit, submitBtnText = 'Submit', children}) => {

        const handleLocalSubmit = e =>{
            e.preventDefault();
            const data ={
                name: e.target.name.value,
                email:e.target.email.value,
                password :e.target.password.value
            }
            handleSubmit(data)
        }

    return (
        <div>
            <h2>{fromTitle}</h2>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text"name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default Reusablefrom;