import { useContext } from "react";
import Avatar from '@mui/material/Avatar';
import { userContext } from "../../App";

export default () => {
    const { user } = useContext(userContext);

    const getInitials = (userName:string) => {
        return (userName.charAt(0).toUpperCase());
    };

    return (
        <Avatar
            sx={{
                bgcolor: "#722F37",
                position: 'fixed',
                // top: 60,
                left: 30,
                zIndex: 100000000,
            }}
        >
            {getInitials(user.username ? user.username : '')}
        </Avatar>
    );
};
