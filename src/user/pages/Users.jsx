import { UsersList } from "../components/UsersList";

export const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Gab',
            image: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/446856820_1675578019860694_8926804066014055596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEZwWpP2BtsxS9iFzURv_GQ7c1EZocHEvXtzURmhwcS9ZfWvCtE7jlgFp3_i9t83ligFWpQk9B6YZmkawnwaH-6&_nc_ohc=Xhg14W6C1lUQ7kNvgHx15Yd&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=ASVNmt7CDSWIxkWZnBApsZJ&oh=00_AYDyRVdDM2XO_gPVdYycVUO_5L8b_5RrfuA5vJnkViZ74A&oe=671ED03C',
            places: 3
        }
    ];

    return (
        <UsersList users={USERS} />
    );
};