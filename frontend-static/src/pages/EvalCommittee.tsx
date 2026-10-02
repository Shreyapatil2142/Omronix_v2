
import { useParams } from 'react-router-dom';
import { Trophy, AlertCircle, ShieldCheck, Users, FileText } from 'lucide-react';

export const CommercialEvalPage = () => {
  const { id: rawId } = useParams();
  const id = decodeURIComponent(rawId || '');

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">Commercial Evaluation • {id}</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-medium mb-4">Sealed BOQ Comparison</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 text-sm">
              <th className="p-3">Rank</th>
              <th className="p-3">Bidder</th>
              <th className="p-3">Tech Score</th>
              <th className="p-3">Quoted Price (₹)</th>
              <th className="p-3">QCBS Score</th>
              <th className="p-3">Deviation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-green-50">
              <td className="p-3"><Trophy className="text-yellow-500" size={20}/> L1</td>
              <td className="p-3 font-medium">Avantika Pharma</td>
              <td className="p-3">85/100</td>
              <td className="p-3 font-mono">42,50,000</td>
              <td className="p-3 font-bold text-[#0F6B6E]">89.5</td>
              <td className="p-3"><div className="w-24 h-2 bg-gray-200 rounded"><div className="w-1/2 h-full bg-green-500 rounded"></div></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-3">L2</td>
              <td className="p-3 font-medium">MediCorp Solutions</td>
              <td className="p-3">92/100</td>
              <td className="p-3 font-mono">48,00,000</td>
              <td className="p-3 font-bold">84.2</td>
              <td className="p-3"><div className="w-24 h-2 bg-gray-200 rounded"><div className="w-3/4 h-full bg-yellow-500 rounded"></div></div></td>
            </tr>
            <tr className="border-b bg-red-50">
              <td className="p-3">L3</td>
              <td className="p-3 font-medium flex items-center gap-2">Global Health Sys <AlertCircle size={14} className="text-red-500"/></td>
              <td className="p-3">78/100</td>
              <td className="p-3 font-mono text-red-600">12,00,000</td>
              <td className="p-3 font-bold">75.0</td>
              <td className="p-3 text-xs text-red-600">Abnormally Low</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CommitteeWorkbenchPage = () => {
  const { id: rawId } = useParams();
  const id = decodeURIComponent(rawId || '');

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Committee Workbench • {id}</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium mb-4 flex items-center gap-2"><Users size={18}/> Quorum Tracking</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center"><span className="text-sm">R.K. Verma (TEC)</span> <ShieldCheck className="text-green-500"/></li>
            <li className="flex justify-between items-center"><span className="text-sm">Dr. A. Srivastava (Chair)</span> <ShieldCheck className="text-green-500"/></li>
            <li className="flex justify-between items-center"><span className="text-sm">S. Tripathi (Vigilance)</span> <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span></li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
          <FileText size={32} className="text-[#0F6B6E] mb-2"/>
          <h3 className="font-medium mb-2">Comparative Statement</h3>
          <p className="text-sm text-gray-500 mb-4">Generated successfully. Ready for final review.</p>
          <button className="bg-[#0F6B6E] text-white px-4 py-2 rounded text-sm w-full">Recommend Award to L1</button>
        </div>
      </div>
    </div>
  );
};
