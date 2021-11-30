import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export function EditUser({ users, setUsers }) {
  const { id } = useParams("");
  const user = users[id];
  return user ? (
    <UpdatedUser user={user} users={users} setUsers={setUsers} id={id} />
  ) : (
    ""
  );
}
function UpdatedUser({ user, users, setUsers, id }) {
  const [name, setName] = useState(user.name);
  const [pic, setPic] = useState(user.pic);
  const [EmailId, setEmail] = useState(user.EmailId);
  const [phoneNo, setPhoneno] = useState(user.phoneNo);
  const [jobRole, setJobrole] = useState(user.jobRole);

  const history = useHistory();

  const editUser = () => {
    const UpdatedUser = {
      name,
      pic,
      EmailId,
      phoneNo,
      jobRole,
    };
    console.log(UpdatedUser);

    const copyUserList = [...users];
    copyUserList[id] = UpdatedUser;
    setUsers(copyUserList);
    history.push("/users");
  };
  return (
    <div className="edituser">
      <TextField
        value={name}
        id="standard-basic"
        onChange={(x) => setName(x.target.value)}
        label="Enter UserName"
        variant="standard" 
        required/>
      <TextField
        value={pic}
        id="standard-basic"
        onChange={(x) => setPic(x.target.value)}
        label="UserPic URL"
        variant="standard" 
        required/>
      <TextField
        value={EmailId}
        id="standard-basic"
        onChange={(x) => setEmail(x.target.value)}
        label="Enter EmailId"
        variant="standard" 
        required/>
      <TextField
        value={phoneNo}
        id="standard-basic"
        onChange={(x) => setPhoneno(x.target.value)}
        label="Enter PhoneNo"
        variant="standard" 
        required/>
      <TextField
        value={jobRole}
        id="standard-basic"
        onChange={(x) => setJobrole(x.target.value)}
        label="Enter JobRole"
        variant="standard" 
        required/>
      <Button onClick={editUser} variant="outlined">
        📝Save
      </Button>
    </div>
  );
}
