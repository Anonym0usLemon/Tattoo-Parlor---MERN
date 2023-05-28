import React, { useState } from "react"; 
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        msg: "",
    });

    const navigate = useNavigate();

    // These methods will update the state properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission
    async function onSubmit(e) {
        e.preventDefault(); 

        // When a post request is sent to the create url, we'll add a new record to the database
        const newPerson = { ...form };

        await fetch("http://localhost:5050/record", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ name: "", email: "", phone: "", msg: "" });
        navigate("/");
    }

    // This following section will display the form that takes input from the user.
    return (
        <>

          <div>
            <h3>Create New Record</h3>
            <form onSubmit={onSubmit}>
              <div className="">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
                />
              </div>
              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className=""
                  id="email"
                  value={form.email}
                  onChange={(e) => updateForm({ email: e.target.value })}
                />
              </div>
              <div className="">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className=""
                  id="phone"
                  value={form.phone}
                  onChange={(e) => updateForm({ phone: e.target.value })}
                />
              </div>
              <div className="">
                <label htmlFor="msg">Message</label>
                <input
                  type="text"
                  className=""
                  id="msg"
                  value={form.msg }
                  onChange={(e) => updateForm({ msg: e.target.value })}
                />
              </div>
            
              <div className="">
                <input
                  type="submit"
                  value="Create person"
                  className=""
                />
              </div>
            </form>
          </div>

        </>
      );
}