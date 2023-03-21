import {APIConfiguration, APIConfigurationIcons, pages} from "@apidocs/common";
import {CSSProperties, FunctionComponent, useMemo} from "react";
import {useNavigate} from "react-router";
import {Gallery, GalleryItem} from "@patternfly/react-core";
import {Card} from "../components/Card/Card";
import {Tag, Tags} from "../components/Tags";

interface GaleryProps {
    id?: string;
    minHeight?: number;
    elements: ReadonlyArray<APIConfiguration>;
    isHidden?: boolean
}

export const GalleryTemplate: FunctionComponent<GaleryProps> = ({id, minHeight, elements, isHidden}) => {
    const navigate = useNavigate();

    const style = useMemo<CSSProperties>(() => ({
        minHeight: minHeight,
        visibility: isHidden ? 'hidden' : undefined,
        overflow: isHidden ? 'hidden': '',
        height: isHidden ? 0 : ''
    }), [isHidden, minHeight]);

    return (
        <Gallery id={id} className="pf-u-m-md" style={style} minWidths={{default: '300px'}} hasGutter>
            { elements.map(apiConfig => (
                <GalleryItem key={apiConfig.displayName}>
                    <Card displayName={apiConfig.displayName} icon={apiConfig.icon ?? APIConfigurationIcons.GenericIcon} description={apiConfig.description} onClick={() => navigate(pages.getApiPage(apiConfig.id))}>
                        { apiConfig.tags.length > 0 && (
                            <div className="apid-tags__main">
                                <Tags>
                                    {apiConfig.tags.map(t => <Tag key={t.id} value={t} />)}
                                </Tags>
                            </div>
                        )}
                    </Card>
                </GalleryItem>
            ))}
        </Gallery>
    );
}
