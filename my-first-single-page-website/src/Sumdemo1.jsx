import React from 'react'
function Sumdemo() {
    const [no1, setNo1] = React.useState(0);
    const [no2, setNo2] = React.useState(0);
    const [choice, setChoice] = React.useState("");
    const [ans, setAns] = React.useState("");

    const doProcess = () => {
        if (choice === "add") {
            const c = parseInt(no1) + parseInt(no2);
            setAns("Sum is " + c);
        } else if (choice === "sub") {
            const c = parseInt(no1) - parseInt(no2);
            setAns("Sub is " + c);
        } else {
            setAns("Select Choice");
        }
    };

    return (
        <div>
            No1 : <input type="text" value={no1} onChange={e => setNo1(e.target.value)} /><br />
            No2 : <input type="text" value={no2} onChange={e => setNo2(e.target.value)} /><br />
            Choice:
            <input
                type="radio"
                onChange={() => setChoice("add")}
                name="operation"
                value="add"
                checked={choice === "add"}
            /> Add
            <input
                type="radio"
                onChange={() => setChoice("sub")}
                name="operation"
                value="sub"
                checked={choice === "sub"}
            /> Subtract
            <br />
            <button onClick={doProcess}>Calculate</button>
            <div>{ans}</div>
        </div>
    );
}

export default Sumdemo;