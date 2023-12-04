let user = {
  id: 1,
  name: "John",
  post: ["Post  1", "Post 2", "Post 3"],
};

function fetchUserData(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.id !== undefined && user.name != undefined) {
        resolve(`id: ${user.id} name: ${user.name}`);
      } else reject("Error");
    }, 1000);
  });
}

function fetchUserPosts(userId, userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        userId !== undefined &&
        userName !== undefined &&
        user.post !== undefined
      ) {
        resolve(user.post);
      } else reject("Error");
    }, 2500);
  });
}

fetchUserData(user)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fetchUserPosts(user.id, user.name)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
