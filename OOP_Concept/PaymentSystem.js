// Online Payment System
class Payment {
    constructor(amount, date) {
      this.amount = amount;
      this.date = date;
    }
  }
  
  class CreditCardPayment extends Payment {
    #cardNumber;
  
    constructor(amount, date, cardNumber) {
      super(amount, date);
      this.#cardNumber = cardNumber;
    }
  
    getMaskedCardNumber() {
      return `**** **** **** ${this.#cardNumber.slice(-4)}`;
    }
  }
  
  class PayPalPayment extends Payment {
    constructor(amount, date, email) {
      super(amount, date);
      this.email = email;
    }
  
    getEmail() {
      return this.email;
    }
  }
  
  class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
      super(amount, date);
      this.walletAddress = walletAddress;
    }
  
    getWalletAddress() {
      return `${this.walletAddress.slice(0, 6)}...${this.walletAddress.slice(-4)}`;
    }
  }
  
  const creditCardPayment = new CreditCardPayment(150, '2025-02-04', '1234567890123456');
  const paypalPayment = new PayPalPayment(200, '2025-02-04', 'user@example.com');
  const cryptoPayment = new CryptoPayment(300, '2025-02-04', '1A2b3C4d5E6f7G8h9I0j');
  
  console.log(`Credit Card Payment: $${creditCardPayment.amount}, Card: ${creditCardPayment.getMaskedCardNumber()}`);
  console.log(`PayPal Payment: $${paypalPayment.amount}, Email: ${paypalPayment.getEmail()}`);
  console.log(`Crypto Payment: $${cryptoPayment.amount}, Wallet: ${cryptoPayment.getWalletAddress()}`);
  