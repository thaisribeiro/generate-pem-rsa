export default class GenerateRsaKeyPem {
  constructor(mb64, eb64) {
    this.mb64 = mb64
    this.eb64 = eb64
  }

  /**
   *
   * @param {*} hextStr
   */
  preparedSigned(hexStr) {
    const msb = hexStr[0]
    if ((msb >= '8' && msb <= '9') ||
      (msb >= 'a' && msb <= 'f') ||
      (msb >= 'A' && msb <= 'F')) {

      return '00' + hexStr
    }

    return hexStr
  }

  /**
   *
   * @param {*} number
   */
  toHex(number) {
    const nstr = number.toString(16)

    if (nstr.length % 2 === 0) return nstr

    return '0' + nstr
  }

  /**
   *
   * @param {*} n
   */
  encodeLengthHex(n) {
    if (n <= 127) return this.toHex(n)

    const nHex = this.toHex(n)
    const lenghtOfLenghtByte = 128 + nHex.length / 2
    return this.toHex(lenghtOfLenghtByte) + nHex
  }

  /**
   *
   */
  generatePem() {
    const module = Buffer.from(this.mb64, 'base64')
    const exponent = Buffer.from(this.eb64, 'base64')
    let moduleHex = module.toString('hex')
    let exponentHex = exponent.toString('hex')

    moduleHex = this.preparedSigned(moduleHex)
    exponentHex = this.preparedSigned(exponentHex)

    const modlen = moduleHex.length / 2
    const explen = exponentHex.length / 2
    const encodedModLen = this.encodeLengthHex(modlen)
    const encodedExpLen = this.encodeLengthHex(explen)
    const encodedPubKey = '30' + this.encodeLengthHex(
      modlen
      + explen
      + encodedModLen.length / 2
      + encodedExpLen.length / 2 + 2) +
      '02' + encodedModLen + moduleHex +
      '02' + encodedExpLen + exponentHex

    let seq2 = '30 0d ' +
      '06 09 2a 86 48 86 f7 0d 01 01 01' +
      '05 00 ' +
      '03' + this.encodeLengthHex(encodedPubKey.length / 2 + 1)
      + '00' + encodedPubKey

    seq2 = seq2.replace(/ /g, '')

    let derHex = '30' + this.encodeLengthHex(seq2.length / 2) + seq2

    derHex = derHex.replace(/ /g, '')

    const der = Buffer.from(derHex, 'hex')
    const derB64 = der.toString('base64')
    const pem = '-----BEGIN PUBLIC KEY-----\n'
      + derB64.match(/.{1,64}/g).join('\n')
      + '\n-----END PUBLIC KEY-----\n'

    return pem
  }
}
