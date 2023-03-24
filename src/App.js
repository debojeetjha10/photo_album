import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import PhotoGalary from "./components/photoGalary/photoGalary";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar />
        <PhotoGalary />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
