import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Top from '../top/Top'
import sensory from './extraSensory_phone.png';
import awareness from './awareness_phone.png';
import timeTraveler from './timeTraveler_phone.png';
import strategist from './strategist_phone.png';


class ExploreApp extends Component {
    render() {
        return (
            <ScrollableAnchor id={'section2'}>

                <section className="vr--x5">
                    <div className="wrapper">
                        <h1 className="txt txt--weight-semibold explore__title txt--align-center txt--color-blue">Download the Key Collector Comics App and become a Superpowered Collector</h1>
                        <p className="txt txt--size-18 vr--x3 txt--align-center ">Unlock the secret identity of over 7,000 key issues extracted from 8 decades of published comic books from the Golden Age to today.</p>

                    </div>
                    <div className="isHidden isVisible--medium">


                        <div className="slant slant--large slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium slant__content">


                                        <h2 className="txt txt--color-white txt--weight-semibold vr">X-Ray Vision</h2>
                                        <p className="txt txt--color-white">Search by title  to view the isolated keys that contain significance in a series without the clutter of those that don't. Search by character to discover events that shaped a hero’s timeline and in which issues these milestones can be found. Search by title and issue number for specifics on an individual comic of interest
</p>


                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-right">
                                        <div className="relative">
                                            <div className="phoneImgRight">
                                                <img src={sensory} />
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

                                    <div className="grid__col grid__col--8of12--medium slant__content">
                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Heightened Awareness</h2>
                                        <p className="txt txt--color-white">Instantaneously become an expert even if you’re a novice by knowing the value of what you intend to buy or sell. Tap into Key Collector’s  3-tier, simplified price guide to avoid the pain of overpaying or underselling. </p>


                                    </div>
                                </div>

                            </div>





                        </div>

                        <div className="slant slant--large slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium slant__content">

                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Time Traveler</h2>
                                        <p className="txt txt--color-white">Utilize the filters to view only the key issues published during  the Golden Age (1934-1959). Or choose to travel through the past 30 years of comics by selecting the Bronze, Copper and Modern Age options. </p>

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
                                                <img src={strategist} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="grid__col grid__col--8of12--medium slant__content">
                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Master Strategist</h2>
                                        <p className="txt txt--color-white">Inventory your key issues, select the condition of your comic  and visit the “My Key Ring” screen to monitor the fluctuating value of your collection. Browse titles, characters and categories to build a wishlist of comics you’ve always wanted and some you never knew existed. Access your wishlist in the “My Key Ring” screen when you’re on the hunt.</p>


                                    </div>
                                </div>

                            </div>





                        </div>


                        <div className="slant slant--large slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium slant__content">

                                        <h2 className="txt txt--color-white txt--weight-semibold vr">Superhuman Speed</h2>
                                        <p className="txt txt--color-white">Key Collector Comics is designed by and for comic book collectors. The intention of the app is to quickly and efficently  identify highly sought after key issues with as little effort as possible. The functionality of the app is to deliver all the information you need when you need it. </p>

                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-right">
                                        <div className="relative">
                                            <div className="phoneImgRight">
                                                <img src={awareness} />
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

                                        <h2 className="txt txt--color-white txt--weight-semibold">Infinite Knowledge</h2>
                                        <p className="txt txt--color-white">Unlock the secret identity of over 7,000 key issues extracted from 8 decades of published comic books from the Golden Age to today.</p>

                                        <h2 className="txt txt--color-white txt--weight-semibold">Extra-Sensory Perception</h2>
                                        <p className="txt txt--color-white">Search by title  to view the isolated keys that contain significance in a series without the clutter of those that don't. Search by character to discover events that shaped a hero’s timeline and in which issues these milestones can be found. Search by title and issue number for specifics on an individual comic of interest
</p>


                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-center">


                                        <img src={sensory} />

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="slant slant--left slant--ltBlue slant__dots--right">

                            <div className="wrapper wrapper--x2 vr--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium">

                                        <h2 className="txt txt--color-white txt--weight-semibold">Heightened Awareness</h2>
                                        <p className="txt txt--color-white">Instantaneously become an expert even if you’re a novice by knowing the value of what you intend to buy or sell. Tap into Key Collector’s  3-tier, simplified price guide to avoid the pain of overpaying or underselling. </p>



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
                                        <h2 className="txt txt--color-white txt--weight-semibold">Time Traveler</h2>
                                        <p className="txt txt--color-white">Utilize the filters to view only the key issues published during  the Golden Age (1934-1959). Or choose to travel through the past 30 years of comics by selecting the Bronze, Copper and Modern Age options. </p>

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
                                        <h2 className="txt txt--color-white txt--weight-semibold">Master Strategist</h2>
                                        <p className="txt txt--color-white">Inventory your key issues, select the condition of your comic  and visit the “My Key Ring” screen to monitor the fluctuating value of your collection. Browse titles, characters and categories to build a wishlist of comics you’ve always wanted and some you never knew existed. Access your wishlist in the “My Key Ring” screen when you’re on the hunt.</p>

                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-center">


                                        <img src={awareness} />

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="slant slant--right slant--dkBlue slant__dots--left">

                            <div className="wrapper wrapper--x2">

                                <div className="grid grid--centered grid--middle">
                                    <div className="grid__col grid__col--8of12--medium">
                                        <h2 className="txt txt--color-white txt--weight-semibold">Superhuman Speed</h2>
                                        <p className="txt txt--color-white">Key Collector Comics is designed by and for comic book collectors. The intention of the app is to quickly and efficently  identify highly sought after key issues with as little effort as possible. The functionality of the app is to deliver all the information you need when you need it. </p>

                                    </div>

                                    <div className="grid__col grid__col--4of12--medium txt--align-center">


                                        <img src={awareness} />

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
                </section>

            </ScrollableAnchor>

        );
    }
}

export default ExploreApp;
