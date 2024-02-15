import { memo } from "react";

const User = ({users, onItemClick }) => {
    //const { name, email } = props;
    console.log("User render");

    return (
        <>
        {users.map((user, index) => {

            return (
                <div onClick={onItemClick} key={index}>
                <p>Name: {user.name.first} {user.name.last}</p>
                <p>Email: {user.email}</p>
                <hr />
            </div>
            )
        })}
      </>
    );
};

export default memo(User);