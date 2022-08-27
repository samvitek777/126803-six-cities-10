import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {User} from '../../types/comment';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getCurrentUser = (state: State): User | undefined => state[NameSpace.User].currentUser;

