import React from 'react'
import {Route, Switch} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import MenGlassesPage from '../pages/MenGlassesPage'
import WomenGlassesPage from '../pages/WomenGlassesPage'
import BrandsPage from '../pages/BrandsPage'
import LookbookPage from '../pages/LookbookPage'
import SalePage from '../pages/SalePage'
import ContactPage from '../pages/ContactPage'

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/men" component={MenGlassesPage}/>
                <Route path="/women" component={WomenGlassesPage}/>
                <Route path="/brands" component={BrandsPage}/>
                <Route path="/lookbook" component={LookbookPage}/>
                <Route path="/sale" component={SalePage}/>
                <Route path="/contact" component={ContactPage}/>
            </Switch>
        </>
    )
}
 
export default Page