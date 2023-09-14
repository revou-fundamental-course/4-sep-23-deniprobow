function hitungLuas() {
    let sisi = document.getElementById("sisi").value;
    if(sisi){
        document.getElementById("sisiStringLuas1").textContent = sisi.toString();
        document.getElementById("sisiStringLuas2").textContent = sisi.toString();
        document.getElementById("luas").textContent = Math.pow(sisi, 2).toString();
        document.getElementById("result").style.display ="block";
    }
    else{
        alert("Silahkan isi nilai sisi!")
    }
}

function hitungKeliling() {
    let sisi = document.getElementById("sisiKeliling").value;
    if(sisi){
        document.getElementById("sisiStringKeliling").textContent = sisi.toString();
        document.getElementById("keliling").textContent = (sisi * 4).toString();
        document.getElementById("resultKeliling").style.display ="block";
    }
    else{
        alert("Silahkan isi nilai sisi!")
    }
}

function reset(){
    document.getElementById("sisi").value = "";
    document.getElementById("sisiKeliling").value = "";
}