import Mock from 'mockjs';

import { getDataSuccess } from "./request/example";


Mock.setup({
    timeout: 400,
});



Mock.mock('/success', getDataSuccess);


export default Mock
