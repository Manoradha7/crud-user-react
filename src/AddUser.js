import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

export function AddUser({ users, setUsers }) {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [EmailId, setEmail] = useState("");
  const [phoneNo, setPhoneno] = useState("");
  const [jobRole, setJobrole] = useState("");

  const history = useHistory();

  const addUser = () => {
    const newUser = {
      name,
      EmailId,
      pic,
      phoneNo,
      jobRole,
    };
    console.log(newUser);
    setUsers([...users, newUser]);
    history.push("/users");
  };
  return (
    <div className="adduser">
      <TextField
        id="standard-basic"
        onChange={(x) => setName(x.target.value)}
        label="Enter UserName"
        variant="standard"
        required
      />
      <TextField
        id="standard-basic"
        onChange={(x) => setPic(x.target.value)}
        label="UserPic URL"
        variant="standard"
        required
      />
      <TextField
        id="standard-basic"
        onChange={(x) => setEmail(x.target.value)}
        label="Enter EmailId"
        variant="standard"
        required
      />
      <TextField
        id="standard-basic"
        onChange={(x) => setPhoneno(x.target.value)}
        label="Enter PhoneNo"
        variant="standard"
        required
      />
      <TextField
        id="standard-basic"
        onChange={(x) => setJobrole(x.target.value)}
        label="Enter JobRole"
        variant="standard"
        required
      />
      <Button onClick={addUser} variant="outlined">
        ➕ Adduser
      </Button>
    </div>
  );
}
