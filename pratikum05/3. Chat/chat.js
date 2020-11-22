function kirim() {
    let kotak = document.getElementById('chatBox')
    let pesan = document.getElementById('text')
    
    if(!pesan == ' ') {
        kotak.innerHTML += `<p>${pesan.value}</p>`
    }
    return false;

}