## Front end web client

This project was bootstrapped using create-react-app

---

### React / Redux

#### Presentational and Container Components

Presentational components are in charge of how things look, ie. markup & styles. These components are not aware of redux store. They simply receive data from props and change data by invoking callbacks from props.

Container components are in charge of the logic, doing the heavy lifting, data fetching, state updates, etc. These components are aware of the redux store and subscribe to the redux state. They dispatch Redux actions.

#### Redux primer

##### Actions

Actions represent what can and does happen in the application

##### Reducers

Reducers hold the logic that takes the actions and updates the state

##### Store

The store is what holds the state of the application. It allows access to read the state, updates to the state via dispatch(action). Listeners can be registered via subscribe(listener). Listeners can additionally be unsubscribed by invoking the function returned from calling subscribe(listener).
