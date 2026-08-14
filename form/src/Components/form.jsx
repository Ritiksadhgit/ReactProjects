function Form(){
    function frmdata(e){
    console.log(e.target.value);

  }
  function frmdata1(e){
    console.log(e.target.value);
  }
  function frmdata2(e){
    console.log(e.target.value);
  }
  function frmdata3(e){
    console.log(e.target.value);
  }
  function frmdata4(e){
    console.log(e.target.value);
  }
  function frmdata5(e){
    console.log(e.target.value);
  }
    return(
        <>
        <h1>Form page </h1>

        <form  >
            <label htmlFor="">Name</label>
            <input type="text" onChange={frmdata}/><br />

            <label htmlFor="">Age</label>
            <input type="text" onChange={frmdata1}/><br />

            <label htmlFor="">Gender</label>
            <input type="text" onChange={frmdata2}/><br />

            <label htmlFor="">City</label>
            <input type="text" onChange={frmdata3}/><br />

            <label htmlFor="">Branch</label>
            <input type="text" onChange={frmdata4}/><br />

            <label htmlFor="">Contact</label>
            <input type="text" onChange={frmdata5}/><br />


        </form>


        </>
    )
}
export default Form