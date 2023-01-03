import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../components/Item.module.css';
const Items = () => {

    const [item, setItem] = useState([
        { id: 1, name: '눈사람', img: "옷1" },
        { id: 2, name: '얼음', img: "옷2" },
        { id: 3, name: '눈' , img: "옷3"} ]);

      const itemList =
      item.map(item =>
        <div className={styles.cardboxWarp}>
    <div className={styles.cardbox}>
    <Card style={{ width: '300px' }}>
      <div className={styles.imgbox}>
      <img
      src={require('../Image/' + item.img +
        '.png')} /> 
    </div>
      <Card.Body>
        <Card.Title> {item.name}</Card.Title>
        <Card.Text>
        {item.id}
        </Card.Text>
        <Button variant="primary">SHOP NOW</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
         );

    return ( <div>
       <div className={styles.listname}> {itemList} </div>
    </div> );
}
 
export default Items;