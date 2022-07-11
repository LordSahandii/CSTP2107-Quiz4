import Plant from "./Plant"
export default interface User{
    _id?: string;

    username: string;
    password: string;

    plants: [Plant];


}