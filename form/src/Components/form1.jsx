function Form1() {

    let name;
    let city;

    function nameData(e) {
        name = e.target.value;
    }

    function cityData(e) {
        city = e.target.value;
    }

    function frmSubmit(event) {
        event.preventDefault();       //page reloading rokne ke liye

        console.log("Name:", name);
        console.log("City:", city);
    }

    return (
        <>
            <h1>Form Handling</h1>

            <form onSubmit={frmSubmit}>

                <label>Name</label>
                <input type="text" onChange={nameData} />
                <br />

                <label>City</label>
                <input type="text" onChange={cityData} />
                <br />

                <input type="submit" />

            </form>
        </>
    );
}

export default Form1;