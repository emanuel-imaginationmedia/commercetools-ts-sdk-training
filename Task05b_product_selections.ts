import { getProductsInStore, addProductSelectionToStore } from "./handson/store";
import {
    getProductSelectionByKey,
    createProductSelection,
    addProductsToProductSelection,
    getProductsInProductSelection
} from "./handson/productSelections";

import { log } from "./utils/logger";

const productSelectionKey = "emm-store-selection";

// createProductSelection(productSelectionKey, "EMM Store Selection").then(log).catch(log);

// getProductSelectionByKey(productSelectionKey).then(log).catch(log);

// addProductsToProductSelection(productSelectionKey, ['tulip-seed-product']).then(log).catch(log);

getProductsInProductSelection(productSelectionKey).then(log).catch(log);

// addProductSelectionToStore("emm-store", productSelectionKey).then(log).catch(log);

// getProductsInStore("berlin-store").then(log).catch(log);