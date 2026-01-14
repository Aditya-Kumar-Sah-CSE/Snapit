import React from 'react';
import { ShoppingBag, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Orders = () => {
  // Static mock data for orders
  const orders = [
    {
      id: "ORD-92834",
      date: "Oct 12, 2023",
      total: 450,
      status: "Delivered",
      items: ["Fresh Apples", "Organic Dal"]
    },
    {
      id: "ORD-92835",
      date: "Oct 15, 2023",
      total: 1200,
      status: "In Transit",
      items: ["Spices Pack", "Dry Fruits", "Cooking Oil"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className= " flex flex-col justify-center items-center max-w-4xl mx-auto ">
        <div className="flex flex-col justify-between items-center ">
          <h1 className="text-3xl font-bold text-[#0E2931]">My Orders</h1>
          <Link to="/" className="text-[#0E2931] font-bold hover:underline flex items-center gap-1">
            Continue Shopping <ChevronRight size={18} />
          </Link>
        </div>

        {orders.length > 0 ? (
          <div className="space-y-6 md:min-w-400 flex  flex-col justify-center items-center h-80 gap-5 ">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md ">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-50 min-h-20 ">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-50 p-3 rounded-2xl text-[#0E2931]">
                      <ShoppingBag size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{order.id}</h3>
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <Clock size={14} /> Ordered on {order.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Status</p>
                      <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                        {order.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest text-right">Total</p>
                      <p className="text-lg font-black text-[#0E2931] mt-1">₹{order.total}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {order.items.map((item, i) => (
                    <span key={i} className="bg-gray-50 text-gray-600 px-4 py-2 rounded-xl text-sm font-medium border border-gray-100">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="flex-1 bg-white border border-gray-200 text-[#0E2931] py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                    Order Details
                  </button>
                  <Link to="/track" className="flex-1 bg-[#0E2931] text-white py-3 rounded-2xl font-bold hover:bg-[#1a4a58] transition-all text-center">
                    Track Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100">
            <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-bold text-gray-800">No orders yet</h2>
            <p className="text-gray-500 mt-2">When you buy something, it will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
