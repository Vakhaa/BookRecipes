import React from 'react'
import { connect } from 'react-redux'
import { addIngredient } from '../../actions/Book'

const AddToBook = ({ dispatch, name }) => {
    let input

    return (
        <div className="AddToBook">
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    switch (name) {
                        case 'ingredient':
                            dispatch(addIngredient(input.value))
                            break;
                        case 'recipe':
                            //dispatch(addIngredient(input.value))
                            break;
                        case 'category':
                            //dispatch(addIngredient(input.value))
                            break;
                        case 'child_category':
                            //dispatch(addIngredient(input.value))
                            break;
                    }
                    
                    input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add {name}</button>
            </form>
        </div>
    )
}

export default connect()(AddToBook)