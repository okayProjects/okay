import React from 'react';
import './SingleClientData.css';

const SingleCoursePurchased = (props) => {

    const days = [];
    for (let key in props.unavailableDays) {
        if (props.unavailableDays[key]) {
            days.push(
                {
                    day: key,
                    hourFrom: Object.values(props.unavailableHoursFrom[key]).join(''),
                    hourTo: Object.values(props.unavailableHoursTo[key]).join('')
                }
            );
        };
    };


    const courseTypes = props.courses.map(course => (
        <ul key={course.id}>
            <li>
                {`Kurs: ${course.name}, cena ${course.price}PLN`}
            </li>
            <li>{`Data zamówienia: ${props.dateOfPurchasing}, godz. ${props.timeOfPurchasing}`}</li>
        </ul>
    ));


    days.sort((a, b) => {

        if (a.day > b.day) return 1;
        if (a.day < b.day) return -1;
        return 0

    })


    const unavailableDays = days.map((day, index) => (
        <ul key={day + index}>
            <li>{`${day.day} od ${day.hourFrom} do ${day.hourTo}`}</li>
        </ul>
    ));

    return (
        <>
            <div className='client-data-wrapper'>
                <p>Student</p>
                <span>{` ${props.studentPeronalData.userName}`}</span>
                <span>{` ${props.studentPeronalData.userSurname},`}</span>
                <span>{` tel. ${props.studentPeronalData.userTelephoneNumber}`}</span>
                <div className='clients-ordered-courses'>
                    {courseTypes}
                </div>
                {props.studentPeronalData.userComments && <p>{`Uwagi: ${props.studentPeronalData.userComments}`}</p>}
                {days.length > 0 && <div className='unavailable-days-wrapper'>
                    <p>Zdecydowanie nie mogę mieć zajęć w:</p>
                    {unavailableDays}
                </div>}
            </div>
        </>
    );
};

export default SingleCoursePurchased;


