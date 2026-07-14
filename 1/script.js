emailjs.init({
    publicKey: "WmnIerEVQnpWGV9FU",
});

document.getElementById("sendBtn").addEventListener("click", function () {
    const message = document.getElementById("message").value;

    if (message.trim() === "") {
        document.getElementById("status").textContent = "Введите сообщение!";
        return;
    }

    emailjs.send("service_shexzn5", "template_y6dtk6q", {
        message: message
    })
    .then(function () {
        document.getElementById("status").textContent = "✅ Сообщение отправлено!";
        document.getElementById("message").value = "";
    })
    .catch(function (error) {
        document.getElementById("status").textContent = "❌ Ошибка отправки.";
        console.log(error);
    });
});