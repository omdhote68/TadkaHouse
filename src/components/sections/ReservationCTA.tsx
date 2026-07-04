import { useState } from "react";
import { Calendar, Clock, Users, Phone, User } from "lucide-react";

export default function Reservations() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const submit = () => {
    const text = `Hi Tadka House,

I'd like to reserve a table.

Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}

Special Request:
${form.message}`;

    window.open(
      `https://wa.me/918275188287?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen bg-[#0E0E0E] pt-36 pb-20 px-6">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-white mb-3">
          Reserve Your Table
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Reserve your dining experience in just a few seconds.
        </p>

        <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-yellow-600/20 space-y-5">

          <div>
            <label className="text-gray-300">Full Name</label>
            <input
              className="w-full mt-2 p-4 rounded-xl bg-[#111] text-white"
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />
          </div>

          <div>
            <label className="text-gray-300">Phone Number</label>
            <input
              className="w-full mt-2 p-4 rounded-xl bg-[#111] text-white"
              value={form.phone}
              onChange={(e)=>setForm({...form,phone:e.target.value})}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="text-gray-300">Date</label>
              <input
                type="date"
                className="w-full mt-2 p-4 rounded-xl bg-[#111] text-white"
                value={form.date}
                onChange={(e)=>setForm({...form,date:e.target.value})}
              />
            </div>

            <div>
              <label className="text-gray-300">Time</label>
              <input
                type="time"
                className="w-full mt-2 p-4 rounded-xl bg-[#111] text-white"
                value={form.time}
                onChange={(e)=>setForm({...form,time:e.target.value})}
              />
            </div>

          </div>

          <div>
            <label className="text-gray-300">Guests</label>

            <select
              className="w-full mt-2 p-4 rounded-xl bg-[#111] text-white"
              value={form.guests}
              onChange={(e)=>setForm({...form,guests:e.target.value})}
            >
              {[1,2,3,4,5,6,7,8,9,10].map(g=>(
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-gray-300">Special Request</label>

            <textarea
              rows={4}
              className="w-full mt-2 p-4 rounded-xl bg-[#111] text-white"
              value={form.message}
              onChange={(e)=>setForm({...form,message:e.target.value})}
            />
          </div>

          <button
            onClick={submit}
            className="w-full py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 transition text-black font-semibold text-lg"
          >
            Reserve on WhatsApp
          </button>

        </div>
      </div>
    </section>
  );
}