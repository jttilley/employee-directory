import axios from "axios";
// import React from "react";

export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=100")
  }
}
