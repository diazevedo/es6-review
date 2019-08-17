import axios from "axios";

// class ApiClass {
//   static async getUserInfo(username) {
//     try {
//       const response = await axios.get(
//         `https://api.github.com/users/${username}`
//       );
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

const api = axios.create({
  baseURL: "https://api.github.com"
});

export default api;
