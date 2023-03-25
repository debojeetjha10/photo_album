import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import PhotoGalary from "./components/photoGallery/photoGallery";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar refreshFn={async () => await queryClient.refetchQueries()} />
        <PhotoGalary />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
