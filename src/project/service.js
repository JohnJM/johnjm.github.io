import {db} from '../db';

export const getProjects = () => {
    return db.projects;
}
