import GenerateRsaKeyPem from './src/GenerateRsaKeyPem'
/**
 * @class RsaPublicKeyPem
 */
export default class GeneratePem {

  /**
   * Create RSA Public Key PEM from Modulus and Exponent.
   * @param {*} moduleb64
   * @param {*} exponentb64
   */
  constructor(moduleb64, exponentb64) {
    this.moduleb64 = moduleb64
    this.exponentb64 = exponentb64
  }

  pem() {
    let key = new GenerateRsaKeyPem(this.moduleb64, this.exponentb64)
    return key.generatePem()
  }
}
