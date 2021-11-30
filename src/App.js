import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { AddUser } from "./AddUser";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { UserDetails } from "./UserDetails";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditUser } from "./EditUser";

export default function App() {
  const usersList = [
    {
      name: "Sundaram",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ9JjpoblRg68JWneatnXZ7SMo6Vp6VwTtSydjHtYopBBgD8mvBxLr1bf75-PfL5KfRo&usqp=CAU",
      EmailId: "sundar98@gmail.com",
      phoneNo: 9837282347,
      jobRole: "Watchman",
    },
    {
      name: "Veera",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnD72Bm12HWxTLrRLoFdbdIlmA9Xt_H_b5SgXfptB-RSWweJ-UI4L8hKfBSGvLvlzwFDc&usqp=CAU",
      EmailId: "veera98@gmail.com",
      phoneNo: 9234523452,
      jobRole: "Employee",
    },
    {
      name: "Hema",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSoQLn8t4J8qK3Hxf7HZoCt8o4bbPXbdypA&usqp=CAU",
      EmailId: "hemaa8@gmail.com",
      phoneNo: 9234234534,
      jobRole: "Employee",
    },
    {
      name: "Kayal",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCG2eq56O8lxMBgDHj8AuFLK6x5KSwlwE-OiWn36Hh2zBxTmhc0nS40uveMnFi-z-YvI&usqp=CAU",
      EmailId: "kayal788@gmail.com",
      phoneNo: 9837285462,
      jobRole: "HR",
    },
    {
      name: "Durai",
      pic: "https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg",
      EmailId: "durai8@gmail.com",
      phoneNo: 9833453563,
      jobRole: "Manager",
    },
  ];

  const history = useHistory();

  const [users, setUsers] = useState(usersList);
  return (
    <div className="App">
      <header className="app-title"> DATA BOARD 📟</header>
      <AppBar position="static">
        <Toolbar>
          <Button
            className="txt-btn"
            color="inherit"
            onClick={() => history.push("/")}
            variant="text"
          >
            Home
          </Button>
          <Button
            className="txt-btn"
            color="inherit"
            onClick={() => history.push("/users")}
            variant="text"
          >
            Users
          </Button>
          <Button
            className="txt-btn"
            color="inherit"
            onClick={() => history.push("/create-user")}
            variant="text"
          >
            AddUser
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/edit-user/:id">
          <EditUser users={users} setUsers={setUsers} />
        </Route>

        <Route exact path="/users">
          <UsersList users={users} setUsers={setUsers} />
        </Route>
        <Route path="/profile/:id">
          <UserDetails users={users} />
        </Route>
        <Route path="/create-user">
          <AddUser users={users} setUsers={setUsers} />
        </Route>
      </Switch>
    </div>
  );
}

function Welcome() {
  return (
    <div className="welcome">
      <h1 className="welcome-note">
        Welcome to <span className="board"> DATA BOARD 📟</span>
      </h1>
    </div>
  );
}

function Users({
  id,
  name,
  EmailId,
  pic,
  phoneNo,
  jobRole,
  deleteButton,
  editButton,
}) {
  const history = useHistory("");
  return (
    <div className="user-container">
      <img className="prof-pic" src={pic} alt={name} />
      <div className="id-name">
        <p>{name}</p>
        <IconButton
          aria-label="more info"
          onClick={() => history.push("/profile/" + id)}
          color="primary"
          className="info-button"
        >
          <InfoIcon />
        </IconButton>
      </div>
      <p>Email: {EmailId}</p>
      <p>PhoneNo : {phoneNo}</p>
      <p>JobRole : {jobRole}</p>
      <div className="edit-delete-btn">
      {editButton}{deleteButton}
      </div>
      
    </div>
  );
}
function UsersList({ users, setUsers }) {
  const history = useHistory("");
  return (
    <div className="user">
      {users.map(({ id, name, pic, EmailId, phoneNo, jobRole }, index) => (
        <Users
          id={index}
          name={name}
          pic={pic}
          EmailId={EmailId}
          phoneNo={phoneNo}
          jobRole={jobRole}
          editButton={
            <IconButton
              aria-label="edit movie"
              style={{ marginLeft: "auto" }}
              color="error"
              className="edit-button"
              onClick={() => history.push("/edit-user/" + index)}
            >
              <EditIcon />
            </IconButton>
          }
          deleteButton={
            <IconButton
              aria-label="delete movie"
              onClick={() => {
                console.log("deliting,..", index);

                //assign the index as deleteindex so it refers to the particular we can easyly undersatand
                const deleteIndex = index;

                // the filter function also send two parameter one is user another one is index
                const remainingUsers = users.filter(
                  (mv, idx) => idx !== deleteIndex
                );

                //filtered movie show in the window
                console.log(remainingUsers);
                setUsers(remainingUsers);
              }}
              color="secondary"
              className="delete-button"
            >
              <DeleteIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}


