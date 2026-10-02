import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FileText, 
  Zap, 
  AlignLeft, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  ZoomIn, 
  ZoomOut, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  Edit3
} from 'lucide-react';

export const EvidenceWorkspacePage = () => {
  const { id: rawId } = useParams();
  const id = decodeURIComponent(rawId || '');
  const encodedId = encodeURIComponent(id);

  const [decision, setDecision] = useState<'none' | 'accepted' | 'overridden'>('none');
  const [overrideScore, setOverrideScore] = useState<number>(40);
  const [justification, setJustification] = useState('');
  const [showOverrideInput, setShowOverrideInput] = useState(false);

  return (
    <div className="h-[calc(100vh-6.5rem)] flex flex-col space-y-3">
      {/* Workspace Header */}
      <div className="bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-2xs flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <Link to={`/tenders/${encodedId}/evaluation`} className="text-gray-500 hover:text-gray-900 transition flex items-center gap-1 text-sm font-medium pr-3 border-r border-gray-200">
            <ArrowLeft size={16} /> Matrix
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-gray-900 font-serif">3-Pane Evidence Verification Workspace</h1>
              <span className="bg-[#0F6B6E]/10 text-[#0F6B6E] px-2 py-0.5 rounded text-xs font-semibold">Tender: {id}</span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Bidder: <span className="font-semibold text-gray-800">Avantika Pharma Ltd</span> • Criterion: <span className="font-semibold text-[#0F6B6E]">Past Experience & Technical Capability (Rule: threshold_count)</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded font-medium">
            Evaluator: R.K. Verma (Member TEC)
          </span>
        </div>
      </div>
      
      {/* 3-Pane Main Layout */}
      <div className="flex-1 flex gap-3 min-h-0">
        
        {/* Pane 1: Criterion Definition & Rules (Left - 26%) */}
        <div className="w-[26%] bg-white rounded-lg shadow-2xs border border-gray-200 p-4 overflow-y-auto flex flex-col space-y-4 shrink-0">
          <div className="border-b border-gray-100 pb-3">
            <h3 className="font-bold text-sm text-gray-900 flex items-center gap-2 font-serif">
              <AlignLeft size={16} className="text-[#0F6B6E]"/> 1. Rule Specification
            </h3>
            <p className="text-xs text-gray-500 mt-1">Configured deterministic scoring contract</p>
          </div>

          <div className="bg-[#FAF9F6] p-3.5 rounded-lg border border-gray-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold uppercase text-gray-500">Rule Type</span>
              <span className="text-xs font-mono font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">threshold_count</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold uppercase text-gray-500">Max Score</span>
              <span className="text-sm font-bold text-[#0F6B6E]">40 Points</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-gray-700 tracking-wider">Evaluation Rules</span>
            <div className="bg-gray-50 p-3 rounded text-xs space-y-2 text-gray-700 border border-gray-200">
              <div className="font-medium text-gray-900 border-b border-gray-200 pb-1.5">Rule #1: Contract Count Threshold</div>
              <p>Bidder must have completed at least <span className="font-bold text-gray-900">3 similar equipment supply contracts</span> in public healthcare within the last 5 years.</p>
              <div className="pt-1 text-gray-600">
                • 3+ Contracts: <span className="font-semibold text-green-700">40 Points (100%)</span><br/>
                • 2 Contracts: <span className="font-semibold text-amber-700">25 Points (62.5%)</span><br/>
                • &lt;2 Contracts: <span className="font-semibold text-red-700">0 Points (Disqualified)</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-gray-700 tracking-wider">Required Evidence Keywords</span>
            <div className="flex flex-wrap gap-1.5">
              {['Supply of ICU Devices', 'Completion Certificate', 'Public Health Dept', 'Value ≥ ₹10L'].map(kw => (
                <span key={kw} className="bg-blue-50 text-blue-800 text-[11px] font-medium px-2 py-0.5 rounded border border-blue-100">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-3 border-t border-gray-100 text-[11px] text-gray-500">
            Source Doc ID: <span className="font-mono text-gray-700">DOC-2022-AV-094</span>
          </div>
        </div>

        {/* Pane 2: AI Trace & Confidence Meters (Center - 34%) */}
        <div className="w-[34%] bg-white rounded-lg shadow-2xs border border-gray-200 p-4 overflow-y-auto flex flex-col space-y-4 shrink-0">
          <div className="border-b border-gray-100 pb-3">
            <h3 className="font-bold text-sm text-gray-900 flex items-center gap-2 font-serif">
              <Zap size={16} className="text-amber-500"/> 2. AI Extraction & Score Trace
            </h3>
            <p className="text-xs text-gray-500 mt-1">Grounding evidence and score calculation</p>
          </div>

          {/* AI Score Recommendation Card */}
          <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-lg text-center space-y-1">
            <div className="text-xs font-medium text-emerald-800 uppercase tracking-wider">Extracted Finding</div>
            <div className="text-xl font-extrabold text-emerald-900">4 Eligible Contracts Verified</div>
            <div className="inline-block bg-emerald-700 text-white text-sm font-bold px-3 py-1 rounded-full mt-1">
              Recommended Score: 40 / 40 Pts
            </div>
          </div>

          {/* 4-Factor Confidence Meter */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase text-gray-700 tracking-wider">4-Factor Confidence Assessment</span>
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                <ShieldCheck size={14} /> 95% Overall
              </span>
            </div>
            <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
              {[
                { label: 'OCR Document Quality', val: 98, color: 'bg-emerald-600' },
                { label: 'Semantic Grounding', val: 96, color: 'bg-emerald-600' },
                { label: 'Cross-Document Sync', val: 92, color: 'bg-emerald-600' },
                { label: 'Multi-LLM Consensus', val: 95, color: 'bg-emerald-600' }
              ].map(m => (
                <div key={m.label} className="text-xs">
                  <div className="flex justify-between text-gray-700 mb-1 font-medium">
                    <span>{m.label}</span>
                    <span className="font-mono">{m.val}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className={`${m.color} h-1.5 rounded-full`} style={{ width: `${m.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Execution Trace Log */}
          <div className="space-y-2 flex-1 min-h-0 flex flex-col">
            <span className="text-xs font-bold uppercase text-gray-700 tracking-wider">Execution Audit Trace</span>
            <div className="bg-gray-900 text-emerald-400 p-3 rounded-lg text-xs font-mono space-y-1.5 overflow-y-auto flex-1 border border-gray-800">
              <div>[09:14:02] OCR Scan complete for Completion_Cert_2022.pdf</div>
              <div>[09:14:03] Grounded match found on Page 4 (BBox: x:120, y:340, w:310, h:85)</div>
              <div>[09:14:04] Extracted contract value: ₹25,00,000 (Passes ≥ ₹10L threshold)</div>
              <div>[09:14:04] Completion date: 15-Oct-2022 (Valid in 5-yr window)</div>
              <div className="text-amber-300 font-bold">[09:14:05] Rule threshold_count evaluated: 4/3 contracts -&gt; 40.0 pts</div>
            </div>
          </div>

          {/* Human Evaluator Decision Controls */}
          <div className="pt-3 border-t border-gray-200 space-y-2">
            <span className="text-xs font-bold uppercase text-gray-700">Evaluator Review Decision</span>
            
            {decision === 'none' && (
              <div className="space-y-2">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setDecision('accepted')}
                    className="flex-1 bg-emerald-700 text-white font-semibold py-2 rounded text-xs hover:bg-emerald-800 transition flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <CheckCircle2 size={15} /> Accept AI Recommendation (40 Pts)
                  </button>
                  <button 
                    onClick={() => setShowOverrideInput(!showOverrideInput)}
                    className="bg-amber-100 text-amber-900 border border-amber-300 font-semibold px-3 py-2 rounded text-xs hover:bg-amber-200 transition flex items-center gap-1"
                  >
                    <Edit3 size={14} /> Override
                  </button>
                </div>

                {showOverrideInput && (
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 space-y-2 mt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-amber-900">Override Score:</label>
                      <input 
                        type="number" 
                        value={overrideScore} 
                        onChange={(e) => setOverrideScore(Number(e.target.value))}
                        className="w-20 bg-white border border-amber-300 rounded px-2 py-1 text-xs font-bold text-amber-900 text-center focus:outline-none" 
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-amber-800 block mb-1">Mandatory Override Justification:</label>
                      <textarea 
                        value={justification}
                        onChange={(e) => setJustification(e.target.value)}
                        placeholder="Explain technical rationale for score modification..."
                        className="w-full bg-white border border-amber-300 rounded p-2 text-xs text-gray-800 focus:outline-none focus:border-amber-500"
                        rows={2}
                      />
                    </div>
                    <button 
                      onClick={() => { if(justification.trim()) setDecision('overridden'); }}
                      disabled={!justification.trim()}
                      className="w-full bg-amber-700 text-white font-semibold py-1.5 rounded text-xs hover:bg-amber-800 transition disabled:opacity-50"
                    >
                      Confirm Score Override
                    </button>
                  </div>
                )}
              </div>
            )}

            {decision === 'accepted' && (
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600" size={18} />
                  <div>
                    <div className="text-xs font-bold text-emerald-900">Score Accepted (40 Pts)</div>
                    <div className="text-[11px] text-emerald-700">Verified by Evaluator R.K. Verma</div>
                  </div>
                </div>
                <button onClick={() => setDecision('none')} className="text-xs text-gray-500 underline hover:text-gray-800">Change</button>
              </div>
            )}

            {decision === 'overridden' && (
              <div className="bg-amber-50 border border-amber-300 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="text-amber-600" size={18} />
                  <div>
                    <div className="text-xs font-bold text-amber-900">Score Overridden to {overrideScore} Pts</div>
                    <div className="text-[11px] text-amber-800 italic">"{justification}"</div>
                  </div>
                </div>
                <button onClick={() => setDecision('none')} className="text-xs text-gray-500 underline hover:text-gray-800">Change</button>
              </div>
            )}
          </div>
        </div>

        {/* Pane 3: Highlighted PDF Document Viewer (Right - 40%) */}
        <div className="flex-1 bg-gray-900 rounded-lg shadow-2xs border border-gray-800 p-3 flex flex-col min-w-0">
          
          {/* PDF Toolbar */}
          <div className="flex items-center justify-between text-gray-300 text-xs pb-2.5 border-b border-gray-800 shrink-0">
            <div className="flex items-center gap-2 font-mono">
              <FileText size={15} className="text-[#0F6B6E]" />
              <span className="font-semibold text-white">Completion_Cert_2022.pdf</span>
              <span className="text-gray-500">(Page 4 of 12)</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"><ZoomOut size={15} /></button>
              <span className="font-mono text-[11px]">100%</span>
              <button className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"><ZoomIn size={15} /></button>
              <div className="h-4 w-px bg-gray-800 mx-1"></div>
              <button className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"><ChevronLeft size={15} /></button>
              <button className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"><ChevronRight size={15} /></button>
              <div className="h-4 w-px bg-gray-800 mx-1"></div>
              <button className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"><Download size={15} /></button>
            </div>
          </div>

          {/* PDF Page Canvas with Grounded OCR Bounding Boxes */}
          <div className="flex-1 bg-white mt-2 rounded overflow-auto relative p-8 shadow-inner flex justify-center">
            <div className="w-full max-w-lg space-y-6 font-serif text-gray-800 text-xs leading-relaxed relative bg-[#FAF9F6] p-8 rounded border border-gray-300 shadow-md">
              
              {/* Document Header */}
              <div className="text-center border-b border-gray-400 pb-4 space-y-1">
                <div className="font-bold text-sm uppercase tracking-widest text-gray-900 font-sans">
                  UTTAR PRADESH MEDICAL SUPPLIES CORPORATION
                </div>
                <div className="text-[10px] text-gray-600 font-sans uppercase tracking-wider">
                  DEPARTMENT OF HEALTH & FAMILY WELFARE • GOVT OF UP
                </div>
                <div className="text-[10px] font-mono text-gray-500 pt-1">Ref No: UPMSCL/CERT/2022/8841</div>
              </div>

              <h2 className="text-center font-bold text-sm text-gray-900 tracking-wide font-sans pt-2">
                WORK COMPLETION CERTIFICATE
              </h2>

              <p className="text-justify pt-2">
                This is to certify that M/s <span className="font-semibold text-gray-900">Avantika Pharma Ltd</span> (Registration No: L24231UP2010PLC04123) has successfully executed the supply, installation, and commissioning of medical devices under Contract Order No: <span className="font-mono">UPMSCL/RC/ICU/2022/04</span>.
              </p>

              {/* OCR Bounding Box 1: Highlighted Evidence */}
              <div className="relative border-2 border-amber-500 bg-amber-100/60 p-2.5 rounded shadow-sm">
                <div className="absolute -top-3 left-3 bg-amber-600 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-2xs flex items-center gap-1">
                  <Zap size={10} /> Grounded OCR Match • Conf: 98%
                </div>
                <p className="font-semibold text-gray-900">
                  Scope of Work: <span className="underline decoration-amber-600 decoration-2 font-bold">Supply of ICU Patient Monitors & Advanced Devices</span> across 14 District Hospitals in Uttar Pradesh.
                </p>
                <div className="text-[10px] font-mono text-amber-900 mt-1 flex justify-between">
                  <span>Contract Value: <strong className="text-gray-900">₹2,50,00,000 (Rupees Two Crore Fifty Lakhs)</strong></span>
                </div>
              </div>

              {/* OCR Bounding Box 2: Highlighted Date Evidence */}
              <div className="relative border-2 border-emerald-500 bg-emerald-100/60 p-2.5 rounded shadow-sm">
                <div className="absolute -top-3 left-3 bg-emerald-700 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-2xs flex items-center gap-1">
                  <CheckCircle2 size={10} /> Date Verified • Conf: 96%
                </div>
                <p className="font-semibold text-gray-900">
                  Date of Satisfactory Completion: <span className="underline decoration-emerald-600 decoration-2 font-bold">15-October-2022</span>. Performance during 12-month warranty period was reported as Satisfactory.
                </p>
              </div>

              <div className="pt-8 flex justify-between items-end text-[10px]">
                <div>
                  <div>Place: Lucknow</div>
                  <div>Date: 20-Nov-2022</div>
                </div>
                <div className="text-center font-sans">
                  <div className="w-24 border-b border-gray-400 mb-1 mx-auto"></div>
                  <div className="font-bold text-gray-900">Dr. S.K. Rastogi</div>
                  <div className="text-gray-600">Chief Medical Superintendent</div>
                  <div className="text-gray-500">District Hospital Lucknow</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
