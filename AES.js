$(document).ready(function(){
    $('#aes-encrypt').click(AESencrypt);
    $('#aes-decrypt').click(AESdecrypt);
});

var AESencrypt = function(){
    
    var mess = $('#aes-plaintext').val();
    var pass=$('#pass').val();
    var encrypted = CryptoJS.AES.encrypt(mess, pass);
    $('#aes-ciphertext').val(encrypted.toString());
    return;
}

var AESdecrypt = function(){
    
    var encripted = $('#aes-cipher').val();
    var pass=$('#passX').val();
    var decrypted = CryptoJS.AES.decrypt(encripted, pass);
    var text = decrypted.toString(CryptoJS.enc.Utf8)
    $('#plaintext2').val(text);
    return;
}
