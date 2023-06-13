import { ReactComponent as StarFull } from 'assets/img/estrelacheia.svg';
import { ReactComponent as StarHalf } from  'assets/img/estrelametade.svg';
import { ReactComponent as StarEmpty } from 'assets/img/estrelavazia.svg';
import './styles.css';

function MovieStars() {

    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    )
}

export default MovieStars;