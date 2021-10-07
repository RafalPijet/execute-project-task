import {
    LOAD_LAUNCHES,
    LoadLaunchesAction
} from '../actions/launchesActions';
import { Launch } from '../../globalTypes';

export interface LaunchState {
    launches: Launch[] | null;
    selectedLaunch: Launch | null;
}

const initialState: LaunchState = {
    launches: null,
    selectedLaunch: null
}

const launchesReducer = (
    state: LaunchState = initialState,
    action: LoadLaunchesAction
) => {
    switch (action.type) {
        case LOAD_LAUNCHES:
            return { ...state, launches: action.payload }
        default:
            return { ...state }
    }
}

export default launchesReducer;