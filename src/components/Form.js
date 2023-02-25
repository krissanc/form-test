import { useState, useEffect } from 'react'

function Form() {

    const [formValue, setFormValue] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        console.log(formValue);

    }

    function handleChange(event) {
        setFormValue(event.target.value);

    }

    useEffect(() => {
        console.log(formValue);
    }, [formValue])

    return (
        <div className="App">
            <header className="App-header">

                <form className="my-form" onSubmit={submitHandler}>
                    <h2> Form Test </h2>
                    <input type="text" value={formValue} onChange={handleChange}></input>
                    <button> Submit </button>
                </form>

            </header>
        </div>
    );
}

export default Form;