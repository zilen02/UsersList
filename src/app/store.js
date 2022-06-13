import { configureStore } from "@reduxjs/toolkit";

import { userListApi } from "../service/userListApi";

export default configureStore({
  reducer: {
    [userListApi.reducerPath]: userListApi.reducer,
  },
});
