import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function UserDetails({ users }) {
  const { id } = useParams("");

  const user = users[id];
  const history = useHistory("");
  console.log(user);
  return (
    <div className="userdetail">
      <div className="userdetails-container">
        <img className="prof-pic" src={user.pic} alt={user.name} />
        <div className="id-name">
          <p className="name">Name :{user.name}</p>
        </div>
        <p className="email">Email: {user.EmailId}</p>
        <p className="phoneno">PhoneNo : {user.phoneNo}</p>
        <p className="job">JobRole : {user.jobRole}</p>
        <Button
          variant="outlined"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIcon />}
        >
          back
        </Button>
      </div>
    </div>
  );
}
