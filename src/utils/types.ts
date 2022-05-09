export interface IChatMessageItemProps {
    uid: string;
    displayName: string;
    photoURL: string;
    text: string;
    createdAt: string;

    me?: boolean;
}
