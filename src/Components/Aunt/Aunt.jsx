import Cousin from "../Cousin/Cousin";


const Aunt = () => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin name={'Rubi'}></Cousin>
                <Cousin name={'sumi'}></Cousin>
            </section>
        </div>
    );
};

export default Aunt;