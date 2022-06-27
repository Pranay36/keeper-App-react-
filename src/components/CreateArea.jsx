import React from "react";

function CreateArea(props) {
  const [note, setnote] = React.useState({
    title: "",
    content: ""
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handlechange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handlechange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
