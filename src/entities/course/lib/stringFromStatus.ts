import { Status } from '../model/status';

export const stringFromStatus = (status: Status) => {
    switch (status) {
        case Status.notStarted: {
            return 'Не начат';
        }
        case Status.inProcess: {
            return 'В процессе';
        }
        case Status.completed: {
            return 'Завершен';
        }
    }
};
