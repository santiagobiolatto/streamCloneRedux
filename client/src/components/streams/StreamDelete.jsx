import React, { useEffect } from "react";
import Modal from "../modals/Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StreamDelete = (props) => {
  const { fetchStream } = props;
  useEffect(() => {
    fetchStream(props.match.params.id);
  }, [fetchStream, props.match.params.id]);

  const actions = (
    <div>
      <button
        onClick={() => {
          props.deleteStream(props.match.params.id);
        }}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </div>
  );
  const onDismiss = () => {
    history.push("/");
  };
  return (
    <Modal
      title="Delete stream"
      content="Are you sure you want to delete this stream?"
      actions={actions}
      onDismiss={onDismiss}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
