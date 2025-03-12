import {ReactNode} from "react";

export type ReactChildren = {
    children: ReactNode
    title: string
}

export enum TDirections {
    ASC = 'ASC',
    DESC = 'DESC',
}

export enum Type {
    CLASSIC = "CLASSIC",
    SERVER_SIDE = "SERVER_SIDE",
    MVT = "MVT"
}

export enum Status {
    DRAFT = "DRAFT",
    ONLINE = "ONLINE",
    PAUSED = "PAUSED",
    STOPPED = "STOPPED",
}

export enum StatusColor {
    DRAFT = "#5C5C5C",
    ONLINE = "#4CAF50",
    PAUSED = "#FF8346",
    STOPPED = "#FE4848",
}

export type Site = {
    id: number;
    url: string;
};

export type Test = {
    id: number;
    name: string;
    type: Type;
    status: Status;
    siteId: number;
};

export type TestWithSite = Omit<Test, 'siteId'> & {
    siteUrl: string;
};


export type TestKeys = keyof TestWithSite

export type TSort = {
    key: TestKeys;
    direction: TDirections;
}