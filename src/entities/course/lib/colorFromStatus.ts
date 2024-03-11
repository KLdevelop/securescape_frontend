import { Color } from '@/shared/model';
import { Status } from '../model/status';

export const colorFromStatus = (status: Status): Color => {
    switch (status) {
        case Status.notStarted: {
            return Color.lightBlue;
        }
        case Status.inProcess: {
            return Color.orange;
        }
        case Status.completed: {
            return Color.green;
        }
    }
};
