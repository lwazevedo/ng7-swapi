export interface Menu {
    header?: string;
    icon?: string;
    link?: string;
    title?: string;
    sublinks?: Menu[];
    target?: string;
    external?: boolean;
    description?: string;
    order?: number;
}