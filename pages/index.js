import { RxCross2 } from "react-icons/rx";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/ai";

const Home = ({ objectData }) => {
  const themes = ["poiret", "monoton", "pady", "rubik", "sedwick"];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [currTheme, setCurrTheme] = useState(0);
  const kk = {
    abbreviation: "IST",
    client_ip: "49.37.72.192",
    datetime: "2023-04-08T21:03:58.649389+05:30",
    day_of_week: 6,
    day_of_year: 98,
    dst: false,
    dst_from: null,
    dst_offset: 0,
    dst_until: null,
    raw_offset: 19800,
    timezone: "Asia/Kolkata",
    unixtime: 1680968038,
    utc_datetime: "2023-04-08T15:33:58.649389+00:00",
    utc_offset: "+05:30",
    week_number: 14,
  };

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  useEffect(() => {
    const secDiv = document.getElementById("sec_id");
    const minDiv = document.getElementById("min_id");
    const hrDiv = document.getElementById("hr_id");
    const dayDiv = document.getElementById("day_id");
    const dateDiv = document.getElementById("date_id");
    const monthDiv = document.getElementById("month_id");
    const val = document.getElementById("val");

    function changer(a, b, c, d, e, f) {
      setSec(a);
      setMin(b);
      setHr(c);
      let s = sec.toString();
      let m = min.toString();
      let h = hr.toString();
      if (s.length == 1) {
        s = "0" + s;
      }
      if (m.length == 1) {
        m = "0" + m;
      }
      if (h.length == 1) {
        h = "0" + h;
      }
      secDiv.innerText = s;
      minDiv.innerText = m;
      hrDiv.innerText = h;
      dayDiv.innerText = dayNames[d] + ",";
      dateDiv.innerText = e;
      if (e === 1) {
        val.innerText = "st";
      } else if (e === 2) {
        val.innerText = "nd";
      } else if (e === 3) {
        val.innerText = "rd";
      } else {
        val.innerText = "th";
      }
      monthDiv.innerText = month[f];
    }
    setTimeout(() => {
      const d = new Date();
      let ss = d.getSeconds();
      let mm = d.getMinutes();
      let hh = d.getHours();
      let day = d.getDay();
      let dd = d.getDate();
      let mo = d.getMonth();

      changer(ss, mm, hh, day, dd, mo);
    }, 1000);
  });

  useEffect(() => {
    console.log(objectData);
    const timeDiv = document.getElementById("timeDiv");
    const th = document.getElementsByClassName("theme");

    for (let i = 0; i < th.length; i++) {
      th[i].addEventListener("click", (e) => {
        e.preventDefault();
        timeDiv.classList.remove(themes[0]);
        timeDiv.classList.remove(themes[1]);
        timeDiv.classList.remove(themes[2]);
        timeDiv.classList.remove(themes[3]);
        timeDiv.classList.remove(themes[4]);
        timeDiv.classList.add(themes[i]);
      });
    }
  }, []);

  const openSettings = () => {
    const setting = document.getElementById("settings_id");
    setting.classList.remove("translate-x-[150%]");
    setting.classList.add("translate-x-0");
  };

  // Settings
  const closeSettings = () => {
    const setting = document.getElementById("settings_id");
    setting.classList.add("translate-x-[150%]");
    setting.classList.remove("translate-x-0");
  };
  const [size, setSize] = useState(40);

  const dataRange = () => {
    const ran = document.getElementById("range_id");
    const timeDiv = document.getElementById("timeDiv");
    const output = document.getElementById("rangevalue1");
    setSize(() => ran.value);
    output.innerText = size;
    timeDiv.style.fontSize = `${size}px`;
  };

  return (
    <>
      <section className="sec h-screen items-center flex-col">
        <Head>
          <title>Clock</title>
        </Head>
        <nav className="absolute top-3 mx-auto w-fit text-white flex gap-6">
          <Link
            href="/"
            className="font-semibold border-b-[2px] pb-1 border-b-white"
          >
            Clock
          </Link>
          <Link href="/" className="opacity-60 pb-1">
            Weather
          </Link>
        </nav>
        <div className="absolute top-3 right-5 text-[160%] cursor-pointer">
          <AiFillSetting onClick={openSettings} />
        </div>
        <div
          id="timeDiv"
          className={`${themes[currTheme]}  text-white flex flex-col gap-1 min-h-[400px] min-w-[300px] my-[160px] items-center justify-center text-center`}
        >
          <div className="flex gap-3 items-end">
            <span id="hr_id">00</span>
            <span className="text-[30%] mb-[16%]">hr</span>
          </div>
          <div className="flex gap-3 items-end">
            <span id="min_id">00</span>
            <span className="text-[30%] mb-[16%]">min</span>
          </div>
          <div className="flex gap-3 items-end">
            <span id="sec_id">00</span>
            <span className="text-[30%] mb-[16%]">Sec</span>
          </div>
          <div className="flex gap-4 items-end text-[30%]">
            <span id="day_id"></span>
            <div className="flex gap-2">
              <span id="date_id"></span>
              <span id="val" className="text-[50%]"></span>
            </div>
            <span id="month_id"></span>
          </div>
        </div>
      </section>
      <section>
        <div id="f" className="relative cont min-h-[300px]">
          fjfj
        </div>
      </section>
      {/* SETTINGS */}
      <div
        id="settings_id"
        className="absolute flex flex-col transition top-0 right-2 translate-x-[150%] max-w-[300px] w-full h-fit p-3 border-[1px] border-[#a1a1a188] rounded-md m-3 bg-[#1e1e1e] z-20"
      >
        <div className="absolute top-3 right-3 text-[1.6rem] cursor-pointer">
          <RxCross2 id="crossBtn" onClick={closeSettings} />
        </div>
        <h2 className="font-sans font-bold mb-4 text-[130%] tracking-wider">
          Theme
        </h2>
        <div className="grid grid-cols-2 gap-4 list-none mb-6">
          {themes.map((e, i) => {
            return (
              <li
                className={`${e} theme flex w-full h-[80px] justify-center text-[1.8rem] text-center items-center cardo`}
                key={i}
              >
                09 : 40
              </li>
            );
          })}
        </div>
        <h2 className="font-sans font-bold mb-4 text-[130%] tracking-wider ">
          Font Size
        </h2>
        <div className="flex w-full gap-4">
          <input
            id="range_id"
            className="range"
            type="range"
            min={20}
            max={100}
            step={1}
            aria-valuenow="10"
            onMouseMove={dataRange}
          />
          <output id="rangevalue1">{size}</output>
        </div>
      </div>
      <ul className="cont flex flex-col gap-2">{}</ul>
    </>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch("/data/UTC.json");
//   let allTimeZones = await res.json();

//   return {
//     props: {
//       allTimeZone: allTimeZones.map((e) => e),
//     },
//   };
// };
import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: { objectData },
  };
}
export default Home;
