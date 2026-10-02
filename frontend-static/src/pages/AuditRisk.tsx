
import { useParams } from 'react-router-dom';
import { ShieldCheck, Database, RefreshCw, AlertTriangle, Fingerprint } from 'lucide-react';

export const AuditTrailPage = () => {
  const { id: rawId } = useParams();
  const id = decodeURIComponent(rawId || '');

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Audit Trail • {id}</h1>
        <div className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm flex items-center gap-2 font-medium">
          <ShieldCheck size={16}/> Chain Verified
        </div>
      </div>

      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-4 h-64 overflow-y-auto">
        <div>[2024-10-01 10:00:00] TENDER_CREATED hash: 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08</div>
        <div>[2024-10-01 14:30:22] TENDER_PUBLISHED hash: 4d28d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08 prev: 9f86d08...</div>
        <div>[2024-10-15 09:12:45] BID_SUBMITTED bid: Avantika hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
        <div>[2024-11-02 11:45:00] TECH_EVAL_FROZEN hash: 7a38d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08</div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
        <div>
          <h3 className="font-medium flex items-center gap-2"><Database size={18}/> Replay Score Calculation</h3>
          <p className="text-sm text-gray-500 mt-1">Verify that scores were calculated exactly as per published rules.</p>
        </div>
        <button className="bg-[#0F6B6E] text-white px-4 py-2 rounded flex items-center gap-2"><RefreshCw size={16}/> Replay Eval</button>
      </div>
    </div>
  );
};

export const RiskFlagsPage = () => {
  const { id: rawId } = useParams();
  const id = decodeURIComponent(rawId || '');

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold flex items-center gap-2 text-red-700"><AlertTriangle /> Risk Flags • {id}</h1>
      
      <div className="bg-red-50 p-6 rounded-lg border border-red-200">
        <h3 className="font-medium text-red-800 mb-4">Collusion Signals Detected</h3>
        <div className="space-y-3">
          {[
            {signal: 'Shared CA Certificates', desc: 'Avantika Pharma and Global Health Sys submitted certificates from the same CA with sequential serial numbers.'},
            {signal: 'Common DIN (Director Id)', desc: 'Cross-reference shows a common director across two competing bidders.'},
            {signal: 'Recycled Certificates', desc: 'ISO cert submitted by MediCorp was previously flagged in TND-2023-045.'},
            {signal: 'Document Alteration', desc: 'Metadata in BOQ PDF indicates modification 2 minutes before submission deadline by an unknown author.'},
            {signal: 'Abnormally Low Bid', desc: 'Global Health Sys bid is 65% below the estimated cost.'}
          ].map((r, i) => (
            <div key={i} className="bg-white p-3 rounded border border-red-100 flex gap-3 items-start shadow-sm">
              <Fingerprint className="text-red-500 mt-1 shrink-0" size={18} />
              <div>
                <div className="font-medium text-sm text-gray-800">{r.signal}</div>
                <div className="text-xs text-gray-600 mt-1">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
