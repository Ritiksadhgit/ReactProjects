function Home() {
    let name ="Home Page"

    function fun() {
        alert("Working....")
    }

    return(
        <>
        <h1>{name}</h1>

        <button onClick={fun}>Click Here</button>
        </>
    )
}
export default Home;