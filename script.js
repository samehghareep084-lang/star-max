document.getElementById("whatsappForm").addEventListener("submit", function(e){

    e.preventDefault();


    let name = document.getElementById("name").value;

    let message = document.getElementById("message").value;


    let phone = "201039893016";


    let text =
    "الاسم: " + name +
    "\nالرسالة: " + message;


    let url =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);


    window.open(url, "_blank");

});

