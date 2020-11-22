function validation() {
    let username = document.getElementById('userID').value
    let password = document.getElementById('password').value
 
    if (username == "Yozi99" && password == 'Icandoit99'){
        window.location = "hasil.html";
        alert("Anda Berhasil Login")
        return false
    }else{
        alert ('Silakan dicoba lagi')
        return false
    }
}