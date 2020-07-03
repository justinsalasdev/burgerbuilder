import {useState} from 'react';

const useAlert = (initialState) => {
    const [alertShown,showAlert] = useState(initialState);
    return [alertShown,showAlert]
}

export default useAlert;