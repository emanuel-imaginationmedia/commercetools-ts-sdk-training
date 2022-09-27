import { CustomerDraft } from "@commercetools/platform-sdk";
import {
    createCustomer,
    getCustomerById,
    getCustomerByKey,
    createCustomerToken,
    confirmCustomerEmail,
    assignCustomerToCustomerGroup,
} from "./handson/customer";
import { log } from "./utils/logger";

const customerDraft: CustomerDraft = {
    firstName: "Emanuel",
    lastName: "Massafera Magalhães",
    email: "emanuel@test.com",
    password: "password",
    key: "emm-customer",
    addresses: [
        {
            country: "US",
            key: "emm-customer-address"
        }
    ],
    defaultBillingAddress: 0,
    defaultShippingAddress: 0
};

// createCustomer(customerDraft).then(log).catch(log);

// getCustomerByKey(customerDraft.key!).then(log).catch(log);

// getCustomerByKey(customerDraft.key!)
//     .then(createCustomerToken)
//     .then(confirmCustomerEmail)
//     .then(log)
//     .catch(log);

assignCustomerToCustomerGroup(customerDraft.key!, "vip-customers")
    .then(log)
    .catch(log);
