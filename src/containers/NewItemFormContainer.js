import { divide } from 'lodash';
import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

const mapDispatchtoProps = {
    onSubmit: (name, price) => addNewItem(name,price)
};

export const NewItemFormContainer = connect(null, mapDispatchtoProps)(NewItemForm);