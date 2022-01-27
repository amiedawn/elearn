const initState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const postReducer = (state = initState, action) => {
   
    switch (action.type) {
      case "FETCH_USERS_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "FETCH_USERS_SUCCESS":
        return {
          ...state,
          loading: false,
          items: action.payload,
          // change here to filter data
        //   items: action.payload.filter(
        //     (x) => x.home_team_country === "USA" || x.away_team_country === "USA"
        //   ),
        };
      case "FETCH_USERS_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        case "ADD_USER_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "ADD_USER_SUCCESS":
        return {
          ...state,
          loading: false,
          items: action.payload,
        };
      case "ADD_USER_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.error,
        };


      default:
        return state;
    }
  };
  
  export default postReducer;