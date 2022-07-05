import Plant from "./Plant"
export default interface User{
    _id?: string;

    name: string;

    username: string;
    password: string;

    plants: [Plant];


}