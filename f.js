const userForm = document.getElementById("myform");

let url = "https://reqres.in/api/users";

userForm.onsubmit = (e) => {
   e.preventDefault();
   let data = new FormData(userForm);
   let request = {
      name: data.get("fname"),
      job: data.get("lname"),
   };
   postToAPI(url, request);
};

const postToAPI = async (url, data) => {
   const response = await fetch(url, {
      method: "POST",
      body: data,
   });
   console.log(response);
};
