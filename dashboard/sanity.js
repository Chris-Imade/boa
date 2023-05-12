let PROJECT_ID = "wvcai2li";
let DATASET = "production";


let QUERY = encodeURIComponent(`*[_type == "user"]{
    photo{
        asset->{
          url
        }
    },
    _id,
    userName,
    password,
    accountBalance,
    id,
    transaction[]{
        transaction_type,
        description,
        amount,
    }
}`);

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// Fields
var signInForm = document.querySelector("#signInForm");

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Clicked");
    userId = e.target.userId.value;
    password = e.target.password.value;

    fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
        console.log(result);
        const particularUser = result.filter(item => item.id === userId && item.password === password);

        if (particularUser.length === 0) {
            alert("You entered the wrong credentials. Try again.")
        } else {
            alert("Thanks for logging in... ");
            localStorage.setItem("bankuser", JSON.stringify(particularUser[0]));

            location.href = "/dashboard/dashboard.html";
        }
    })
    .catch((err) => console.error(err));
})


// fetch the content


console.log("HELLO, WORLD");

