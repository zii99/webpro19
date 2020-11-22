function idol(){
    let gambar = document.getElementById('picture');
    let kpop = document.getElementById('kpop');
  
    if(!kpop.value == ' '){
        gambar.innerHTML = `<img src = "${kpop.value}.jpeg"></img>`
            alert(`Grup idol ini bernama ${kpop.value}`)
    }
    return false;
  }
