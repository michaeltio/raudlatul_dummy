// "use client";
// import React, { useEffect, useState } from "react";
// import apiClient from "@/api/apiClient";

// export default function Home() {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await apiClient.get("/");
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <section>Test</section>
//     </>
//   );
// }
