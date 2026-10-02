import { useState } from 'react';
import { UploadCloud, CheckCircle, Lock, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

export const BidSubmissionPage = () => {
  const { id: rawId } = useParams();
  const id = decodeURIComponent(rawId || '');
  const encodedId = encodeURIComponent(id);
  const [tab, setTab] = useState('technical');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-lg shadow border border-green-200 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-gray-900 font-serif">Bid Submitted & Sealed Successfully</h2>
        <p className="text-gray-600 mb-6">Your two-cover bid for tender <span className="font-semibold text-[#0F6B6E]">{id}</span> has been timestamped and cryptographically vaulted.</p>
        <div className="bg-gray-50 p-4 rounded text-left font-mono text-sm border border-gray-200 mb-6">
          <div className="text-gray-500 mb-1 font-sans text-xs">SHA-256 Sealed Digital Receipt:</div>
          <div className="break-all text-green-700 font-bold">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
        </div>
        <div className="flex justify-center gap-3">
          <Link to={`/tenders/${encodedId}`} className="bg-[#0F6B6E] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition">
            View Tender Workspace
          </Link>
          <Link to="/tenders" className="bg-gray-100 text-gray-700 px-5 py-2 rounded text-sm font-semibold hover:bg-gray-200 transition">
            Back to Tenders List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-serif">Two-Cover Sealed Bid Submission</h1>
          <p className="text-gray-500 text-sm mt-0.5">Tender ID: <span className="font-mono font-semibold text-[#0F6B6E]">{id}</span></p>
        </div>
        <Link to={`/tenders/${encodedId}`} className="text-sm text-gray-600 hover:text-gray-900">← Cancel & Return</Link>
      </div>

      <div className="flex border-b border-gray-200">
        <button onClick={() => setTab('technical')} className={`px-6 py-3 font-semibold text-sm transition ${tab === 'technical' ? 'border-b-2 border-[#0F6B6E] text-[#0F6B6E]' : 'text-gray-500 hover:text-gray-700'}`}>
          1. Technical Documents
        </button>
        <button onClick={() => setTab('financial')} className={`px-6 py-3 font-semibold text-sm flex items-center gap-2 transition ${tab === 'financial' ? 'border-b-2 border-[#0F6B6E] text-[#0F6B6E]' : 'text-gray-500 hover:text-gray-700'}`}>
          <Lock size={15}/> 2. Financial BOQ (Sealed Cover)
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[300px]">
        {tab === 'technical' && (
          <div className="space-y-4">
            <div className="bg-blue-50 text-blue-800 p-3.5 rounded text-sm border border-blue-100">
              Upload mandatory technical qualification documents. All files are automatically OCR scanned and cross-verified.
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Upload Checklist</h3>
            {[
              { label: 'Incorporation Certificate / Registration', uploaded: true },
              { label: 'Audited Balance Sheet (Last 3 Financial Years)', uploaded: true },
              { label: 'GMP / ISO 9001 Quality Certification', uploaded: false }
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 border rounded-lg hover:border-gray-300 transition">
                <span className="text-sm font-medium text-gray-700">{doc.label}</span>
                <button className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded transition ${doc.uploaded ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {doc.uploaded ? <CheckCircle size={14} /> : <UploadCloud size={14} />} {doc.uploaded ? 'Uploaded' : 'Upload File'}
                </button>
              </div>
            ))}
            <div className="pt-4 flex justify-end">
              <button onClick={() => setTab('financial')} className="bg-[#0F6B6E] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition flex items-center gap-2">
                Next: Fill Financial BOQ →
              </button>
            </div>
          </div>
        )}

        {tab === 'financial' && (
          <div className="space-y-4">
            <div className="bg-amber-50 text-amber-800 p-3.5 rounded text-sm border border-amber-200 flex items-center gap-2">
              <Lock size={16} className="shrink-0" /> Financial BOQ is client-side sealed and encrypted. Prices remain invisible to evaluators until Technical Freeze.
            </div>
            <table className="w-full text-left border-collapse border border-gray-200 rounded overflow-hidden">
              <thead>
                <tr className="bg-gray-50 text-gray-700 text-xs font-semibold uppercase border-b border-gray-200">
                  <th className="p-3">Item Description</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Unit</th>
                  <th className="p-3">Unit Rate (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-sm font-medium">ICU Patient Monitor with 12-inch Display</td>
                  <td className="p-3 text-sm">50</td>
                  <td className="p-3 text-sm text-gray-500">Units</td>
                  <td className="p-3"><input type="number" defaultValue={245000} className="border rounded px-3 py-1.5 text-sm w-36 focus:outline-none focus:border-[#0F6B6E]" /></td>
                </tr>
                <tr>
                  <td className="p-3 text-sm font-medium">Advanced Syringe Infusion Pump</td>
                  <td className="p-3 text-sm">100</td>
                  <td className="p-3 text-sm text-gray-500">Units</td>
                  <td className="p-3"><input type="number" defaultValue={65000} className="border rounded px-3 py-1.5 text-sm w-36 focus:outline-none focus:border-[#0F6B6E]" /></td>
                </tr>
              </tbody>
            </table>
            <div className="pt-4 flex justify-between items-center border-t border-gray-100 mt-6">
              <button onClick={() => setTab('technical')} className="text-sm text-gray-600 hover:text-gray-900 font-medium">
                ← Back to Technical Docs
              </button>
              <button onClick={() => setSubmitted(true)} className="bg-[#0F6B6E] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-opacity-90 shadow-sm transition flex items-center gap-2">
                <Lock size={16} /> Sign & Vault Bid
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const EvaluationMatrixPage = () => {
  const { id: rawId } = useParams();
  const id = decodeURIComponent(rawId || '');
  const encodedId = encodeURIComponent(id);
  const bidders = ['Avantika Pharma', 'MediCorp Solutions', 'Global Health Sys'];
  const criteria = ['Past Experience', 'Turnover', 'Certifications'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-serif">Evaluation Matrix</h1>
          <p className="text-gray-500 text-sm mt-0.5">Tender: <span className="font-mono font-semibold text-[#0F6B6E]">{id}</span></p>
        </div>
        <div className="flex gap-2">
          <button className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded text-sm font-medium text-gray-700 flex items-center gap-1.5 hover:bg-gray-200">
            <AlertTriangle size={14} className="text-amber-600"/> Exception Filter
          </button>
          <Link to={`/tenders/${encodedId}`} className="text-sm text-gray-600 hover:text-gray-900 py-1.5 px-3">
            ← Tender Workspace
          </Link>
        </div>
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="w-full min-w-max text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b bg-gray-50 font-semibold text-xs text-gray-600 uppercase">Bidders</th>
              {criteria.map(c => <th key={c} className="p-4 border-b bg-gray-50 font-semibold text-xs text-gray-600 uppercase">{c}</th>)}
              <th className="p-4 border-b bg-gray-50 font-semibold text-xs text-gray-600 uppercase">Total Score</th>
            </tr>
          </thead>
          <tbody>
            {bidders.map((b, i) => (
              <tr key={b} className="border-b last:border-0 hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-900">{b}</td>
                {criteria.map((c, j) => (
                  <td key={c} className="p-4">
                    <Link to={`/tenders/${encodedId}/evidence/bid-${i}/crit-${j}`} className="block border rounded-lg p-2.5 text-center hover:border-[#0F6B6E] transition cursor-pointer bg-gray-50 hover:bg-white shadow-2xs">
                      <div className="text-lg font-bold text-[#0F6B6E]">{Math.floor(Math.random() * 20 + 70)}/100</div>
                      <div className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                        <ShieldCheck size={12} className="text-green-600"/> {Math.floor(Math.random() * 10 + 90)}% Conf
                      </div>
                    </Link>
                  </td>
                ))}
                <td className="p-4 font-bold text-lg text-gray-900">245</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
