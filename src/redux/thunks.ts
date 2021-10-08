import { ThunkAction } from "redux-thunk";
import axios, { AxiosResponse } from 'axios';
import { RootState } from './store';
import {
    StartRequestAction,
    StopRequestAction,
    ErrorRequestAction,
    startRequest,
    stopRequest,
    errorRequest,
} from './actions/requestActions';
import { LoadLaunchesAction, AddLaunchAction, SetSelectedLaunchAction, loadLaunches, addLaunch, setLaunch } from './actions/launchesActions';
import { Launch, Ship } from '../globalTypes';

export const getLaunchesRequest = (page: number): ThunkAction<
    Promise<void>,
    any,
    RootState,
    StartRequestAction | StopRequestAction | ErrorRequestAction | AddLaunchAction
> => async (dispatch, getState) => {
    dispatch(startRequest());

    try {
        // await new Promise(resolve => setTimeout(resolve, 5000))
        const res: AxiosResponse = await axios.get(
            `https://api.spacex.land/rest/launches?limit=6&offset=${page * 10}`
        );
        let fetchedData: any[] = res.data;
        if (fetchedData) {
            const result: Launch[] = fetchedData.map((item: any) => {
                return {
                    id: item.id,
                    name: item.mission_name,
                    description: item.details,
                    date: item.launch_date_local,
                    images: item.ships,
                };
            });
            result.forEach(async (item: Launch) => {
                if (item.images.length) {
                    const response: AxiosResponse = await axios.get(
                        `https://api.spacex.land/rest/ship/${item.images[0].id}`
                    );
                    let fechedShip: any = response.data;
                    if (fechedShip) {
                        let image = {
                            id: item.id,
                            name: fechedShip.name,
                            image: fechedShip.image,
                        }
                        item.images = [image];
                        dispatch(addLaunch(item))
                    }
                }
            })
        }
        dispatch(stopRequest());
    } catch (err: any) {
        if (err.response !== undefined) {
            err.response.data.message ?
                dispatch(errorRequest({ isError: true, message: err.response.data.message })) :
                dispatch(errorRequest({ isError: true, message: 'Coś poszło nie tak!' }));
        } else {
            dispatch(errorRequest({ isError: true, message: 'Coś poszło nie tak!' }));
        }
    }
}

export const addLaunchToFavorites = (): ThunkAction<
    Promise<void>,
    any,
    RootState,
    SetSelectedLaunchAction
> => async (dispatch, getState) => { }