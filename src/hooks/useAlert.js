import {useState} from 'react';

const useAlert = () => {
    const [alertShown,showAlert] = useState(false);
    return [alertShown,showAlert]
}

export default useAlert;