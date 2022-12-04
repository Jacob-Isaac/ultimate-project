import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "portfolioList",
  initialState: {
    portfolioList: [],
    isPageLoading: "",
    lightMode: true,
  },
  reducers: {
    fetchPageLoad: (state) => {
      state.isPageLoading = "loading";
      console.log(state.isPageLoading);
    },
    setPortfolioList: (state, { payload: data}) => {
      state.portfolioList = data;
      state.ifLoading = "success";
      console.log(state.portfolioList);
    },
    setError: (state) => {
      state.ifLoading = "error";
   },
   changeTheme: (state) => {
    state.lightMode = !state.lightMode;
    console.log(state.lightMode);
   },
  
  },
});

export const {
fetchPageLoad,
setPortfolioList,
setError,
changeTheme
} = dataSlice.actions;

export const selectPortfolioList = (state) => state.portfolioList.portfolioList;
export const selectLoadingState = (state) => state.portfolioList.ifLoading;
export const selectIsLightMode = (state) => state.portfolioList.lightMode;
// export const getMovieById = (state, movieId) =>
//   selectMoviesDetails(state).movieDetails.find(({ id }) => id === movieId);

export default dataSlice.reducer;
