const sha256 = require("sha256");
const apiURL = process.env.REACT_APP_API_URL;

const date = Number(new Date().toLocaleDateString("en-GB").split("/").join(""));
// const modedDate = date + (date % 1000000);
const modedDate = "17/11/2021";
const xApiToken = sha256(modedDate + "kiitesummitzgOrJz91QOME8hrislove");
// console.log(xApiToken);
// console.log(apiURL);

async function client(
  endpoint,
  { data, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "x-api-token": xApiToken,
      "x-auth-token": token ? `${token}` : undefined,
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(async (response) => {
      // if (response.status === 401) {
      //   //call logout here
      //   // refresh the page for them
      //   // window.location.assign(window.location);
      //   return Promise.reject({ message: "Please re-authenticate." });
      // }
      const data = await response.json();
      if (response.ok) {
        return { response, data };
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
