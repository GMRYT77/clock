import React from "react";

export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://worldtimeapi.org/api/timezone");
  let allTimeZones = await res.json();

  return {
    props: {
      allTimeZone: allTimeZones.map((e) => e),
    },
  };
};

const Posts = ({ allTimeZone }) => {
  console.log(allTimeZone);
  return (
    <div>
      <h1>All Posts</h1>
      {allTimeZone.map((e, idx) => (
        <div key={idx}>{e}</div>
      ))}
    </div>
  );
};

export default Posts;
