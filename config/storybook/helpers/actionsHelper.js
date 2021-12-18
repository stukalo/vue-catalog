export const createActionHandlers = ({ actions, handler }) => {
  return actions.reduce((acc, action) => {
    acc[action] = (ctx, payload) => handler(action, payload);
    return acc;
  }, {});
};
