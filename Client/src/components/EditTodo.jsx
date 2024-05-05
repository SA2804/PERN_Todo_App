import React, { useState } from "react";
import axios from "axios";

function EditTodo(props) {
  const [editText, setEditText] = useState("");

  const modalId = `edit-modal-${props.id}`;
  return (
    <>
      <button
        id={`edit-btn-${props.id}`}
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        Edit
      </button>
      <div
        className="modal fade"
        id={modalId}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`label-${modalId}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`label-${modalId}`}>
                Task:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                value={editText}
                onChange={(event) => {
                  setEditText(event.target.value);
                }}
                className=" w-full form-control  border-slate-950 "
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={async () => {
                  try {
                    await axios.put(`http://localhost:5000/todos/${props.id}`, {
                      description: editText,
                    });
                  } catch (err) {
                    console.error(err.message);
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditTodo;
