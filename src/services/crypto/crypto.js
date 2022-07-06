import CryptoJS from 'crypto-js';

class CryptoJSService {
  encrypt(message, secretKey) {
    const encryptedText = CryptoJS.AES.encrypt(message, secretKey);

    return encryptedText.toString();
  }

  decrypt(cipher, secretKey) {
    const bytes = CryptoJS.AES.decrypt(cipher, secretKey);

    return bytes.toString(CryptoJS.enc.Utf8);
  }

  signature(message, secretKey) {
    const bytes = CryptoJS.HmacSHA256(CryptoJS.HmacSHA256(message, secretKey), secretKey);

    return bytes.toString(CryptoJS.enc.Base64);
  }

  base64Encode(message) {
    const bytes = CryptoJS.enc.Utf8.parse(message);

    return CryptoJS.enc.Base64.stringify(bytes);
  }

  base64Decode(cipher) {
    const bytes = CryptoJS.enc.Base64.parse(cipher);

    return CryptoJS.enc.Utf8.stringify(bytes);
  }
}

export default new CryptoJSService();
