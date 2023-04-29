import styles from "./styles.module.scss";
import type { RadioChangeEvent } from "antd";
import { Radio, Badge, Col, Statistic } from "antd";
import Avatar from "antd/es/avatar";
import avatar from "./../../../public/avatar-svgrepo-com.png";
import Image from "next/image";

const onChange = (e: RadioChangeEvent) => {
  console.log(`radio checked:${e.target.value}`);
};

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.leftSideContainer}>
        <h1>Очень крутое лого</h1>
        <Radio.Group className={styles.radioContiner} onChange={onChange} defaultValue="a">
          <Radio.Button className={styles.radioButton} value="a">
            Открытые
          </Radio.Button>
          <Radio.Button className={styles.radioButton} value="b">
            Закрытые
          </Radio.Button>
        </Radio.Group>
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.statisticsContainer}>
          <Col className={styles.statisticsCard}>
            <Badge className={styles.statisticsBadge} color={"rgba(0,0,0,0)"} text={"Количество тикетов"} />
            <p className={styles.statisticsNumber}>{Math.floor(Math.random() * 100 + 1)}</p>
          </Col>
          <Col className={styles.statisticsCard}>
            <Badge className={styles.statisticsBadge} color={"red"} text={"Неотложные задачи"} />
            <p className={styles.statisticsNumber}>{Math.floor(Math.random() * 100 + 1)}</p>
          </Col>
          <Col className={styles.statisticsCard}>
            <Badge className={styles.statisticsBadge} color={"yellow"} text={"Важные задачи"} />
            <p className={styles.statisticsNumber}>{Math.floor(Math.random() * 100 + 1)}</p>
          </Col>
          <Col className={styles.statisticsCard}>
            <Badge className={styles.statisticsBadge} color={"green"} text={"Простые задачи"} />
            <p className={styles.statisticsNumber}>{Math.floor(Math.random() * 100 + 1)}</p>
          </Col>
        </div>
        <Image className={styles.avatar} src={avatar} alt="avatar"></Image>
      </div>
    </nav>
  );
};

export default Navbar;
