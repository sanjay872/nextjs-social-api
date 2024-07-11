"use client"

import getSocialAPI from "@/services/SocialAPI";
import { useState } from "react";
import Image from 'next/image';
import ProfileData  from "@/interfaces/ProfileData";
import Card from "@/components/Card";

export default function Home() {
  const [data, setData] = useState<ProfileData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  function search() {
    if(searchTerm!==''&&searchTerm!==null&&searchTerm!==undefined){
      getSocialAPI(searchTerm).then((data) => {
        setData(data);
      }).catch((error) => {
        console.error(error);
      });
    }
  }

  function sortData() {
    setData([...data.sort((a, b) => a.fullName.localeCompare(b.fullName))]);
  }
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-10">
      <div className="d-flex mb-10">
        <input type="text" placeholder="Search for a person" className="mr-4" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button type="button" className="btn btn-dark" onClick={search}>Search</button>
        <button type="button" className="btn btn-dark ml-4" onClick={sortData}>Sort</button>
      </div>
      <div className="d-flex flex-wrap gap-8 justify-content-center align-items-center">
        {data && data.map((person, index) => (
          <Card key={index} {...person} />
        ))}
      </div>
    </div>
  );
}
