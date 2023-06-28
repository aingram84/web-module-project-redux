import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    console.log(`FAVORITES: ${favorites}`)

    const handleClick = (id) => {
        props.removeFavorite(id);
    }


    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie => {
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={handleClick} class="material-icons">remove_circle</span></span>
                    </Link>
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return ({
        favorites: state.favReducer.favorites,
        displayFavorites: state.favReducer.displayFavorites
    });
}

export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);
// export default FavoriteMovieList;