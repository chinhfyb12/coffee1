import { useRef } from "react";

const useComponentWillMount = func => {
    const willMount = useRef(true);

    if(willMount.current) {
        func();
    }
}
export default useComponentWillMount;