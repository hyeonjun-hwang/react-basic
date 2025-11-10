import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState([]);

  const unsplashApi = axios.create({
    baseURL: "https://api.unsplash.com/",
    params: {
      client_id: "pPry_0pVJ3aSOKnlynlhVUK8qXZhObbPmF8aUs0rY1M",
    },
  });

  const fetchSearchPhotos = async () => {
    const res = await unsplashApi.get("/search/photos", {
      params: {
        page: 1,
        per_page: 2,
        query: "illustration",
      },
    });

    const result = res.data.results.map((item) => item.urls.full);

    setResult(result);
  };

  useEffect(() => {
    fetchSearchPhotos();
  }, []);

  return (
    <div>
      App : day29
      <div className="p-10 flex gap-3">
        {result.map((item, i) => (
          <img className="w-100 h-100 rounded-xl" key={i} src={item} alt="" />
        ))}
      </div>
    </div>
  );
}

export default App;
