import React from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}

type CarType = {
    manufacturer: string
    model: string
}

type NewComponentType = {
    students: StudentType[]
    cars: CarType[]
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <>
            <ul>
                {props.students.map((st, index) => {
                    return (
                        <li key={index}>
                            <span>{st.name} </span>
                            <span>age: {st.age}</span>
                        </li>

                    )
                })}
            </ul>
            <table>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.cars.map(car => {
                    return (
                        <tr>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
};

