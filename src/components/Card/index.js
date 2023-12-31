import { useFavoriteContext } from "contexts/FavoritesContext"
import styles from "./Card.module.css"
import iconFavOutline from "./favorite_outline.png"
import iconFavFilled from "./favorite.png"
import { Link } from "react-router-dom"

function Card({ id, title, cover }) {
    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icon = isFavorite? iconFavFilled : iconFavOutline
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
            <img src={cover} alt={title} className={styles.cover} />
            <h2>{title}</h2>
            </Link>
            <img src={icon} alt="Favoritar filme" className={styles.favOutline}
                onClick={() => { addFavorite({ id, title, cover }) }}
            />
        </div>
    )
}

export default Card