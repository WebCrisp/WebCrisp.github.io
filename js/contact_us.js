done = document.getElementById("send");

// dkxmjgzbknkzvxvj

done.addEventListener("click", () => {
  let userName = document.getElementById("contactName");
  let userEmail = document.getElementById("contactEmail");
  let subject = document.getElementById("contactSubject");
  let description = document.getElementById("contactMessage");

  userName = userName.value;
  userName = userEmail.value;
  description = description.value;
  userEmail = userEmail.value;
  
  console.log(userName, userEmail, description);
  sendEmail(userName, userEmail, subject, description);
});

function sendEmail(userName, userEmail, subject, description) {
  
  Email.send({
    Host: "smtp.gmail.com",

    Username: "webcrispco@gmail.com",
    Password: process.env.EMAIL_PASSWORD,

    To: "webcrispco@gmail.com",
    From: `${userEmail}`,
    Subject: `${subject}`,
    Body:`${description}`,

    //   Attachments: [
    //     {
    //       name: "File_Name_with_Extension",
    //       path: "Full Path of the file"
    //     }]
  }).then(function(message){

    console.log("Done");
    var sLoader = $('.submit-loader');
    sLoader.slideUp("slow"); 
    $('.message-warning').fadeOut();
    $('#contactForm').fadeOut();
    $('.message-success').fadeIn();

  }).catch(function(){
    
    var sLoader = $('.submit-loader');
    sLoader.slideUp("slow"); 
    $('.message-warning').html("Something went wrong. Please try again.");
    $('.message-warning').slideDown("slow");
  
  });
}
