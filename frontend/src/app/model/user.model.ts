import { Role } from "./role.model";
import { Image } from './image.model'

export interface User {
    id: string;
    username: string;
    password: string;
    email: string;

    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    photo: Image;
    avatar: Image;

    onCreate: Date;
    onUpdate: Date;
    isActive: boolean;
    role: Role;
}
