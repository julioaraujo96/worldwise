import CityItem from '../../components/City/CityItem';
import Spinner from '../../components/Spinner/Spinner';
import Message from '../../components/Message/Message';
import styles from './CityList.module.css';

function CityList({ cities, isLoading }) {

    if(isLoading) return <Spinner />
    if(!cities.length) return <Message message="Add your first city by clicking on a city on the map" />

    return (
        <ul className={ styles.cityList } >
            {cities.map( city => <CityItem  city={city} key={city.id} /> )}
        </ul>
    )
}

export default CityList
