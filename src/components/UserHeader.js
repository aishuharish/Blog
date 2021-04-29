import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ userId, user }) => {
  if (!user) {
    return <div>null</div>;
  }

  return <div>{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};
export default connect(mapStateToProps)(UserHeader);
