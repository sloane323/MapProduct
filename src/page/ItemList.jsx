import Items from "../components/Item";
import styles from "../page/ItemList.module.css";
const ItemList = () => {

    return ( <div className={styles.itemListbox}>

       <div className={styles.seemore}><button><u>더보기</u> </button> <br /> </div> 

        <div>
        <Items />
        </div>

    </div> );
}
 
export default ItemList;