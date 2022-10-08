import { connect, Connect } from "react-redux";
import Dashboard from "../Pages/Dashboard/index";
import {setTheme} from '../Services/Actions/Action';

const mapStoreToProps = state => ({

})

const mapDispachedToProps = dispached =>({
    setThemeHandler:data=>dispached(setTheme(data))
})

export default connect(mapDispachedToProps,mapStoreToProps)(Dashboard);

