// emailValidator.js
// Funzione per validare indirizzi email secondo uno standard semplice ma efficace.

const EmailValidator = {
  /**
   * Valida se una stringa è un indirizzo email valido.
   * @param {string} email
   * @returns {boolean}
   */
  isValid(email) {
    if (typeof email !== 'string') return false;
    // Regex semplice per email valide (non perfetta, ma adatta alla maggior parte dei casi)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
};

// Esempi:
// console.log(EmailValidator.isValid('test@example.com')); // true
// console.log(EmailValidator.isValid('invalid-email'));    // false

export default EmailValidator;
