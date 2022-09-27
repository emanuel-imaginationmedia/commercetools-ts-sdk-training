import { StateDraft } from "@commercetools/platform-sdk";
import * as states from "./handson/states";
import { log } from "./utils/logger";

const orderPackedStateDraft: StateDraft = {
    key: "emm-order-packed",
    type: "OrderState",
    name: {
        de: "EMM Order Packed ",
        en: "EMM Order Packed ",
    },
    initial: true,
};

const orderCompletedStateDraft: StateDraft = {
    key: "emm-order-completed",
    type: "OrderState",
    name: {
        de: "EMM Order Completed ",
        en: "EMM Order Completed ",
    },
    initial: false,
};

const createStatesWithTransitions = async () => {
    let orderPackedState = await states.createNewState(orderPackedStateDraft)
    let orderCompletedState = await states.createNewState(orderCompletedStateDraft)

    orderPackedState = await states.addTransition(orderPackedState.body.key, [orderCompletedState.body.key])

    orderCompletedState = await states.addTransition(orderCompletedState.body.key, [])

    return orderPackedState;
};

createStatesWithTransitions().then(log).catch(log)

// states.getStateByKey(orderPackedStateDraft.key).then(log).catch(log)