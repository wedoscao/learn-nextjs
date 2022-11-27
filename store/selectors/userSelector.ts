import { User } from "../reducers/userReducer";
import { State } from "..";

const userSelector = (state: State) => state.user as User;

export default userSelector;
