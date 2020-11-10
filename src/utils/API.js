import axios from "axios";
// import React from "react";

export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us")
  }
}
