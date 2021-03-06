import { Routine } from 'redux-saga-routines';
import { IAuthorSettings } from '../../models/IAuthorSettings';
import { fetchGetAuthorSettingsRoutine } from '../../routines';
import { setNoAuthorizedRoutine } from '@screens/Home/routines';

const initSettings = {
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  avatar: undefined,
  location: undefined,
  company: undefined,
  job: undefined,
  website: undefined,
  twitter: undefined,
  biography: undefined
};

export const authorSettings = (state: IAuthorSettings = initSettings, action: Routine<any>) => {
  switch (action.type) {
    case fetchGetAuthorSettingsRoutine.SUCCESS:
      return action.payload;
    case setNoAuthorizedRoutine.TRIGGER:
      return initSettings;
    default:
      return state;
  }
};
