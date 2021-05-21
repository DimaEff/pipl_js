import {connect} from "react-redux";
import {compose} from "redux";

import Navbar from "./Navbar";


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
    }
}

export default compose(
    connect(mapStateToProps, {})
)(Navbar);