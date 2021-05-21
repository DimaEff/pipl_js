import {connect} from "react-redux";
import {compose} from "redux";

import {addMessage} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {getDialogsMessages, getDialogsUsers} from "../../selectors/dialogs_selectors";


let mapStateToProps = (state) => {
  return {
      users: getDialogsUsers(state),
      messages: getDialogsMessages(state),
  }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        addMessage,
    })
)(Dialogs);