const userForm = document.getElementById("myform");

let url = "https://reqres.in/api/users";

userForm.onsubmit = (e) => {
   e.preventDefault();
   let data = new FormData(userForm);
   let request = {
      name: data.get("fname"),
      job: data.get("lname"),
   };
   /*   for (let value of data) {
      console.table(value[1]);
   } */
   // console.log(request);
   //console.log(data.get("fname"));
   postToAPI(url, request);
};

const postToAPI = async (url, data) => {
   const response = await fetch(url, {
      method: "POST",
      body: data,
   });
   console.log(response);
};