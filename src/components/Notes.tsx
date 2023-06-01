import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import NoteObject from "../Interface/NoteObject";

interface NotesProps {
  notes: NoteObject[];
  deleteNote: (id: string) => void;
}

const NoteCard = styled(Card)`
  width: 300px;
  display: flex;
  flex-direction: row;
  margin: 20px;
`;
const Wrapper = styled(Box)`
  & > button {
    margin-top: 2px;
  }
`;

const Container = styled(Box)`
  margin-top: 10px;
`;

const Notes: React.FC<NotesProps> = ({ notes, deleteNote }) => {
  return (
    <Container>
      <Typography variant="h4">Notes</Typography>

      {notes.map((note) => (
        <NoteCard style={{ backgroundColor: note.color }}>
          <CardContent>
            <Wrapper>
              <Typography variant="h5">{note.title}</Typography>
              <Typography>{note.description}</Typography>
              <Typography>{note.date}</Typography>
              <Button onClick={() => deleteNote(note.id)} variant="contained">
                Delete
              </Button>
            </Wrapper>
          </CardContent>
        </NoteCard>
      ))}
    </Container>
  );
};

export default Notes;
