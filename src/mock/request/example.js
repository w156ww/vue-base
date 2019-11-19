import {SUCCESS, ERROR} from "../status";
import data from '../db/example';

function getDataSuccess() {
    SUCCESS.data = data;
    return SUCCESS;
}



export {
    getDataSuccess
};
