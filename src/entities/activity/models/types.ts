export enum ActivityAction {
    achievement = 'Получил достижение',
}

export type Activity = {
    userName: string;
    action: ActivityAction;
    actionValue: string;
};
