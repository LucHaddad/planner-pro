export type UseRole = "SUPERVISOR" | "EMPLOYER" | "ADMINISTRADOR";

export type User = {
    id:string;
    name: string;
    role: UseRole;
    avatar?: string;
}

export interface LoginCredentials
{
    email: string;
    password: string;
}

export interface LoginCredentials
{
    email: string;
    password: string;
}

export interface authState
{
 user: User | null;
 isAuthenticated: boolean;
 isLoading: boolean;
}
