import React from "react";

const contactInfo = 
[
    {name: "Juan", phone: "09999999"},
    {name: "Sam", phone: "08888888"},
    {name: "Diego", phone: "07777777"}
];

const contacts = contactInfo.map((contact, index) => {
    return <li key={index}>{contact.name}: {contact.phone}</li>
});

class ArrayList extends React.Component {
    render() {
        return (
            <ul>
                {contacts}
            </ul>
        );
    }
}

export default ArrayList;