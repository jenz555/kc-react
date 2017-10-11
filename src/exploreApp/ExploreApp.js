import React, { Component } from 'react';
import DownloadBtn from '../downloadBtn/DownloadBtn';
import ScrollableAnchor from 'react-scrollable-anchor'
import Top from '../top/Top'
import search from './searchScreen_phone.png';
import logo from './kcLogo.png';
import awareness from './awareness2_phone.png';
import timeTraveler from './timeTraveler2_phone.png';
import playboy from './playboy_phone.png';


class ExploreApp extends Component {

    render() {
        return (
            <ScrollableAnchor id={'section2'}>

                <section className="vr--x5">
                    <div className="wrapper">
                        <h1 className="txt txt--weight-semibold explore__title txt--align-center txt--color-blue">Download the Key Collector Comics App and become a Superpowered Collector</h1>
                        <p className="txt txt--size-18 txt--align-center ">Unlock the secret identity of over 7,000 key issues extracted from 8 decades of published comic books from the Golden Age to today.</p>

                        <div className="vr--x3 txt--align-center">
              

                                <div className="grid grid--centered">
                                    <div className="grid__col grid__col--12of12">

                                        <div className="grid grid--centered">
                                            <div className="grid__col grid__col--6of12">
                                                <DownloadBtn></DownloadBtn>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    
                        </div>
                    </div>
                    <div className="isHidden isVisible--medium">


                        <div className="slant slant--large slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium slant__content-mb">


                                        <h2 className="txt txt--color-white txt--weight-semibold vr txt--color-purple">Superior Intellect</h2>
                                        <p className="txt txt--color-white">In the time it takes to download an app, you can possess the full knowledge of which comics contain the milestone moments that make them “key issues”.</p>
                                        <p className="txt txt--color-white">There are two options to identify key issue comic books:</p>
                                        <ul className="oList txt--color-white">
                                            <li>Search by Title to discover which key issues exist within a series without having to perform an individual search for each comic.</li>
                                            <li>Search by Character to see a timeline of your favorite hero or villain from 1st appearance to where they are today, living or dead, and the character defining moments in between.</li>


                                        </ul>


                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-right">
                                        <div className="relative">
                                            <div className="phoneImgRight">
                                                <img src={search} />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="slant slant--small slant--left slant--ltBlue slant__dots--right">

                            <div className="wrapper vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--4of12--medium">

                                        <div className="relative">
                                            <div className="phoneImgLeft">
                                                <img src={awareness} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="grid__col grid__col--8of12--medium slant__content-mb">
                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Heightened Awareness</h2>
                                        <p className="txt txt--color-white">The Key Collector Comics mobile app offers price guidance for each entry in the database to assist you in making confident purchases.</p>

                                        <p className="txt txt--color-white">Our 3-tiered pricing structure leaves the complicated grading scale to the experts. Before you buy, take a peek at the condition guidelines to determine the value of what you find and decide if you should engage or retreat.</p>


                                    </div>
                                </div>

                            </div>





                        </div>

                        <div className="slant slant--large slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium slant__content-mb">

                                        <h2 className="txt txt--color-white txt--weight-semibold txt--color-purple vr">Time Travel</h2>
                                        <p className="txt txt--color-white">Teleport back to the Golden Age to see where the heroes of unshakeable virtue began their careers. Or witness moments in the Bronze and Copper eras where the lines that separated hero from villain began to blur leading to a darker, more realistic tone in comics. </p>

                                        <p className="txt txt--color-white">The option is yours if you’d like to search within a specific time frame or browse the complete historical data of key issues by selecting one or more of the era filters.</p>

                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-right">
                                        <div className="relative">
                                            <div className="phoneImgRight">
                                                <img src={timeTraveler} />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="slant slant--small slant--left slant--ltBlue slant__dots--right">

                            <div className="wrapper vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--4of12--medium">

                                        <div className="relative">
                                            <div className="phoneImgLeft">
                                                <img src={playboy} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="grid__col grid__col--8of12--medium slant__content-mb">
                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Billionaire Playboy</h2>
                                        <p className="txt txt--color-white">Amassing wealth comparable to Bruce Wayne or Tony Stark is an exaggeration and most definitely not the intention of the Key Collector Comics mobile app.  But the ability to mingle a hobby with investment potential is a win-win in our (comic) book.</p>

                                        <p className="txt txt--color-white">Start by cataloguing your collection. Tap the “own” button beside an issue you possess.  From the “My Keyring” screen you can view your inventory and monitor the fluctuating value of your collection</p>

                                        <p className="txt txt--color-white">In the “My Keyring” screen you can also build a wishlist of what you’d like to add to your collection. So when the time is right, access your wishlist so you won’t forget what to look for that might be waiting for you to find.</p>


                                    </div>
                                </div>

                            </div>





                        </div>


                        <div className="slant slant--large slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium slant__content-mt">

                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Superhuman Speed</h2>
                                        <p className="txt txt--color-white">Our goal was to engineer a user-friendly interface that would deliver concise information in as few steps as possible and make it conveniently available when needed. The result should save you a considerable amount of time, money and frustration.</p>
                                        <p className="txt txt--color-white">We are confident that we succeeded in this first phase of Key Collector Comics but it is not important what we think. We want to hear from you. Please send us feedback via the app (tap “my account”) or by filling out the form below.</p>

                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-right">
                                        <div className="vr--x3"></div>
                                        <div className="relative">
                                            <div className="phoneImgRight">
                                                <img src={logo} />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="slant--end--container">
                            <div className="slant--end">
                                <div className="wrapper">
                                    <Top></Top>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* <!-- Start Mobile View --> */}
                    <div className="isHidden--medium">
                        <div className="slant slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2 vr--x2">


                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium">



                                        <h2 className="txt txt--color-white txt--weight-semibold txt--color-purple vr">Superior Intellect</h2>
                                        <p className="txt txt--color-white">In the time it takes to download an app, you can possess the full knowledge of which comics contain the milestone moments that make them “key issues”.</p>
                                        <p className="txt txt--color-white">There are two options to identify key issue comic books:</p>
                                        <ul className="oList txt--color-white">
                                            <li>Search by Title to discover which key issues exist within a series without having to perform an individual search for each comic.</li>
                                            <li>Search by Character to see a timeline of your favorite hero or villain from 1st appearance to where they are today, living or dead, and the character defining moments in between.</li>


                                        </ul>



                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-center">


                                        <img src={search} />

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="slant slant--left slant--ltBlue slant__dots--right">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium">

                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Heightened Awareness</h2>
                                        <p className="txt txt--color-white">The Key Collector Comics mobile app offers price guidance for each entry in the database to assist you in making confident purchases.</p>

                                        <p className="txt txt--color-white">Our 3-tiered pricing structure leaves the complicated grading scale to the experts. Before you buy, take a peek at the condition guidelines to determine the value of what you find and decide if you should engage or retreat. </p>



                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-center">


                                        <img src={awareness} />

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="slant slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium">
                                        <h2 className="txt txt--color-white txt--weight-semibold txt--color-purple vr">Time Travel</h2>
                                        <p className="txt txt--color-white">Teleport back to the Golden Age to see where the heroes of unshakeable virtue began their careers. Or witness moments in the Bronze and Copper eras where the lines that separated hero from villain began to blur leading to a darker, more realistic tone in comics. </p>

                                        <p className="txt txt--color-white">The option is yours if you’d like to search within a specific time frame or browse the complete historical data of key issues by selecting one or more of the era filters.</p>

                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-center">


                                        <img src={timeTraveler} />

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="slant slant--left slant--ltBlue slant__dots--right">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium">
                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Billionaire Playboy</h2>
                                        <p className="txt txt--color-white">Amassing wealth comparable to Bruce Wayne or Tony Stark is an exaggeration and most definitely not the intention of the Key Collector Comics mobile app.  But the ability to mingle a hobby with investment potential is a win-win in our (comic) book.</p>

                                        <p className="txt txt--color-white">Start by cataloguing your collection. Tap the “own” button beside an issue you possess.  From the “My Keyring” screen you can view your inventory and monitor the fluctuating value of your collection</p>

                                        <p className="txt txt--color-white">In the “My Keyring” screen you can also build a wishlist of what you’d like to add to your collection. So when the time is right, access your wishlist so you won’t forget what to look for that might be waiting for you to find.</p>

                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-center">


                                        <img src={playboy} />

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="slant slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium">
                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Superhuman Speed</h2>
                                        <p className="txt txt--color-white">Our goal was to engineer a user-friendly interface that would deliver concise information in as few steps as possible and make it conveniently available when needed. The result should save you a considerable amount of time, money and frustration.</p>
                                        <p className="txt txt--color-white">We are confident that we succeeded in this first phase of Key Collector Comics but it is not important what we think. We want to hear from you. Please send us feedback via the app (tap “my account”) or by filling out the form below.</p>

                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-center">


                                        <img src={logo} />


                                    </div>

                                </div>

                                <div className="vr"></div>

                            </div>

                        </div>
                        <div className="slant--end--container">
                            <div className="slant--end">
                                <div className="wrapper">
                                    <Top></Top>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>

            </ScrollableAnchor>

        );
    }
}

export default ExploreApp;
