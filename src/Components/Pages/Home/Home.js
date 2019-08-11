import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css'

class Home extends Component {
    state = {
        pageLoaded: false
    }

    componentDidMount() {
        const spnText = document.querySelector('.text');
        const ul = document.querySelector('.ok');
        const spnGoodDay = document.querySelector('.goodDay');
        const txtWelcome = "Welcome to ";
        const txtOk = "OKAY";
        const txtGoodDay = "dzień dobry";
        const time = 150;
        let textIndex = 0;

        const addWelcome = () => {
            spnText.textContent += txtWelcome[textIndex];
            textIndex++;
            if (textIndex === txtWelcome.length) {
                textIndex = 0;
                clearInterval(welcomeIndex)
            }
        }

        const welcomeIndex = setInterval(addWelcome, time);

        setTimeout(() => {
            const addOk = () => {
                const span = document.createElement('span');
                span.textContent += txtOk[textIndex];
                ul.appendChild(span)
                textIndex++;
                if (textIndex === txtOk.length) {
                    textIndex = 0;
                    clearInterval(okIndex);
                }
            }
            const okIndex = setInterval(addOk, time);
        }, 1500);

        setTimeout(() => {
            const addGoodDay = () => {
                if (textIndex === txtGoodDay.length) return;
                spnGoodDay.textContent += txtGoodDay[textIndex];
                textIndex++;
            }
            setInterval(addGoodDay, time);

        }, 2250);

        setTimeout(() => {

            this.setState(prevState => {
                return { pageLoaded: prevState.pageLoaded = true };
            });
        }, 4500);
    }


    render() {

        const welcomePage = (
            <div className='home'>
                <div className='span-wrapper'>
                    <span className="text"></span>
                    <span className='ok'></span>
                    <div className='good-day-wrapper'>
                        <span className='goodDay'></span>
                    </div>
                </div>
            </div>
        );

        return (
            this.state.pageLoaded ? <Redirect to='/offer' /> : welcomePage
        );
    }
}

export default Home;