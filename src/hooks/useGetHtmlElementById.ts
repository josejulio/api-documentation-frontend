import {useEffect, useState} from "react";

interface GetElementByIdState {
    retry: number;
    element: HTMLElement | undefined;
}

export const useGetHtmlElementById = (elementId: string, retryTimes: number = 3) => {
    const [state, setState] = useState<GetElementByIdState>({
        element: undefined,
        retry: 0
    });

    useEffect(() => {
        const foundElement = document.getElementById(elementId);
        if (foundElement) {
            setState({
                retry: 0,
                element: foundElement
            });
        } else {
            setState(prev => ({
                element: undefined,
                retry: Math.min(retryTimes, prev.retry)
            }))
        }
    }, [state]);

    return state.element;
}
