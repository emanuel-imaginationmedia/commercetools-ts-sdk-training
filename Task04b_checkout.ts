import * as checkout from "./handson/order";
import { createPayment } from "./handson/payment";
import { log } from "./utils/logger";

const customerKey = "emm-customer";
const cartId = "c550521c-2f0b-47c7-bf84-ed34de01bfd9";
const orderId = "2bc93631-c6b0-41f6-ae0e-2baaa0dd219c";

const paymentDraft = {
    key: "payment" + Math.random().toString(36).substring(2, 7),
    amountPlanned: {
        currencyCode: "EUR",
        centAmount: 5000
    },
    pspName: "We_Do_Payments",
    pspMethod: "CREDIT_CARD",
    interfaceId: "we_pay_73636" + Math.random(), // Must be unique.
    interactionId: "pay82626" + Math.random()
}

// create a cart and update the cartId variable
// checkout.createCart(customerKey).then(log).catch(log);

// checkout.addLineItemsToCart(cartId, ["tulip-seed-package"]).then(log).catch(log);

// checkout.addDiscountCodeToCart(cartId, "SUMMERSALE").then(log).catch(log);
// checkout.recalculate(cartId).then(log).catch(log);
// checkout.setShippingMethod(cartId).then(log).catch(log);

// create order from cart and update the orderId
// checkout.createOrderFromCart(cartId).then(log).catch(log);

// checkout.getOrderById(orderId).then(log).catch(log);

// set order state to confirmed and custom workflow state to order packed
// checkout.setOrderState(orderId, "Confirmed").then(log).catch(log);
// checkout.updateOrderCustomState(orderId, "emm-order-packed").then(log).catch(log);

const checkoutProcess = async () => {

    let emptyCart = await checkout.createCart(customerKey);

    let filledCart = await checkout.addLineItemsToCart(
        emptyCart.body.id, ["tulip-seed-package", "tulip-seed-package", "tulip-seed-package", "tulip-seed-package", "tulip-seed-package", "tulip-seed-package", "tulip-seed-package", "tulip-seed-package", "tulip-seed-package"]
    );

    filledCart = await checkout.addDiscountCodeToCart(
        filledCart.body.id, "SUMMERSALE"
    );


    filledCart = await checkout.recalculate(filledCart.body.id);
    filledCart = await checkout.setShippingMethod(filledCart.body.id);

    const payment = await createPayment(paymentDraft);
    filledCart = await checkout.addPaymentToCart(filledCart.body.id, payment.body.id);

    let order = await checkout.createOrderFromCart(filledCart.body.id);
    order = await checkout.setOrderState(order.body.id, "Confirmed");
    order = await checkout.updateOrderCustomState(order.body.id, "emm-order-packed");
    if (order) {
        return {
            status: 201,
            message: "order created: " + order.body.id,
        };
    }
};

checkoutProcess().then(log).catch(log);
