import { Action } from 'redux';
import { RootState } from '../store';
import { Launch } from '../../globalTypes';

//ACTIONS NAMES
export const LOAD_LAUNCHES = 'launches/load_launches';
export const ADD_LAUNCH = 'launches/add_launch';
export const SET_SELECTED_LAUNCH = 'launches/set_selected_launch';

//ACTIONS TYPES
export interface LoadLaunchesAction extends Action<typeof LOAD_LAUNCHES> {
    payload: Launch[]
}
export interface AddLaunchAction extends Action<typeof ADD_LAUNCH> {
    payload: Launch
}
export interface SetSelectedLaunchAction extends Action<typeof SET_SELECTED_LAUNCH> {
    payload: Launch
}

//CREATORS OF ACTIONS
export const loadLaunches = (launches: Launch[]): LoadLaunchesAction => ({
    type: LOAD_LAUNCHES,
    payload: launches
})
export const addLaunch = (launch: Launch): AddLaunchAction => ({
    type: ADD_LAUNCH,
    payload: launch
})
export const setLaunch = (launch: Launch): SetSelectedLaunchAction => ({
    type: SET_SELECTED_LAUNCH,
    payload: launch
})

//SELECTORS
export const getGeneralLaunches = (rootState: RootState) => rootState.launches;
export const getLaunches = (rootState: RootState) => getGeneralLaunches(rootState).launches;
export const getSelectedLaunch = (rootState: RootState) => getGeneralLaunches(rootState).selectedLaunch;