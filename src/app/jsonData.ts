export interface IData{
    heading ?: string;
    description ?: string;
    snippets ?: string[];
    locations ?: string[];
    ["vedio-embed"] ?: string;
    quote ?: Iquote;
    gallery ?: IGallery[];
    ["episode-list"] ?: IEpisode[];
}

export interface IGallery{
    src ?: string;
    text ?: string;
}

export interface IEpisode{
season ?: string;
name ?: string;
rating ?: number;
}

export interface Iquote{
    text ?: string;
    author ?: string;
}