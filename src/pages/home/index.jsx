import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import News from "../../components/News";
import CalendarItem from "../../components/CalendarItem";
import ChartBar from "../../components/ChartBar";

const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.home}>
                <SideBar />
                <div className={styles.contents}>
                    <News />
                    <CalendarItem />
                    {/* <ChartBar /> */}
                </div>
            </div>
        </>
    );
};

export default Home;