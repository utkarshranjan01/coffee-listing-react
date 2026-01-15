import style from './Card.module.css'
import filledStar from './assets/Star_fill.svg'
import blankStar from './assets/Star.svg'

function Card({item}) {

    return (
        <>
        <div className={style.box}>
            <div className={style.imgBox}>
                <img src={item.image} alt={`${item.name}'s Image`} />
                {item.popular && <span className={style.floatText}>Popular</span>}
            </div>
            <div className={style.textBox}>
                <div className={style.name}>{item.name}</div>
                <div className={style.price}>{item.price}</div>
            </div>
            <div className={style.ratingBox}>
                {
                    item.votes>0 && <img src={filledStar} className={style.filledStar} style={{
                        width: '16px',
                        height: '16px',
                        maxWidth: '16px',
                        maxHeight: '16px',
                        flexShrink: 0
                        }} />
                }
                {
                    !item.votes && <img src={blankStar} className={style.filledStar} style={{
                        width: '16px',
                        height: '16px',
                        maxWidth: '16px',
                        maxHeight: '16px',
                        flexShrink: 0
                        }} />
                }

                
                {item.votes>0 && <div className={style.rating}>{item.rating}</div>}
                {item.votes>0 && <div className={style.votes}>{`(${item.votes} votes)`}</div>}

                {!item.votes && <div className={style.votes} style={{fontWeight: '700', fontSize: '0.85rem'}}>No ratings</div>}

                {!item.available && <div className={style.sold}>Sold out</div>}
            </div>
        </div>
        </>
    )
}

export default Card;