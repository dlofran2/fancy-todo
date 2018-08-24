import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classNames from 'classnames';

import styles from './NewListForm.scss';

const required = value => {
    if (!value) {
        return 'Todo title is required'
    }
}

const renderField = ({
    input,
    type,
    placeholder,
    meta: { touched, error }
}) => (
        <div className={styles.completeInput}>
            <input
                {...input}
                placeholder={placeholder}
                type={type}
                autocomplete="off"
            />
            {touched &&
                (error && <div className={styles.error}>{error}</div>)}
        </div>
    )

let NewListForm = props => {
    const { handleSubmit, onCancel } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="newListTitle"
                component={renderField}
                type="text"
                placeholder="New list title"
                validate={[required]}
            />
            <div className={styles.buttonContainer}>
                <button
                    className={classNames(styles.standardButton, styles.standardButtonSecondary)}
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className={styles.standardButton}
                    type="submit"
                >
                    Add new list
                </button>
            </div>
        </form>
    );
}

NewListForm = reduxForm({
    form: 'newList',
})(NewListForm)

export default NewListForm
