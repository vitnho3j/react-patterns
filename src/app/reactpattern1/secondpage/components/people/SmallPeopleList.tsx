type SmallPeopleListItem = {
    person: {
        name: string;
        age: number;
    }
}


export const SmallPeopleListItem = ({person} : SmallPeopleListItem) => {
    const {name, age} = person;

    return (
        <p>Name: {name}, Age: {age} years</p>
    )
}