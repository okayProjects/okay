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
                {`Rodzaj kursu: ${course.name}, cena ${course.price}PLN`}
            </li>
            <li>{`Data zamówienia: ${props.dateOfPurchasing}, godz. ${props.timeOfPurchasing}`}</li>
        </ul>
    ));

    const unavailableDays = days.map((day, index) => (
        <li key={day + index}>
            <span>{day.day}</span>{` od ${day.hourFrom} do ${day.hourTo}`}</li>
    ));

    return (
        <>
            <div className='client-data-wrapper'>
                <div className='client-personal-data-wrapper'>
                    <span>Student</span>
                    <h5>{`${props.studentPeronalData.userName} ${props.studentPeronalData.userSurname}`}</h5>
                    <span>{` tel. ${props.studentPeronalData.userTelephoneNumber}`}</span>
                </div>
                <div className='clients-ordered-courses'>
                    {courseTypes}
                </div>
                {props.studentPeronalData.userComments && (
                    <div className='clients-order-comments'>
                        <span>Twoje uwagi</span>
                        <p>{props.studentPeronalData.userComments}</p>
                    </div>
                )}
                {days.length > 0 && <div className='unavailable-days-wrapper'>
                    <span>Zdecydowanie nie mogę mieć zajęć w:</span>
                    <ul>
                        {unavailableDays}
                    </ul>

                </div>}
            </div>
        </>
    );
};

export default SingleCoursePurchased;


