import React from "react";
import {connect} from "react-redux";

import {addMessage} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {getDialogsMessages, getDialogsUsers} from "../../selectors/dialogs_selectors";


let mapStateToProps = (state) => {
  return {
      users: getDialogsUsers(state),
      messages: getDialogsMessages(state),
  }
};

export default connect(mapStateToProps, {addMessage,})(Dialogs);