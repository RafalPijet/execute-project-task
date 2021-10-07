import { Action } from 'redux';
import { RootState } from '../store';
import { Launch } from '../../globalTypes';

//ACTIONS NAMES
export const LOAD_LAUNCHES = 'launches/load_launches';

//ACTIONS TYPES
export interface LoadLaunchesAction extends Action<typeof LOAD_LAUNCHES> {
    payload: Launch[]
}

//CREATORS OF ACTIONS
export const loadLaunches = (launches: Launch[]): LoadLaunchesAction => ({
    type: LOAD_LAUNCHES,
    payload: launches
})

//SELECTORS
export const getGeneralLaunches = (rootState: RootState) => rootState.launches;
export const getLaunches = (rootState: RootState) => getGeneralLaunches(rootState).launches;