import axios from 'axios';
import { Topic } from '..';

export const getAllTopics = async (): Promise<Topic[]> => {
    return (await axios.get<Topic[]>('/api/topics')).data;
};
