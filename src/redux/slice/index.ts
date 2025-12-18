import { Reducer } from '@reduxjs/toolkit';
import projectsReducer from './projects';
import profileReducer from './profile';

export const slices: Record<string, Reducer> = {
    projects: projectsReducer,
    profile: profileReducer,
};