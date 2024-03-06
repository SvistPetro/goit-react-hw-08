import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import Form from './components/Form/Form'
import ContactList from './components/ContactList/ContactList'
// import Filter from './components/Filter/Filter'
// import { selectContactList } from './redux/contacts/selectors'
import { selectLoading } from '../redux/tasks/selectors'


const Contacts = () => {
    // const contacts = useSelector(selectContactList);
    const isLoading = useSelector(selectLoading);

    return (
        <div>
            <Helmet>
                <title>Your tasks</title>
            </Helmet>
            <div>
                <h1>Phonebook</h1>
                <Form />

                <h2>Contacts</h2>
                <div>{isLoading && 'Request in progress...'}</div>
                {/* {contacts.length > 0 && <Filter />} */}
                <ContactList />
            </div>
        </div>
    )
}

export default Contacts