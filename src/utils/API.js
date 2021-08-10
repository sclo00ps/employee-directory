import axios from "axios";
//const
export default {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
