done = document.getElementById("send");

// dkxmjgzbknkzvxvj

done.addEventListener("click", () => {
  let userName = document.getElementById("contactName");
  let userEmail = document.getElementById("contactEmail");
  let subject = document.getElementById("contactSubject");
  let description = document.getElementById("contactMessage");

  userName = userName.value;
  userEmail = userEmail.value;
  subject = subject.value;
  description = description.value;
  
  sendEmail(userName, userEmail, subject, description);
});

function sendEmail(userName, userEmail, subject, description) {
  
  Email.send({
    Host: "smtp.gmail.com",

    Username: "webcrispco@gmail.com",
    Password: "crvwpdshbysiynod",

    To: "webcrispco@gmail.com",
    From: `${userEmail}`,
    Subject: `${subject}|${userName}`,
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
