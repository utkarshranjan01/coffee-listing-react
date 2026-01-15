import style from './App.module.css'
import ListingBox from './ListingBox';

function App() {
  return (
    <>
      <div className={style.bg}>
        <div className={style.bgCafe} />
        <ListingBox></ListingBox>
      </div>
    </>
  );
}

export default App;
