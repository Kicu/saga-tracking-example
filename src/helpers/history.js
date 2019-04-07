import { locationChange } from '../redux/actions';

function historyHelper(history, store) {
  // listen to history changes and dispatch action
  history.listen((location, action) => {
    store.dispatch(locationChange(location, action));
  });

  // initial dispatch, because upon first page render the history doesn't "change" so listen won't trigger
  const { location, action } = history;
  store.dispatch(locationChange(location, action));
}

export { historyHelper };
