import {useEffect, useState} from "react";
import {useWindowSize} from "react-use";

interface PaginatedGalleryState {
    count: number;
    perPage: number;
    page: number;
}

export interface PaginationInfo<T> extends PaginatedGalleryState{
    paginatedElements: ReadonlyArray<T>;
    onSetPage: (page: number) => void;
}

const ROWS_PER_PAGE = 2;

export const usePaginatedGallery = <T>(cardContainerId: string, elements: ReadonlyArray<T>): PaginationInfo<T> => {
    const { width: windowSizeWidth, height: windowSizeHeight } = useWindowSize();

    const [paging, setPaging] = useState<PaginatedGalleryState>({
        count: elements.length,
        perPage: ROWS_PER_PAGE * 2,
        page: 1
    });

    const [paginatedElements, setPaginatedElements] = useState<ReadonlyArray<T>>([]);

    useEffect(() => {
        const gallery = document.getElementById(cardContainerId);
        if (gallery && gallery.children.length > 0) {
            const first = gallery.children.item(0)!;
            const elementsPerRow = [...gallery.children].filter(c => 'offsetTop' in first && 'offsetTop' in c && first.offsetTop === c.offsetTop).length;
            setPaging(prev => ({
                count: elements.length,
                perPage: ROWS_PER_PAGE * elementsPerRow,
                page: Math.min(prev.page, elements.length / (ROWS_PER_PAGE * elementsPerRow))
            }));
        }
    }, [windowSizeWidth, windowSizeHeight, cardContainerId, elements.length]);

    useEffect(() => {
        setPaginatedElements(elements.slice((paging.page - 1) * paging.perPage, paging.page * paging.perPage));
    }, [paging, elements]);

    const onSetPage = (page: number) => {
        setPaging(prev => ({...prev, page}));
    };

    return {
        ...paging,
        paginatedElements,
        onSetPage
    };
};
