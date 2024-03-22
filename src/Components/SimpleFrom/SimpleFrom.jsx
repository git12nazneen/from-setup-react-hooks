

const SimpleFrom = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('from submitted')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text"name="phone" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleFrom;