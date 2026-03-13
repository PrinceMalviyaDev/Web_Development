// Factory Design Pattern + Dependendency Injection Design : 

interface PaymentGateway {
    processPayment(amount: number):Promise<boolean>;
}

class PhonePe implements PaymentGateway {
    processPayment(amount: number):Promise<boolean> {
        
        return new Promise((resolve) => {
            console.log("Processing the amount: ", amount);
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    }
}

class Pay {
    constructor(private paymentGateway: PaymentGateway){}
    pay(amount: number){
        return this.paymentGateway.processPayment(amount);
    }
}

(async function() {
    let pg: Pay = new Pay(new PhonePe());
    await pg.pay(5000) ? console.log("Payment Successful.") : console.log("Payment Failed!");
})()


