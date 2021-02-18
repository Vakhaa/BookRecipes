import React from 'react'
import { connect } from 'react-redux'
import { fetchFromBook } from '../../actions/Book'

const GetFromBook = ({ dispatch, name }) => {

    return (
        <div className="GetFromBook">
            <button type="submit"
                onClick={e => {
                e.preventDefault()
                switch (name) {
                    case 'ingredient':
                        dispatch(fetchFromBook('Ingredients','Ingredients'))
                        break;
                    case 'recipe':
                        dispatch(fetchFromBook('Recipes','book'))
                        break;
                    case 'category':
                        dispatch(fetchFromBook('CategoriesParent', 'book'))
                        break;
                    case 'child_category':
                        dispatch(fetchFromBook('CategoriesChild', 'book'))
                        break;
                }
            }}
            >
                {name}</button>
        </div>
    )
}

export default connect()(GetFromBook)