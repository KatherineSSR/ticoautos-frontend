import React, { useState } from "react";
import FilterBar from "../components/FilterBar";
import VehicleListCard from "../components/VehicleListCard";
import Navbar from "../components/Navbar";
import api from "../services/api";
import '../styles/Simple.css';

function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [filters, setFilters] = useState({});

  // Detecta si el usuario está autenticado
  const isAuthenticated = !!sessionStorage.getItem("token");

  const fetchVehicles = async (filterParams = {}, pageNum = 1) => {
    try {
      const params = { ...filterParams, page: pageNum };
      const res = await api.get("/vehicles", { params });
      setVehicles(res.data.vehicles);
      setTotal(res.data.total);
      setPage(res.data.page);
      setPages(res.data.pages);
    } catch (err) {
      setVehicles([]);
      setTotal(0);
      setPages(1);
    }
  };

  React.useEffect(() => {
    fetchVehicles(filters, page);
  }, [filters, page]);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleCopyUrl = (id) => {
    const url = `${window.location.origin}/vehicles/${id}`;
    navigator.clipboard.writeText(url);
    alert('Vehicle URL copied!');
  };

  return (
    <div className="page-wrapper">
      <div className="simple-container">
        <Navbar isAuthenticated={isAuthenticated} />
        {/* <h1 style={{ color: '#fff', margin: '32px 0 16px 0', textAlign: 'center' }}>Welcome to TicoAutos</h1> */}
        <FilterBar onFilter={handleFilter} />
        <div className="simple-cards">
          {vehicles.map((vehicle) => (
            <VehicleListCard key={vehicle._id} vehicle={vehicle} onCopyUrl={handleCopyUrl} />
          ))}
        </div>
        <div className="simple-pagination">
          <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</button>
          <span style={{ color: '#fff' }}>Page {page} of {pages}</span>
          <button disabled={page >= pages} onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
