import React, {
  useState, // hook for using states from function comps
  useReducer, // hook for managing the state of comps with a reducer
  useEffect // hook for performing side effects from function comps (life cycle methods)
} from 'react';

/**
 * Hooks allow you to have STATEFUL functional components!
 * you get state and lifecycle methods for functional components
 *
 * useEffect (lifecycle methods)
 *   - componentDidMount: useEffect(() => { // do on componentDidMount}, [])
 *   - componentDidUpdate: useEffect(() => { // do on componentDidUpdate}, [stuff])
 *   - componentWillUnmount: useEffect(() => { return () => { // run before component unmounts }})
 *   - useful for fetching data, manually changing DOM (document.title), setting up subscription
 */

import './App.css';

const initUser = {
  name: 'Jim',
  age: 36,
  description: 'Quite average',
  hasPets: true
};

const App = () => {
  return (
    <div className="App">
      <UserForm />
      <hr />
      <EmailForm />
      <hr />
      <UserCard />
    </div>
  );
};

/// EmailForm - useState, useEffect
// modifies the user
const EmailForm = props => {
  const [email, setEmail] = useState('user@email.com');
  const [emailModifiedCount, setEmailModifiedCount] = useState(0);

  const handleInputChange = ({ target }) => {
    let { value } = target;
    setEmail(value);
  };

  useEffect(
    () => {
      setEmailModifiedCount(emailModifiedCount + 1);
    },
    // on email change
    [email]
  );

  return (
    <div>
      <h1>My Email</h1>
      <p>Email: {email}</p>
      <label htmlFor="email">Update Email</label>
      <input type="text" name="email" value={email} onChange={handleInputChange} />
      <p> Times modified: {emailModifiedCount}</p>
    </div>
  );
};

/// UserForm - useReducer
const initialFormState = {
  ...initUser
};

const formDataReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  };
};

const UserForm = props => {
  const [formData, dispatch] = useReducer(formDataReducer, initialFormState);

  const handleInputChange = ({ target }) => {
    let { name, type, value } = target;
    value = type === 'checkbox' ? target.checked : value;

    dispatch({ name, type, value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="user-form">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} />

        <label htmlFor="age">Age</label>
        <select id="age" name="age" value={formData.age} onChange={handleInputChange}>
          {Array.from(Array(100).keys())
            .splice(1)
            .map(a => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
        </select>
        <label htmlFor="hasPets">Has Pets?</label>
        <input id="hasPets" type="checkbox" name="hasPets" checked={formData.hasPets} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const UserCard = props => {
  const [user, setUser] = useState(null);

  const fetchUserData = () => {
    fetch(`https://reqres.in/api/users/${Math.ceil(Math.random() * 3)}`)
      .then(res => {
        res.json().then(({ data }) => {
          setUser(data);
        });
      })
      .catch(err => console.log(err));
  };

  // componentDidMount
  useEffect(() => {
    alert('First time: componentDidMount');
    fetchUserData();
  }, []);

  // componentDidUpdate() {state.user !== newState.user}
  useEffect(
    () => {
      alert('user has been updated');
    },
    [user]
  );

  return (
    <div className="user-card">
      {!!user ? (
        <div>
          <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
          <h5>
            {user.first_name} {user.last_name}
          </h5>

          <button onClick={fetchUserData}>{'Get new user '}</button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
