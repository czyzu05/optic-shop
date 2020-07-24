import React from 'react'

import Slider from '../layouts/Slider'
import Gallery from '../layouts/Gallery'
import Arrivals from '../layouts/Arivals'

const HomePage = () => {
    return (
        <>
            {<Slider/>}
            {<Gallery/>}
            {<Arrivals/>}
        </>
    );
}
 
export default HomePage;