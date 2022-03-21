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

  static async request(endpoint, data = {}, method = "get", file = false) {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
      Authorization: `Bearer ${RepnileApi.token}`,
    };
    if (file) {
      console.log("HERE");
    }
    const params = method === "get" ? data : {};

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

  static addToken(token) {
    this.token = token;
  }
  static getImage(imageName) {
    return BASE_URL + "/" + imageName;
  }
  static async loginUser(formData) {
    let res = await this.request("auth/token", formData, "post");
    const returnVal = { username: formData.username, token: res.token };
    this.token = res.token;
    return returnVal;
  }

  static async logoutUser() {
    this.token = undefined;
  }

  static async getAnimal(id) {
    console.log(id, "this is id in repnileapi");
    let res = await this.request(`animals/${id}`);
    console.log(res, "this is res in getanimal in repnileapi");
    return res.animal;
  }

  static async getAllAnimals() {
    let res = await this.request("animals");
    console.log(typeof res.animals, "typeof res.animals");
    return res.animals;
  }

  static async getAnimalsQuery(params) {
    console.log(params, "params in getanimalsquery");
    let res = await this.request("animals", params);
    return res.animals;
  }

  static async addAnimal(formData) {
    console.log(formData, "formData addanimal in api");
    let res = await this.request("animals", formData, "post", true);
    console.log(res, "this is res in api");
    return res;
  }

  static async addAnimalParentage(parentId, childId){
    let data = {}
    data.parent=parentId
    data.child=childId
    let res = await this.request("animals/parents", data, "post")
    console.log(res, "this is ids in api.addparents")
    return res;
  }

  static async getAnimalParentage(id){
    let res = await this.request(`animals/${id}/parents`, id)
    console.log(res, "this is res in api.getanimalparentage")
    if (!res) return undefined;
    return res;
  }

  static async updateAnimal(formData, id) {
    formData.weight = String(formData.weight);
    console.log(formData, "this is formdata in updateanimal");
    let res = await this.request(`animals/${id}`, formData, "patch");
    return res;
  }

  static async addItem(formData) {
    let res = await this.request("items", formData, "post", true);
    return res;
  }

  static async getItem(id) {
    let res = await this.request(`items/${id}`);
    console.log(res, "res in api")
    return res;
  }

  static async getAllItems() {
    let res = await this.request("items");
    return res.items;
  }

  static async getAItemsQuery(term) {
    let res = await this.request("items", term);
    return res.items;
  }

  static async updateItem(formData, id) {
    // formData.weight = String(formData.weight);
    // console.log(formData, "this is formdata in updateanimal");
    let res = await this.request(`items/${id}`, formData, "patch");
    return res;
  }

  static async getAllMessageThreads() {
    let res = await this.request("messages");
    return res;
  }

  static async getMessageThread(id) {
    let res = await this.request(`messages/${id}`);
    return res;
  }

  static async postMessage(formData) {
    let res = await this.request("messages", formData, "post");
    return;
  }

  static async deleteMessageThread(uuid) {
    let res = await this.request(`messages/${uuid}`, uuid, "delete");
    console.log(res, "this is res in deletemessagethread in the repnile.api");
  }

  static async addEvent(formData) {
    let res = await this.request("events", formData, "post");
    return res;
  }

  static async getEvent(id) {
    let res = await this.request(`events/${id}`);
    return res;
  }

  static async getEvents() {
    let res = await this.request("events");
    // console.log(typeof res.animals, "typeof res.animals");
    return res.events;
  }

  static async updateEvent(formData, id) {
    // formData.weight = String(formData.weight);
    // console.log(formData, "this is formdata in updateanimal");
    let res = await this.request(`events/${id}`, formData, "patch");
    return res;
  }

  static async deleteEvent(id) {
    let res = await this.request(`events/${id}`, id, "delete");
    console.log(res, "this is res in deleteevents in the repnile.api");
    return;
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

export default RepnileApi;
