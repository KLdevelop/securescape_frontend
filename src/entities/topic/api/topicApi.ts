import { Topic } from '../models';
import { baseTaskUrl as baseUrl, taskServiceClient } from '@/shared/api';

export const getAllTopics = async (): Promise<Topic[]> => {
    return (await taskServiceClient.get<{ topics: Topic[] }>(baseUrl + '/topics')).data.topics;
};
