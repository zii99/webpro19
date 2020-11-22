let nama = document.getElementById('nama')
let email  = document.getElementById('email')
let jam = document.getElementById('jam')
let tujuan = document.getElementById('tujuan')
let tiket = document.getElementById('tiket')
let hasil = document.getElementById('hasil')

document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault()

    cekform()
});

function cekform(){

    if(nama.value == ""){
        error(nama, "*nama tidak boleh kosong");
    }else if(nama.value.length >= 30){
        error(nama, "*nama tidak boleh kosong");
    }else{
        sukses(nama);

    }if(email.value == ""){
         error(email, "*email tidak boleh kosong");
    }else if(!isEmail(email.value)){
        error(email, "*email tidak boleh kosong");
    }else{
        sukses(email)

    }if(jam.value == ""){
        error(jam, "*jam tidak boleh kosong");
    }else{
        sukses(jam)

    }
    if(tujuan.value == ""){
        error(tujuan, "*tujuan tidak boleh kosong");
    }else{
        sukses(tujuan)

    }if(tiket.value == ""){
        error(tiket, "*tiket tidak boleh kosong");
    }else if(parseInt(tiket.value) < 1 && parseInt(tiket.value) > 10){
        error (tiket, "*tiket tidak boleh kosong");
    }else{
        sukses(tiket);
    }
    hasil.innerHTML= `<p>${nama.value}</p>
                      <p>${email.value}</p>
                      <p>${jam.value}</p>
                      <p>${tujuan.value}</p>
                      <p>${tiket.value}</p>`
}
function error(input, pean){
    const li = input.parentElement;
    const span = li.querySelector("span");
    span.className = 'error';
    span.innerText = pesan;
}

function sukses(input){
    const li = input.parentElement;
    const span = li.querySelector("span");
    span.className = 'sukses';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
