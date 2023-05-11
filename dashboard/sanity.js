let PROJECT_ID = "wvcai2li";
let DATASET = "production";


let QUERY = encodeURIComponent(`*[_type == "user"]`);

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// Fields
var signInForm = document.querySelector("#signInForm");
var userId = document.querySelector(".userId").value;
var userPassword = document.querySelector(".userPassword").value;
var loginBtn = document.querySelector(".loginBtn");

signInForm.onclick = (e) => {
    e.preventDefault();

    console.log("User Ids: ", userId);
    console.log("User userPassword: ", userPassword);

    fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
        console.log(result);
        result.map((item) => {
            console.log("User Ids: ", userId);
            // if(item.id == userId) {
            //     console.log("You are a user")
            // } else {
            //     console.log("You are not a user");
            // };
            // alert("Incorrect Credentials");
            
        })

    })
    .catch((err) => console.error(err));
    

    loginBtn.onclick = (e) => {
        e.preventDefault();
        window.location.href = "/dashboard.html"
    }

}





// fetch the content


console.log("HELLO, WORLD");


