type LargePeopleListItem = {
    person: {
        name: string;
        age: number;
        hairColor: string;
        hobbies: string[];
    }
}


export const LargePeopleListItem = ({person} : LargePeopleListItem) => {
    const {name, age, hairColor, hobbies} = person;

    return (
        <>
        <h3 className="font-bold">Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <h3>Hobbies</h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        </>
    )
}