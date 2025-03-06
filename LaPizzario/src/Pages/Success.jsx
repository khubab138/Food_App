import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader />
      ) : (
        <center>
          <h2 className="text-3xl font-bold mb-4 ">Order SuccessFul</h2>
          <p >
            your order has been successfully placed
          </p>
        </center>
      )}
    </div>
  );
};

export default Success;
