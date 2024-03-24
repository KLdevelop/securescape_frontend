import './UsersRating.scss';

type UsersRating = {
    users: {
        userName: string;
        score: number;
    }[];
};

export const UsersRating = ({ users }: UsersRating) => {
    return (
        <section className="usersRating block card">
            <h2 className="h2">Рейтинг пользователей</h2>
            <ol className="usersRating__leaderboard">
                {users.slice(0, 10).map(({ userName, score }, index) => (
                    <li
                        className="field usersRating__leaderboard__user"
                        key={userName + score}
                    >
                        <span>{index + 1}.</span>
                        <span>{userName}</span>
                        <span>{score}</span>
                    </li>
                ))}
            </ol>
        </section>
    );
};
