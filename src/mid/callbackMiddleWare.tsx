function createMiddleware() {
    return ({ getState }: any) => (next: any) => (action: any) => {

        // si interessé, add previous route
        if (action.type.startsWith("@@router/LOCATION_CHANGE")) {
            action.payload.previousRoute = getState().router.location.pathname;
        }

        // then, just continue processing this action as usual
        return next(action);
    };
}

const mid = createMiddleware();

export default mid;
