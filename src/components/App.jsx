import { getIsLoading, getError } from 'Redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/operations';
import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter/index';
import { ContactList } from './ContactList';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Loading contacts...</b>}
      {!isLoading && <ContactList />}
    </>
  );
};
