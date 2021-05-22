// Response body definitions originally auto-generated by MakeTypes (https://jvilk.com/MakeTypes/) then refined for readability
export interface Article {
    reviewHistory?: (string)[] | null;
    keywords?: (null)[] | null;
    libraryId: string;
    creatorId: string;
    description: string;
    type: string;
    locale: string;
    lastModifierId: string;
    links: Links;
    id: string;
    systemModified: string;
    rev: string;
    thumbnail: Ref;
    kind?: (null)[] | null;
    created: string;
    classification: string;
    tags?: (null)[] | null;
    elements: Elements;
    name: string;
    typeId: string;
    lastModified: string;
    status: string;
}

export interface Element {
    elementType: string;
    value?: string;
    values?: string[];
    typeRef?: Ref;
}

export interface MainImageElement {
    elementType: string;
    value: MainImageValue;
    typeRef: Ref;
}

export interface Elements {
    heading: Element;
    author: Element;
    body: Element;
    date: Element;
    mainImage: MainImageElement;
}

export interface Links {
    thumbnail: Link;
    retire: Link;
    draft: Link;
    self: Link;
    type: Link;
}

export interface Link {
    href: string;
}

export interface MainImageValue {
    leadImage: LeadImage;
    leadImageCaption: Element;
    leadImageCredit: Element;
}

export interface LeadImage {
    mode: string;
    profiles?: (string)[] | null;
    renditions: Renditions;
    asset: Asset;
    elementType: string;
    url: string;
}

export interface Renditions {
    lead: Rendition;
    card: Rendition;
    default: Rendition;
}

export interface Rendition {
    source?: string;
    width: number;
    height: number;
    transform?: Transform;
    url: string;
}

export interface Transform {
    scale: number;
    crop: Crop;
}

export interface Crop {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Asset {
    fileName: string;
    altText: string;
    fileSize: number;
    width: number;
    mediaType: string;
    id: string;
    resourceUri: string;
    height: number;
}

export interface Ref {
    id: string;
    url?: string;
}
