export const initialState = {
  circles: [{ counter: 0, color: "Yellow" }],
  users: [
    {
      id: 5058,
      uid: "44f5294b-443b-4d53-90fa-aaa128c1d9ec",
      password: "74SApucLFO",
      first_name: "Charles",
      last_name: "Aufderhar",
      username: "charles.aufderhar",
      email: "charles.aufderhar@email.com",
      avatar:
        "https://robohash.org/consequaturillumquia.png?size=300x300\u0026set=set1",
      gender: "Non-binary",
      phone_number: "+598 1-475-547-5396 x326",
      social_insurance_number: "257316737",
      date_of_birth: "1986-10-04",
      employment: { title: "IT Specialist", key_skill: "Teamwork" },
      address: {
        city: "Port Numbers",
        street_name: "Jenkins Haven",
        street_address: "2992 Price Lane",
        zip_code: "31479",
        state: "Nevada",
        country: "United States",
        coordinates: { lat: 71.02374170016759, lng: -121.69331303113393 },
      },
      credit_card: { cc_number: "4301292427331" },
      subscription: {
        plan: "Professional",
        status: "Active",
        payment_method: "Cheque",
        term: "Full subscription",
      },
    },
  ],
  selectedUser: 0,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_CIRCLE":
      return {
        ...state,
        circles: action.value,
      };

    case "SET_USERS":
      return {
        ...state,
        users: action.value,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selectedUser: action.value,
      };
    default:
      return state;
  }
};
export default reducer;
