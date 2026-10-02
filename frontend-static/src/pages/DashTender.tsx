import { useEffect, useState } from 'react';
import { usePersona } from '../PersonaContext';
import { fetchTenders } from '../api';
import type { Tender } from '../api';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Search, 
  Clock, 
  FileText, 
  ArrowRight, 
  Send, 
  Layers 
} from 'lucide-react';

export const DashboardPage = () => {
  const { persona } = usePersona();

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-[#FAF9F6] p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-serif">Welcome back, {persona.name}</h1>
          <p className="text-gray-500 text-sm mt-0.5">Role: <span className="font-semibold text-[#0F6B6E]">{persona.role}</span> • UP Medical Supplies Corporation Ltd</p>
        </div>
        <div className="flex gap-3">
          {persona.id === 'officer' && (
            <Link to="/rules" className="bg-[#0F6B6E] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition flex items-center gap-2">
              <FileText size={16} /> Open Tender Rules & Verification
            </Link>
          )}
          {persona.id === 'bidder' && (
            <Link to="/tenders" className="bg-[#0F6B6E] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition flex items-center gap-2">
              <Send size={16} /> Browse Open Tenders & Apply
            </Link>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">📢 Live Bidding Tenders</div>
          <div className="text-2xl font-bold text-green-700">1 Tender Open</div>
          <div className="text-xs text-gray-500 mt-1">₹28.5 Cr • Open for vendor bids</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">🔬 Bids Under Evaluation</div>
          <div className="text-2xl font-bold text-purple-700">1 Tender (10 Bids)</div>
          <div className="text-xs text-gray-500 mt-1">₹45.2 Cr • TEC Scoring active</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">⏳ Awaiting Director Approval</div>
          <div className="text-2xl font-bold text-amber-600">1 Tender Pending</div>
          <div className="text-xs text-gray-500 mt-1">₹18.0 Cr • Ready for sanction</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">🏆 Awarded Contracts</div>
          <div className="text-2xl font-bold text-blue-700">1 Completed Award</div>
          <div className="text-xs text-gray-500 mt-1">₹32.0 Cr • Contract signed</div>
        </div>
      </div>

      {/* Friendly Tender Progress Overview */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Layers size={20} className="text-[#0F6B6E]" /> Procurement Lifecycle Status
            </h2>
            <p className="text-sm text-gray-500">Track all tenders across the 5 simple organizational stages</p>
          </div>
          <Link to="/tenders" className="text-sm font-semibold text-[#0F6B6E] hover:underline flex items-center gap-1">
            View All Tenders <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {/* Stage 1 */}
          <Link to="/tenders" className="p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#0F6B6E] transition">
            <div className="text-xs font-bold text-gray-500 uppercase">Stage 1</div>
            <div className="font-bold text-gray-900 text-base mt-1">✏️ Drafting</div>
            <div className="mt-2 text-2xl font-extrabold text-[#0F6B6E]">1</div>
            <div className="text-xs text-gray-500 mt-1">Being configured by Admin</div>
          </Link>

          {/* Stage 2 */}
          <Link to="/tenders" className="p-4 rounded-lg bg-amber-50 border border-amber-200 hover:border-amber-400 transition">
            <div className="text-xs font-bold text-amber-700 uppercase">Stage 2</div>
            <div className="font-bold text-amber-900 text-base mt-1">⏳ Approval</div>
            <div className="mt-2 text-2xl font-extrabold text-amber-600">1</div>
            <div className="text-xs text-amber-700 mt-1">Awaiting Director sanction</div>
          </Link>

          {/* Stage 3 */}
          <Link to="/tenders" className="p-4 rounded-lg bg-green-50 border border-green-200 hover:border-green-400 transition">
            <div className="text-xs font-bold text-green-700 uppercase">Stage 3</div>
            <div className="font-bold text-green-900 text-base mt-1">📢 Live Bidding</div>
            <div className="mt-2 text-2xl font-extrabold text-green-600">1</div>
            <div className="text-xs text-green-700 mt-1">Open for vendor proposals</div>
          </Link>

          {/* Stage 4 */}
          <Link to="/tenders/MSC/RC/DRG/2026-27/014/evaluation" className="p-4 rounded-lg bg-purple-50 border border-purple-200 hover:border-purple-400 transition">
            <div className="text-xs font-bold text-purple-700 uppercase">Stage 4</div>
            <div className="font-bold text-purple-900 text-base mt-1">🔬 Evaluation</div>
            <div className="mt-2 text-2xl font-extrabold text-purple-600">1</div>
            <div className="text-xs text-purple-700 mt-1">TEC scoring & verification</div>
          </Link>

          {/* Stage 5 */}
          <Link to="/tenders" className="p-4 rounded-lg bg-blue-50 border border-blue-200 hover:border-blue-400 transition">
            <div className="text-xs font-bold text-blue-700 uppercase">Stage 5</div>
            <div className="font-bold text-blue-900 text-base mt-1">🏆 Awarded</div>
            <div className="mt-2 text-2xl font-extrabold text-blue-600">1</div>
            <div className="text-xs text-blue-700 mt-1">Contract finalized</div>
          </Link>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Clock size={20} className="text-[#0F6B6E]" /> Recent Portal Updates & Activity
        </h2>
        <div className="space-y-3">
          <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <div>
                <span className="font-semibold text-gray-900 text-sm">Tender Published: </span>
                <span className="text-gray-700 text-sm">ICU Medical Devices & Patient Monitors (MSC/RC/DRG/2026-27/015) is now open for bidding.</span>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">Today</span>
          </div>

          <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              <div>
                <span className="font-semibold text-gray-900 text-sm">Score Verification: </span>
                <span className="text-gray-700 text-sm">R.K. Verma verified in-house lab accreditation for Avantika Pharma (Score: 10/20).</span>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">2 hrs ago</span>
          </div>

          <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <div>
                <span className="font-semibold text-gray-900 text-sm">Collusion Flag Detected: </span>
                <span className="text-gray-700 text-sm">Vigilance system flagged shared director DIN between Avantika Pharma and MediCorp.</span>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TenderListPage = () => {
  const { persona } = usePersona();
  const [tenders, setTenders] = useState<Tender[]>([]);

  useEffect(() => {
    fetchTenders().then(setTenders);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Tenders</h1>
        {persona.id === 'officer' && (
          <Link to="/tenders/new" className="bg-[#0F6B6E] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-opacity-90">
            <PlusCircle size={18} /> Create Tender
          </Link>
        )}
      </div>
      <div className="bg-[#FAF9F6] rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input type="text" placeholder="Search tenders..." className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:border-[#0F6B6E]" />
          </div>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm">
              <th className="p-4 border-b">ID</th>
              <th className="p-4 border-b">Title</th>
              <th className="p-4 border-b">Status</th>
              <th className="p-4 border-b">Value</th>
              <th className="p-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {tenders.map(t => (
              <tr key={t.id} className="hover:bg-gray-50 border-b last:border-0">
                <td className="p-4 text-sm font-mono">{t.id}</td>
                <td className="p-4 text-sm font-medium">{t.title}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${t.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {t.status}
                  </span>
                </td>
                <td className="p-4 text-sm">₹{t.value.toLocaleString()}</td>
                <td className="p-4 text-sm flex items-center gap-3">
                  <Link to={`/tenders/${t.id}`} className="text-[#0F6B6E] font-medium hover:underline">View Details</Link>
                  {t.status === 'Published' && (
                    <Link to={`/tenders/${t.id}/bid`} className="bg-[#0F6B6E] text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-opacity-90 shadow-sm transition flex items-center gap-1">
                      <FileText size={14} /> Apply / Submit Bid
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
