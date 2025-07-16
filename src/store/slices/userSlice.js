import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user slice",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    editUser(state, action) {},
    removeUser(state, action) {},
  },
});

export default userSlice.reducer;
