import {Post} from "./entities";
import {Params} from "./params";
import {UI} from "./UI";

export interface State {
    entities: {
        Posts: any
        Comments: any
        Users: any
    }
    params: Params
    UI: UI
    router: any
}
