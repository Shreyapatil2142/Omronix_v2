import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { usePersona, activeTenders } from '../PersonaContext';
import { ShieldCheck, FileCheck, CheckCircle2, ChevronRight, Calculator, Check, AlertTriangle, UploadCloud, Lock, Sparkles, Plus, Trash2 } from 'lucide-react';

export const TenderWizardPage = () => {
  const { setSelectedTender } = usePersona();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Step 1: Basic Info
  const [title, setTitle] = useState('Procurement of Hospital ICU Monitors & Syringe Pumps');
  const [dept, setDept] = useState('UP Medical Supplies Corporation Ltd');
  const [value, setValue] = useState('₹32,50,00,000');
  const [emd, setEmd] = useState('₹6,50,000');
  const [method, setMethod] = useState<'QCBS' | 'L1'>('QCBS');

  // Step 3: PQ Rules
  const [turnover, setTurnover] = useState(20);
  const [expYears, setExpYears] = useState(5);

  // Step 4: Technical Criteria
  const [criteria, setCriteria] = useState([
    { id: 1, name: 'Past Supply Experience in Govt Hospitals', points: 30, clause: 'Clause 4.1' },
    { id: 2, name: 'Manufacturing Plant Capacity & ISO 13485', points: 30, clause: 'Clause 4.2' },
    { id: 3, name: 'WHO-GMP & Quality Compliance Certs', points: 20, clause: 'Clause 4.3' },
    { id: 4, name: 'Financial Net Worth & Liquidity Ratio', points: 20, clause: 'Clause 4.4' }
  ]);

  const totalPoints = criteria.reduce((sum, c) => sum + c.points, 0);

  const handleAddCriterion = () => {
    setCriteria(prev => [
      ...prev,
      { id: Date.now(), name: 'New Technical Specification Rule', points: 10, clause: 'Clause 4.5' }
    ]);
  };

  const handleRemoveCriterion = (id: number) => {
    setCriteria(prev => prev.filter(c => c.id !== id));
  };

  const handleApproveAndPublish = () => {
    const newCode = `MSC/RC/EQP/2026-27/0${activeTenders.length + 14}`;
    const newTender = {
      id: newCode,
      code: `Tender 0${activeTenders.length + 14}`,
      title: title,
      dept: dept,
      value: value,
      bidsReceived: 0,
      status: 'published' as const,
      publishedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      method: method,
      qcbsRatio: method === 'QCBS' ? '70:30' : 'L1 Rate'
    };

    activeTenders.unshift(newTender);
    setSelectedTender(newTender);
    alert(`Tender ${newTender.code} successfully created, approved, and frozen to Snapshot v1.0!`);
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-[#E4E2DA] pb-4">
        <div>
          <h1 className="h1 text-2xl">Create &amp; Configure New Tender</h1>
          <p className="lead text-xs">Define eligibility criteria, technical rule weights, and financial evaluation specs with versioned snapshot freezing.</p>
        </div>
        <span className="st s-pass text-xs font-semibold px-3 py-1">Rule Builder Active</span>
      </div>

      {/* 6-Step Stepper Bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E4E2DA] shadow-2xs select-none">
        {[
          { s: 1, label: 'Basic Info' },
          { s: 2, label: 'Documents' },
          { s: 3, label: 'PQ Criteria' },
          { s: 4, label: 'Technical Rules' },
          { s: 5, label: 'Financial Config' },
          { s: 6, label: 'Validate & Freeze' }
        ].map(item => (
          <div key={item.s} className="flex items-center gap-2 cursor-pointer" onClick={() => setStep(item.s)}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step === item.s 
                ? 'bg-[#0F6B6E] text-white shadow-2xs ring-4 ring-[#DCEBEA]' 
                : item.s < step 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-gray-100 text-gray-500'
            }`}>
              {item.s < step ? <Check size={16} /> : item.s}
            </div>
            <span className={`text-xs font-medium hidden md:inline ${step === item.s ? 'text-[#0F6B6E] font-bold' : 'text-gray-600'}`}>
              {item.label}
            </span>
            {item.s < 6 && <div className="h-0.5 w-6 bg-gray-200 hidden md:block"></div>}
          </div>
        ))}
      </div>

      {/* Step Content Container */}
      <div className="card p-6 space-y-5">
        
        {/* STEP 1: BASIC INFO */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="ct flex items-center gap-2">
              <FileCheck size={18} className="text-[#0F6B6E]" /> Step 1: Basic Metadata &amp; Procurement Category
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-gray-800 block mb-1">Tender Title</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2.5 border border-[#D6D3CA] rounded-lg text-xs focus:outline-none focus:border-[#0F6B6E]" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-gray-800 block mb-1">Procuring Department / Authority</label>
                  <input 
                    type="text" 
                    value={dept} 
                    onChange={(e) => setDept(e.target.value)}
                    className="w-full p-2.5 border border-[#D6D3CA] rounded-lg text-xs focus:outline-none focus:border-[#0F6B6E]" 
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-800 block mb-1">Estimated Tender Value (₹)</label>
                  <input 
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full p-2.5 border border-[#D6D3CA] rounded-lg text-xs font-mono focus:outline-none focus:border-[#0F6B6E]" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-gray-800 block mb-1">EMD Security Deposit Amount (₹)</label>
                  <input 
                    type="text" 
                    value={emd} 
                    onChange={(e) => setEmd(e.target.value)}
                    className="w-full p-2.5 border border-[#D6D3CA] rounded-lg text-xs font-mono focus:outline-none focus:border-[#0F6B6E]" 
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-800 block mb-1">MSME &amp; Startup EMD Exemption</label>
                  <select className="w-full p-2.5 border border-[#D6D3CA] rounded-lg text-xs focus:outline-none focus:border-[#0F6B6E]">
                    <option>Allowed (Valid Udyam Certificate Exempts EMD)</option>
                    <option>Not Allowed (Standard Deposit Mandatory)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: DOCUMENT UPLOAD */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="ct flex items-center gap-2">
              <UploadCloud size={18} className="text-[#0F6B6E]" /> Step 2: Upload Notice Inviting Tender (NIT) &amp; Specs
            </h2>

            <div className="p-8 border-2 border-dashed border-[#0F6B6E]/40 rounded-xl bg-[#FAF9F6] text-center space-y-2">
              <UploadCloud size={36} className="mx-auto text-[#0F6B6E]" />
              <div className="font-bold text-sm text-[#1A1D21]">Drag &amp; Drop Tender NIT Document (PDF)</div>
              <p className="text-xs text-[#6B7079]">The AI Engine will automatically parse clauses, eligibility terms, and schedule of requirements.</p>
              <button className="btn pri text-xs px-4 h-8 mt-2">Browse Local Files</button>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 flex justify-between items-center">
              <span>Attached Document: <strong>NIT_ICU_Monitors_2026.pdf</strong> (14.2 MB)</span>
              <span className="font-bold">✓ Parsed 48 Pages</span>
            </div>
          </div>
        )}

        {/* STEP 3: PQ CRITERIA */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="ct flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#0F6B6E]" /> Step 3: Prequalification (PQ) Mandatory Criteria
            </h2>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#FAF9F6] border border-[#E4E2DA] rounded-lg space-y-2">
                <div className="font-bold text-[#1A1D21]">1. Minimum Average Annual Turnover (Last 3 Yrs)</div>
                <div className="flex items-center gap-3">
                  <input 
                    type="number" 
                    value={turnover} 
                    onChange={(e) => setTurnover(Number(e.target.value))}
                    className="w-28 p-2 border border-[#D6D3CA] rounded text-xs font-mono" 
                  />
                  <span className="text-gray-600 font-semibold">Crore INR (Supported by CA Certificate with UDIN)</span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF9F6] border border-[#E4E2DA] rounded-lg space-y-2">
                <div className="font-bold text-[#1A1D21]">2. Past Experience Requirement</div>
                <div className="flex items-center gap-3">
                  <input 
                    type="number" 
                    value={expYears} 
                    onChange={(e) => setExpYears(Number(e.target.value))}
                    className="w-28 p-2 border border-[#D6D3CA] rounded text-xs font-mono" 
                  />
                  <span className="text-gray-600 font-semibold">Years of manufacturing / supply experience in healthcare sector</span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF9F6] border border-[#E4E2DA] rounded-lg space-y-2">
                <div className="font-bold text-[#1A1D21]">3. Mandatory Quality Certifications</div>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <label className="flex items-center gap-2 bg-white p-2 rounded border border-gray-200">
                    <input type="checkbox" defaultChecked className="accent-[#0F6B6E]" /> ISO 13485 / ISO 9001
                  </label>
                  <label className="flex items-center gap-2 bg-white p-2 rounded border border-gray-200">
                    <input type="checkbox" defaultChecked className="accent-[#0F6B6E]" /> WHO-GMP Quality Certificate
                  </label>
                  <label className="flex items-center gap-2 bg-white p-2 rounded border border-gray-200">
                    <input type="checkbox" defaultChecked className="accent-[#0F6B6E]" /> NABL Test Compliance Report
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: TECHNICAL SCORE RULE BUILDER */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="ct flex items-center gap-2">
                <Calculator size={18} className="text-[#0F6B6E]" /> Step 4: Technical Score Rule Builder
              </h2>
              <div className={`text-xs px-3 py-1 rounded-full font-bold border ${
                totalPoints === 100 ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-red-50 text-red-800 border-red-300'
              }`}>
                Total Weight: {totalPoints} / 100 Points {totalPoints === 100 ? '✓ Valid' : '⚠️ Must sum to 100'}
              </div>
            </div>

            <div className="space-y-3 text-xs">
              {criteria.map((c, i) => (
                <div key={c.id} className="p-3.5 bg-[#FAF9F6] border border-[#E4E2DA] rounded-lg flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#14262B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <input 
                    type="text" 
                    value={c.name} 
                    onChange={(e) => {
                      const val = e.target.value;
                      setCriteria(prev => prev.map(item => item.id === c.id ? { ...item, name: val } : item));
                    }}
                    className="flex-1 p-2 border border-[#D6D3CA] rounded text-xs focus:outline-none focus:border-[#0F6B6E]" 
                  />
                  <input 
                    type="text" 
                    value={c.clause} 
                    onChange={(e) => {
                      const val = e.target.value;
                      setCriteria(prev => prev.map(item => item.id === c.id ? { ...item, clause: val } : item));
                    }}
                    className="w-24 p-2 border border-[#D6D3CA] rounded text-xs font-mono text-center" 
                  />
                  <div className="flex items-center gap-1">
                    <input 
                      type="number" 
                      value={c.points} 
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setCriteria(prev => prev.map(item => item.id === c.id ? { ...item, points: val } : item));
                      }}
                      className="w-20 p-2 border border-[#D6D3CA] rounded text-xs font-mono font-bold text-[#0F6B6E] text-right" 
                    />
                    <span className="font-bold text-gray-500">pts</span>
                  </div>
                  <button onClick={() => handleRemoveCriterion(c.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}

              <button onClick={handleAddCriterion} className="btn text-xs px-3 h-8 text-[#0F6B6E] border-[#0F6B6E]">
                <Plus size={14} className="mr-1" /> Add Technical Criterion
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: FINANCIAL CONFIG */}
        {step === 5 && (
          <div className="space-y-4">
            <h2 className="ct flex items-center gap-2">
              <Calculator size={18} className="text-[#0F6B6E]" /> Step 5: Financial Evaluation Method &amp; Sealed Covers
            </h2>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-[#FAF9F6] border border-[#E4E2DA] rounded-lg space-y-3">
                <label className="font-bold text-[#1A1D21] block">Select Evaluation Methodology:</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`p-3 rounded-lg border cursor-pointer flex items-start gap-2.5 ${
                    method === 'QCBS' ? 'bg-emerald-50 border-[#0F6B6E] text-emerald-950 font-semibold' : 'bg-white border-gray-200'
                  }`}>
                    <input 
                      type="radio" 
                      name="method" 
                      checked={method === 'QCBS'} 
                      onChange={() => setMethod('QCBS')}
                      className="mt-0.5 accent-[#0F6B6E]" 
                    />
                    <div>
                      <div className="font-bold">QCBS 70:30 (Quality &amp; Cost Based Selection)</div>
                      <div className="text-[11px] text-gray-600 font-normal">70% Technical Weight + 30% Financial Weight calculation</div>
                    </div>
                  </label>

                  <label className={`p-3 rounded-lg border cursor-pointer flex items-start gap-2.5 ${
                    method === 'L1' ? 'bg-emerald-50 border-[#0F6B6E] text-emerald-950 font-semibold' : 'bg-white border-gray-200'
                  }`}>
                    <input 
                      type="radio" 
                      name="method" 
                      checked={method === 'L1'} 
                      onChange={() => setMethod('L1')}
                      className="mt-0.5 accent-[#0F6B6E]" 
                    />
                    <div>
                      <div className="font-bold">L1 Least Cost Selection</div>
                      <div className="text-[11px] text-gray-600 font-normal">Lowest financial quote among technically qualified bidders</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E4E2DA] rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Lock size={18} className="text-[#0F6B6E]" />
                  <div>
                    <div className="font-bold text-[#1A1D21]">Two-Envelope Sealed Cover Security</div>
                    <div className="text-[11px] text-gray-600">Financial BOQs remain client-side encrypted until Technical Freeze</div>
                  </div>
                </div>
                <span className="st s-pass">Enforced 🔒</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: VALIDATE & FREEZE */}
        {step === 6 && (
          <div className="space-y-4">
            <h2 className="ct flex items-center gap-2">
              <Sparkles size={18} className="text-[#E0A458]" /> Step 6: Review, Validate &amp; Freeze Tender Contract
            </h2>

            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 size={20} className="text-emerald-700" /> Automated AI Validation Check Passed 100%
              </div>
              <ul className="list-disc list-inside text-xs space-y-1 opacity-90">
                <li>Technical criteria weights sum exactly to 100 points ({totalPoints}/100).</li>
                <li>Mandatory PQ rules defined with deterministic source clauses.</li>
                <li>Financial BOQ cover encryption active.</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAF9F6] border border-[#EFEDE6] rounded-xl space-y-2 text-xs">
              <div className="font-bold text-[#1A1D21]">Tender Configuration Summary:</div>
              <div className="grid grid-cols-2 gap-2 text-gray-700 font-mono">
                <div>Title: {title}</div>
                <div>Value: {value}</div>
                <div>Evaluation: {method} (70:30)</div>
                <div>EMD: {emd}</div>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button onClick={() => alert("Draft saved in database!")} className="btn text-xs px-4 h-10">
                Save Draft
              </button>
              <button onClick={handleApproveAndPublish} className="btn pri text-xs px-6 h-10 bg-emerald-700 hover:bg-emerald-800">
                <ShieldCheck size={16} className="mr-1.5" /> Approve &amp; Freeze Snapshot v1.0 (Publish Tender)
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Wizard Footer Navigation Controls */}
      <div className="flex justify-between items-center pt-2">
        <button 
          disabled={step === 1} 
          onClick={() => setStep(s => s - 1)} 
          className="btn text-xs px-4 h-9 disabled:opacity-40 cursor-pointer"
        >
          Back
        </button>

        {step < 6 && (
          <button 
            onClick={() => setStep(s => s + 1)} 
            className="btn pri text-xs px-5 h-9"
          >
            Next Step <ChevronRight size={16} className="ml-1" />
          </button>
        )}
      </div>

    </div>
  );
};

export const TenderDetailPage = () => {
  const { id: rawId } = useParams();
  const id = decodeURIComponent(rawId || '');
  const encodedId = encodeURIComponent(id);
  const { persona } = usePersona();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Tender {id}</h1>
          <p className="text-gray-500 text-sm mt-1">Supply of Medical Equipment for ICU • Status: <span className="font-semibold text-blue-600">Pending Approval</span></p>
        </div>
        <div className="flex gap-2">
          {persona.id === 'officer' && (
            <>
              <button className="bg-gray-100 px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-200">Submit Approval</button>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-green-700">Approve &amp; Publish</button>
              <button className="bg-purple-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-purple-700">Freeze Tech</button>
            </>
          )}
          <Link to={`/tenders/${encodedId}/bid`} className="bg-[#0F6B6E] text-white px-4 py-2 rounded text-sm font-semibold shadow hover:bg-opacity-90 transition flex items-center gap-1.5">
            <FileCheck size={16} /> Apply / Submit Bid
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-[#FAF9F6] p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-3">Key Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-500 block">Value</span>₹50,00,000</div>
              <div><span className="text-gray-500 block">Published</span>Oct 1, 2024</div>
              <div><span className="text-gray-500 block">Closing Date</span>Nov 1, 2024</div>
              <div><span className="text-gray-500 block">Eval Type</span>QCBS (80:20)</div>
            </div>
          </div>
          
          <div className="bg-[#FAF9F6] p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">Tender Workspaces</h3>
            <div className="grid grid-cols-2 gap-3">
               <Link to={`/tenders/${encodedId}/evaluation`} className="bg-white p-3.5 rounded shadow-sm border border-gray-200 hover:border-[#0F6B6E] flex items-center justify-between group transition">
                 <div className="flex items-center gap-3"><FileCheck className="text-[#0F6B6E]" /> <span className="font-medium text-sm text-gray-800">Evaluation Matrix</span></div>
                 <ChevronRight className="text-gray-400 group-hover:text-[#0F6B6E]" size={18} />
               </Link>
               <Link to={`/tenders/${encodedId}/commercial`} className="bg-white p-3.5 rounded shadow-sm border border-gray-200 hover:border-[#0F6B6E] flex items-center justify-between group transition">
                 <div className="flex items-center gap-3"><Calculator className="text-orange-600" /> <span className="font-medium text-sm text-gray-800">Commercial BOQ</span></div>
                 <ChevronRight className="text-gray-400 group-hover:text-[#0F6B6E]" size={18} />
               </Link>
               <Link to={`/tenders/${encodedId}/committee`} className="bg-white p-3.5 rounded shadow-sm border border-gray-200 hover:border-[#0F6B6E] flex items-center justify-between group transition">
                 <div className="flex items-center gap-3"><ShieldCheck className="text-purple-600" /> <span className="font-medium text-sm text-gray-800">Committee Workbench</span></div>
                 <ChevronRight className="text-gray-400 group-hover:text-[#0F6B6E]" size={18} />
               </Link>
               <Link to={`/tenders/${encodedId}/risk`} className="bg-white p-3.5 rounded shadow-sm border border-gray-200 hover:border-[#0F6B6E] flex items-center justify-between group transition">
                 <div className="flex items-center gap-3"><AlertTriangle className="text-red-600" /> <span className="font-medium text-sm text-gray-800">Collusion Risk Flags</span></div>
                 <ChevronRight className="text-gray-400 group-hover:text-[#0F6B6E]" size={18} />
               </Link>
               <Link to={`/tenders/${encodedId}/audit`} className="bg-white p-3.5 rounded shadow-sm border border-gray-200 hover:border-[#0F6B6E] flex items-center justify-between group transition col-span-2">
                 <div className="flex items-center gap-3"><ShieldCheck className="text-green-600" /> <span className="font-medium text-sm text-gray-800">Tamper-Evident Audit Trail &amp; Score Replay</span></div>
                 <ChevronRight className="text-gray-400 group-hover:text-[#0F6B6E]" size={18} />
               </Link>
            </div>
          </div>
        </div>
        
        <div className="col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-full">
            <h3 className="font-medium mb-4">Vertical Audit Timeline</h3>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white bg-green-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-3 rounded border border-gray-200 bg-gray-50 shadow-sm text-sm">Created by Admin</div>
               </div>
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-3 rounded border border-gray-200 bg-gray-50 shadow-sm text-sm">Pending Approval</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
