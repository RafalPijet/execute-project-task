import {
    LOAD_LAUNCHES,
    ADD_LAUNCH,
    SET_SELECTED_LAUNCH,
    LoadLaunchesAction,
    AddLaunchAction,
    SetSelectedLaunchAction
} from '../actions/launchesActions';
import { Launch } from '../../globalTypes';

export interface LaunchState {
    launches: Launch[];
    selectedLaunch: Launch | null;
}

const initialState: LaunchState = {
    launches: [],
    selectedLaunch: null
}

const launchesReducer = (
    state: LaunchState = initialState,
    action: LoadLaunchesAction | AddLaunchAction | SetSelectedLaunchAction
) => {
    switch (action.type) {
        case LOAD_LAUNCHES:
            return { ...state, launches: action.payload }
        case ADD_LAUNCH:
            return { ...state, launches: [...state.launches, action.payload] }
        case SET_SELECTED_LAUNCH:
            return { ...state, selectedLaunches: action.payload }
        default:
            return { ...state }
    }
}

export default launchesReducer;