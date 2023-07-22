var api_key = process.env.SENDGRID_API_KEY;

let add_user = async () => {
  var email = document.getElementById('mc-email');
  var data_body = JSON.stringify({
    "list_ids": [
      "0e6549d8-b96c-4b18-88f9-69667dab3054"
    ],
    "contacts": [
      {
        "email": `${email.value}`,
      }
    ]
  });
  if (email.value) {

    const response = await fetch(`https://api.sendgrid.com/v3/marketing/contacts`, {
      method: 'PUT',
      headers: {
        "authorization": `Bearer ${api_key}`,
        "Content-Type": "application/json"
      },
      body: data_body,
    })
    const response_upd = await response.json();
    console.log(response_upd);

    swal(`You've arrived !`, `We'll notify you !`, "success");

    email.value = '';
  }
}

document.getElementById('mc-email-submit').addEventListener("click", (event) => {
  event.preventDefault();
  add_user()
}
);
