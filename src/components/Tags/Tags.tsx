import {FunctionComponent, PropsWithChildren} from "react";
import {LabelGroup} from "@patternfly/react-core";

export const Tags: FunctionComponent<PropsWithChildren> = ({children}) => {
    return <LabelGroup onClick={() => {
        console.log('label group click');
    }
    }>
        {children}
    </LabelGroup>;
};
