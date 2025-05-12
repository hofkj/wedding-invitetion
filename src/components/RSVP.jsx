import React, { useReducer } from "react";

const initialState = {
  name: "",
  isAttending: "참석",
  guests: 1,
  participants: []
};

function rsvpReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_ATTENDING":
      return { ...state, isAttending: action.payload };
    case "SET_GUESTS":
      return { ...state, guests: action.payload };
    case 'ADD_PARTICIPANT':
        return {
            ...state,
            participants:[...state.participants, action.payload]
        }
    case "RESET":
      return {...initialState, participants:state.participants};
    default:
      return state;
  }
}

function RSVP() {
  const [state, dispatch] = useReducer(rsvpReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newParticipant={
        name:state.name,
        isAttending:state.isAttending,
        guests:state.guests
    }
    dispatch({type:'ADD_PARTICIPANT', payload:newParticipant})
    dispatch({type:'RESET'})
    // alert(`${state.name}님, ${state.isAttending} (${state.guests}명)`);
  }

return (
  <section>
    <h2>RSVP (참석여부)</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
        required    //필수적으로 입력해야한다는 뜻
      />
      <br />
      <select
        value={state.isAttending}
        onChange={(e) =>
          dispatch({ type: "SET_ATTENDING", payload: e.target.value })
        }
      >
        <option value="참석">참석</option>
        <option value="불참">불참</option>
      </select>
      <br />

      <input
        type="number"
        min="1"
        value={state.guests}
        onChange={(e) =>
          dispatch({ type: "SET_GUESTS", payload: e.target.value })
        }
      />
      <br />
      <button type="submit">제출</button>
    </form>

    <h3>참여자 리스트</h3>
    <ul>
        {state.participants.map((participants, index) => (
            <li key={index}>
                {participants.name} - {participants.isAttending} ({participants.guests}명)
            </li>
        ))}
    </ul>
  </section>
);

}


export default RSVP;