$(document).ready(function(){
    $('#generate').click(generateKeys);
    $('#encrypt').click(encrypt);
    $('#decrypt').click(decrypt);
    
})

var generateKeys = function(){
    var sKeySize = $('#rsa-key-size').val();
    var keySize = parseInt(sKeySize);
    var crypt = new JSEncrypt({default_key_size: keySize});
    $('#privkey').val(crypt.getPrivateKey());
    $('#pubkey').val(crypt.getPublicKey());
    return;
};


var encrypt = function(){
    var crypt = new JSEncrypt();

    // Set the private.
    crypt.setPrivateKey($('#privkey').val());
    //return;
    // If no public key is set then set it here...
    var pubkey = $('#pubkey').val();
    if (!pubkey) {
    $('#pubkey').val(crypt.getPublicKey());
    }
    // Get the input and crypted values.
    var input = $('#plaintext').val();
    var crypted = $('#ciphertext').val();

    // Alternate the values.
    if (input) {
    $('#ciphertext').val(crypt.encrypt(input));
    $('#plaintext').val('');
    }
    else if (crypted) {
    var decrypted = crypt.decrypt(crypted);
    if (!decrypted)
        decrypted = 'This is a test!';
    $('#plaintext').val(decrypted);
    $('#ciphertext').val('');
    }
    return;
}

var decrypt = function () {
    var crypt = new JSEncrypt();

    // Set the private.
    crypt.setPrivateKey($('#privkey').val());
    var crypted = $('#cipher').val();
    var decrypted = crypt.decrypt(crypted);
    $('#plaintext-decrypted').val(decrypted);
    return;
}