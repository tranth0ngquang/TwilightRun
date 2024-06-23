const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://fabd-14-241-94-14.ngrok-free.app/api/listtournament",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
