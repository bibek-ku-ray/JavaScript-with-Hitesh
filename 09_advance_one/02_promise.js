const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task is complete.");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise comsumed.");
});

//another way
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2 completed.");
    resolve();
  });
}).then(function () {
  console.log("promise 2 comsumed.");
});

// passing data
const promiseThree = new Promise(function (resolve, reject) {
  resolve({ username: "bibek", email: "bibek@ray.com" });
});

promiseThree.then(function (user) {
  console.log(user);
  console.log(user.email);
});

const promiseFour = new Promise(function (resolve, reject) {
  let error = true;
  setTimeout(function () {
    if (!error) {
      resolve({ username: "bibekray", password: "ray123" });
    } else {
      reject("Something went wrong.");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.password;
  })
  .then((userpassword) => {
    console.log(userpassword);
  })
  .catch(function (error) {
    console.log("Your error: ", error);
  })
  .finally(() => {
    console.log("your promise is either reject or resolve");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ language: "Javascript", password: "123JS" });
    } else {
      reject("Error in js");
    }
  });
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

async function getAllUser() {
  try {
    const response = await fetch("https://api.github.com/users/bibek-ku-ray");
    const data = await response.json();
    // console.log(data);
    console.log();
    console.log("url: ", data.url);
    console.log("id: ", data.id);
    console.log("login: ", data.login);
    console.log("name: ", data.name);
    // console.log(response);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUser();

fetch("https://api.github.com/users/bibek-ku-ray")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
