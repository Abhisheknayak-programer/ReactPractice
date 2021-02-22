import React, { useState } from "react";
import Classes from "../../assets/css/App.module.css";

const Regester = (props) => {
    const [form, setFrom] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    }) 
    
    const [records, setRecords] = useState([]);

    const nameChangeHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        // console.log(value);
        // console.log(name);

        setFrom({
            ...form, [name]: value
        })
    }

    const fromSubitted = (event) => {
        event.preventDefault();

        const newRecord = { ...form, id: new Date().getTime().toString() }

        setRecords([...records, newRecord]);
        // console.log(newRecord);

        setFrom({
            username: "",
            email: "",
            phone: "",
            password: ""
        })
    }


    return (
        <>
            <div className={Classes.formDesign}>
                <form action="/" onSubmit={fromSubitted}>

                    <div>
                        <label htmlFor="username">username</label><br />
                        <input type="text" name="username" value={form.username} onChange={nameChangeHandler} autoComplete="off" />
                    </div>



                    <div>
                        <label htmlFor="email">email</label><br />
                        <input type="email" name="email" value={form.email} onChange={nameChangeHandler} autoComplete="off" />
                    </div>

                    <div>
                        <label htmlFor="phone">phone</label><br />
                        <input type="number" name="phone" value={form.phone} onChange={nameChangeHandler} autoComplete="off" />
                    </div>

                    <div>
                        <label htmlFor="password">password</label><br />
                        <input type="password" name="password" value={form.password} onChange={nameChangeHandler} autoComplete="off" />
                    </div>

                    <br />

                    <button type="submit">Regester Now</button>

                </form>
            </div>

            <br />

            
            <div className={Classes.lastShower}>
                <p>Name : {form.username}</p>
                <p>Email : {form.email}</p>
                <p>Phone : {form.phone}</p>
                <p>password : {form.password}</p>
            </div>
        </>
    )
}

export default Regester;