import Navbar from "@/components/navbar/Navbar";
import { Input, Dropdown, Space, Card } from "antd";
import styles from "./styles.module.scss";
import type { MenuProps } from "antd";
import { useEffect, useState } from "react";
import api from "@/utils/axios";

const items: MenuProps["items"] = [
  { key: 1, label: "Неотложные" },
  { key: 2, label: "Важные" },
  { key: 3, label: "Простые" },
];

export default function TicketsAdmin() {
  const [cadsData, setCardsData] = useState(null);

  //   useEffect(async () => {
  //     const tickets = await api.get("/tickets");
  //     setCardsData(tickets);
  //   }, []);
  return (
    <div>
      <div>
        <Navbar />
        <div className={styles.sortContainer}>
          <Input className={styles.searchInput} placeholder="Введите тему, которую хотели бы найти" />
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className={styles.dropdown}>Сортировать по важности</Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className={styles.dropdown}>Сортировать по тегам</Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
