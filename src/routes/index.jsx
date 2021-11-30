import { Switch, Route } from 'react-router-dom'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'

const Routes = () => {
    return <Switch>
        <Route exact path='/'>
            <Shop/>
        </Route>
        <Route path='/cart'>
            <Cart/>
        </Route>
    </Switch>
}

export default Routes