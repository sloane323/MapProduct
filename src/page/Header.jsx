import Christmas from "../Image/market.jpg";
import styles from "../page/Header.module.css";
const Header = () => {
    return ( 
        <div>

    <div className={styles.headerimg}>
      <img src={Christmas} alt="headerimg"/>
    </div>
        </div>
     );
}
 
export default Header;
