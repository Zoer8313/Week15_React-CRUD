import React, { useState } from "react";

export const NewApplicantForm = (props) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(undefined);

    const handlePhoneNumberInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setPhoneNumber(int >= 0 ? int : "");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && phoneNumber) {
            //{console.log(name, phoneNumber)}
            props.addNewApplicant({name, phoneNumber});
            setName("");
            setPhoneNumber("");
            {console.log("Added new applicant")};
        } else {
            {console.log("Something went wrong adding this applicant.")};
        }
    };

    return (
        <div>
            <h4>Apply to This Position</h4>
            <form onSubmit = {onSubmit} >
                <input
                type = "text"//when the text in this input changes, we call setName() and set "name" to the target value.
                placeholder = "Name"
                onChange = {(e) => setName(e.target.value)}
                value = {name} />{" "}
                <input
                type = "text"
                placeholder = "Phone Number"
                onChange = {handlePhoneNumberInput}
                value = {phoneNumber} />
                <button type = "submit">Apply</button>
            </form>
        </div>//"value" section is the last part of tying const's up top to the state variable
    )
}
