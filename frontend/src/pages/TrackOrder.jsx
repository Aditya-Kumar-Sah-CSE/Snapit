import React from 'react';
import { Truck, MapPin, CheckCircle2, Circle } from 'lucide-react';

const TrackOrder = () => {
  const steps = [
    { title: "Order Confirmed", date: "12 Oct, 10:30 AM", completed: true },
    { title: "Processing", date: "12 Oct, 12:45 PM", completed: true },
    { title: "In Transit", date: "13 Oct, 09:15 AM", current: true },
    { title: "Out for Delivery", date: "Expected Today", completed: false },
    { title: "Delivered", date: "Pending", completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0E2931] mb-10">Track Your Order</h1>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
            <div>
              <p className="text-xs text-gray-400 uppercase font-black tracking-widest mb-1">Order ID</p>
              <h3 className="text-xl font-bold text-gray-900">ORD-92835</h3>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-black tracking-widest mb-1">Carrier</p>
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Truck size={20} className="text-[#0E2931]" />
                Snapit Logistics
              </h3>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-black tracking-widest mb-1">Expected Delivery</p>
              <h3 className="text-xl font-bold text-green-600">Today, By 6 PM</h3>
            </div>
          </div>

          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-100"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6 pl-1">
                <div className={`z-10 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white ${step.completed ? 'bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.1)]' :
                    step.current ? 'bg-[#0E2931] shadow-[0_0_0_4px_rgba(14,41,49,0.1)]' : 'bg-gray-200'
                  }`}>
                  {step.completed ? (
                    <CheckCircle2 size={16} className="text-white" />
                  ) : step.current ? (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  ) : (
                    <Circle size={12} className="text-gray-400" />
                  )}
                </div>
                <div>
                  <h4 className={`font-bold ${step.current ? 'text-[#0E2931] text-lg' : 'text-gray-800'}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-0.5 font-medium">{step.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0E2931] shadow-sm">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Current Location</p>
              <p className="font-bold text-gray-900">Delhi Hub, Sector 45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
