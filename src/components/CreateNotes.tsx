import React, { useState } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import NoteObject from "../Interface/NoteObject";
import { v4 as uuid } from "uuid";

const TITLE_LIMIT = 30;
const TEXT_LIMIT = 50;

const Main = styled(Box)`
  & > * {
    margin: 10px 5px 3px 0;
  }

  & > div > input[type="text"] {
    border: 1px solid black;
    border-radius: 20px;
    padding: 8px;
    width: auto;
  }

  & > div > input[type="color"] {
    padding-right: 10px;
    width: 80px;
    position: relative;
    height: 40px;
  }

  & > span {
    font-size: 15px;
    position: relative;
    right: 40px;
  }
`;

const initialValue = {
  id: uuid(),
  title: "",
  description: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

interface addNotesProps {
  addNotes: (note: NoteObject) => void;
}

const CreateNotes: React.FC<addNotesProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(initialValue);

  const valueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const createNote = () => {
    addNotes({ ...note, id: uuid() });
    setNote(initialValue);
  };
  return (
    <Main>
      <InputBase
        placeholder="Title"
        name="title"
        value={note.title}
        required
        onChange={(e) => valueChange(e)}
        inputProps={{
          maxLength: TITLE_LIMIT,
        }}
      />
      <Box component="span">
        {note.title.length}/{TITLE_LIMIT}
      </Box>

      <br />

      <InputBase
        placeholder="Discription"
        name="description"
        value={note.description}
        required
        onChange={(e) => valueChange(e)}
        inputProps={{
          maxLength: TEXT_LIMIT,
        }}
      />
      <Box component="span">
        {note.description.length}/{TEXT_LIMIT}
      </Box>

      <br />

      <InputBase
        type="color"
        defaultValue={"#FF0000"}
        placeholder="Pick a Color"
        name="color"
        onChange={(e) => valueChange(e)}
      />
      <br />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => createNote()}
      >
        Create
      </Button>

      <hr />
    </Main>
  );
};

export default CreateNotes;
