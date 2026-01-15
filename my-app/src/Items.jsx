import style from './Items.module.css'
import { useState, useEffect, use } from 'react';
import Card from './Card';

function Items( {isActive} ) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
          try {
            const res = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");
            const json = await res.json();
            setData(json);
          } catch (e) {
            console.error(e);
          } finally {
            setLoading(false);
          }
        }
      
        loadData();
      }, []);
      
    if (loading) return null;

    if (isActive === 2) {
        return (
            <div className={style.itemsBox}>
            {data.filter((item) => item.available)
            .map((item) => (
                <Card key={item.id} item={item}></Card>
            ))}
        </div>
        )
    }

    return (
        <div className={style.itemsBox}>
            {data.map((item) => (
                <Card key={item.id} item={item}></Card>
            ))}
        </div>
    )
}
export default Items;