import React, {FC, memo} from 'react';
import { User } from './MainComponent';
import {Table} from "react-bootstrap"


interface UserInfoProps{
    user: User;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
    return <tr>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.gender}</td>
        <td>{user.ipAddress}</td>
        </tr>
}

export default memo(UserInfo);