
const form = document.forms["form"];
form.addEventListener("submit", (event) => {
    event.preventDefault();


    const userName= document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    console.log(userName);
    const  obj = {
        firstName: userName,
        lastName: password
    }
    console.log(obj)
    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:2333/api/login_user", {

                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            alert("Success:");
        } catch (error) {
            console.error("Error:", error);
        }
    }
    postJSON(obj);

})