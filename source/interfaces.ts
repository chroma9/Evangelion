export type Generic = {[key: string]: any};

export interface UserData {
    _id: string;
    username: string;
    discrim: string;
    avatar: string;
    eva: EVAMech;
}

export interface GuildData {
    _id: string;
    name: string;
    icon: string;
    region: string;
}

export interface EVAMech {
    id: string;
    name: string;
    color: string;
    atField: number;

}

export interface VoiceRegion {
    name: string;
    flag: string;
}
