import axios from "axios";

axios
  .get("/api/user")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
