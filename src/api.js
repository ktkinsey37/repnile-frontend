import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class RepnileApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${RepnileApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static addToken(token){
    this.token = token;
  }

  static async loginUser(formData){
    let res = await this.request("auth/token", formData, "post")
    const returnVal = {username: formData.username, token: res.token}
    this.token = res.token
    return returnVal
  }

  static async logoutUser(){
    this.token = undefined
  }

  static async getAnimal(id) {
    console.log(id, "this is id in repnileapi")
    let res = await this.request(`animals/${id}`);
    console.log(res, "this is res in getanimal in repnileapi")
    return res.animal;
  }

  static async getAllAnimals(){
    let res = await this.request("animals")
    console.log(typeof(res.animals), "typeof res.animals")
    return res.animals;
  }

  static async getAnimalsQuery(params){
    console.log(params, "params in getanimalsquery")
    let res = await this.request("animals", params)
    return res.animals;
  }

  static async addAnimal(formData){
    console.log(formData, "formData addanimal in api")
    // NEED TO HANDLE DATA INPUT AT THIS STEP
    // if (formData.forSale = "true") formData.forSale = true;
    // else if (formData.forSale = "false") formData.forSale = false;
    // else throw new Error("For Sale needs to be either true or false")
    let res = await this.request("animals", formData, "post")
    console.log(res, "this is res in api")
    return res;
  }

  static async addItem(formData){
    return;
  }

  static async getItems(id) {
    let res = await this.request(`items/${id}`);
    return res.animal;
  }

  static async getAllAItems(){
    let res = await this.request("items")
    return res.items;
  }

  static async getAItemsQuery(term){
    let res = await this.request("items", term)
    return res.animals;
  }

  static async getAllMessageThreads(){
    let res = await this.request("messages")
    return res;
  }

  static async getMessageThread(id){
    let res = await this.request(`messages/${id}`)
    return res;
  }

  static async postMessage(formData){
    let res = await this.request("messages", formData, "post")
  }



//   static async registerUser(formData){
//     let res = await this.request("auth/register", formData, "post")
//     this.token = res.token
//     let returnObj = {username: `${formData.username}`, token: res.token}
//     return returnObj
//   }


//   static async getUser(username){
//     console.log(this.token, username, "this is tokena nd uusername in getuser")
//     let res = await this.request(`users/${username}`)
//     return res.user;
//   }

//   static async editUser(formData){
//     let authRes = await this.loginUser({username: formData.username, password: formData.password})
//     delete formData.username;
//     let res = await this.request(`users/${authRes.username}`, formData, "patch")
//   }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default RepnileApi