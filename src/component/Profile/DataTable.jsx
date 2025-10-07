import React from "react";
import { MetaPagination } from "../Pagination/Pagination";
import { useHistoryMutations } from "./hook/use-history-mutations";
import "bootstrap/dist/css/bootstrap.min.css";
import { formatSingleDate } from "../../utils/formate-date";

export const DataTable = ({ history }) => {
  const { datas, loading, handlePageChange, pagination } =
    useHistoryMutations({ history });

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Loading...</p>
      </div>
    );
  }

  if (!loading && datas.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-muted">No data found</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Provider</th>
                  <th>Transaction ID</th>
                  <th>Amount</th>
                  <th>Currency</th>
                  <th>Status</th>
                  <th>Payment For</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.provider}</td>
                    <td>{item.txnId}</td>
                    <td>
                      <strong>₹{item.amount}</strong>
                    </td>
                    <td>{item.currency}</td>
                    <td>
                      <span className=" bg-success px-1 rounded text-white">
                        {item.status}
                      </span>
                    </td>
                    <td>{item.paymentFor}</td>
                    <td>{formatSingleDate(item.createdAt, true)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <MetaPagination pagination={pagination} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};
