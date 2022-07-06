import CryptoJS from 'crypto-js';
import cryptComponent from './crypto';

describe('crypt component', () => {
  const message = 'mockedMessage';
  const secretKey = 'mockedSecretKey';

  it('should match signature text', () => {
    const encryptedText = CryptoJS.HmacSHA256(
      CryptoJS.HmacSHA256(message, secretKey),
      secretKey
    ).toString(CryptoJS.enc.Base64);
    const equalVal = cryptComponent.signature(message, secretKey);

    expect(encryptedText).toEqual(equalVal);
  });

  it('should match base64Encode text', () => {
    const encryptedText = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(message));
    const equalVal = cryptComponent.base64Encode(message);

    expect(encryptedText).toEqual(equalVal);
  });
});
