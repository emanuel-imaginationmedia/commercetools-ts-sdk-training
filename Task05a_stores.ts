import { apiRoot } from "./handson/client";
import { getStoreByKey, getCustomersInStore, createInStoreCart } from "./handson/store";
import { getCustomerByKey } from "./handson/customer";
import { log } from "./utils/logger";

const storeKey = "emm-store";

// getStoreByKey(storeKey).then(log).catch(log);

// getCustomersInStore(storeKey)
//     .then(customers => {
//         log(customers.body.count);
//         customers.body.results.forEach(customer =>
//             log(customer.key)
//         )
//     })
//     .catch(log);

getCustomerByKey("emm-customer")
    .then(customer => {
        createInStoreCart(storeKey, customer)
            .then(log)
            .catch(log);
    })
    .catch(log);