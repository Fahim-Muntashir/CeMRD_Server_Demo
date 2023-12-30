export type TUserRole = 'admin' | 'user' | 'faculty';

export type TUser = {
    email: string;
    name: string;
    profileURL: string;
    role: TUserRole;
}