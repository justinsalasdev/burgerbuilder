import {useState} from 'react';

const useAlert = () => {
    const [modalShown,showModal] = useState(false);
    return [modalShown,showModal]
}
export default userAlert;