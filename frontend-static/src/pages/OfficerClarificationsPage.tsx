import { useState } from 'react';
import { HelpCircle, FileText, Sparkles } from 'lucide-react';

export const OfficerClarificationsPage = () => {
  const [queries, setQueries] = useState([
    {
      id: 1,
      bidder: 'Avantika Pharma Ltd (Rajesh Kumar)',
      date: '01 Oct 2026',
      query: 'Can the bidder submit equivalent WHO-GMP or NABL quality certification instead of state GMP?',
      status: 'Pending Response',
      response: 'Yes. Equivalent WHO-GMP / NABL certificates meeting stated tender specifications are accepted.'
    },
    {
      id: 2,
      bidder: 'Sanjivani Lifesciences Ltd',
      date: '02 Oct 2026',
      query: 'Is the 3-year turnover requirement strictly based on audited balance sheets or can CA provisional certificates be accepted?',
      status: 'Pending Response',
      response: 'Audited balance sheets with UDIN are required. Provisional certificates are not accepted.'
    }
  ]);

  const [responseInputs, setResponseInputs] = useState<{ [key: number]: string }>({});
  const [corrigendumSummary, setCorrigendumSummary] = useState('');
  const [snapshotVersion, setSnapshotVersion] = useState(1);
  const [corrigendaHistory, setCorrigendaHistory] = useState([
    {
      version: 'Snapshot v1.0',
      date: '02 Aug 2026',
      issuedBy: 'S. Mishra (Tender Admin)',
      summary: 'Original published tender specification for Essential Drugs Group B.'
    }
  ]);

  const handlePublishResponse = (id: number) => {
    const text = responseInputs[id] || queries.find(q => q.id === id)?.response || '';
    setQueries(prev => prev.map(q => q.id === id ? { ...q, response: text, status: 'Published' } : q));
  };

  const handleIssueCorrigendum = () => {
    if (!corrigendumSummary.trim()) return;
    const newVersion = snapshotVersion + 1;
    setSnapshotVersion(newVersion);
    setCorrigendaHistory(prev => [
      {
        version: `Snapshot v${newVersion}.0`,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        issuedBy: 'R. K. Verma (Member TEC)',
        summary: corrigendumSummary
      },
      ...prev
    ]);
    setCorrigendumSummary('');
    alert(`Corrigendum published successfully! Tender updated to Snapshot v${newVersion}.0.`);
  };

  return (
    <div className="flex-1 flex flex-col gap-6 max-w-[1120px]">
      {/* Title Header */}
      <div className="flex flex-col gap-1">
        <h1 className="h1">Pre-Bid Queries &amp; Corrigendum Workbench</h1>
        <p className="lead">Respond to bidder technical queries and issue official corrigenda with versioned tender snapshot freezes.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Incoming Pre-Bid Queries */}
        <div className="col-span-2 space-y-5">
          <div className="card p-5 space-y-4">
            <div className="flex justify-between items-center border-b border-[#EFEDE6] pb-3">
              <h2 className="ct flex items-center gap-2">
                <HelpCircle size={18} className="text-[#0F6B6E]" /> Incoming Pre-Bid Queries from Bidders
              </h2>
              <span className="st s-check font-bold">{queries.filter(q => q.status === 'Pending Response').length} Pending</span>
            </div>

            <div className="space-y-4">
              {queries.map(q => (
                <div key={q.id} className="p-4 border border-[#E4E2DA] rounded-lg bg-white space-y-3 shadow-2xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-sm text-[#1A1D21]">{q.bidder}</div>
                      <div className="text-[11px] text-[#6B7079]">Received: {q.date}</div>
                    </div>
                    <span className={`st ${q.status === 'Published' ? 's-pass' : 's-check'} text-[11px]`}>{q.status}</span>
                  </div>

                  <div className="p-3 bg-[#FAF9F6] border border-[#EFEDE6] rounded text-xs text-[#2F343B]">
                    <strong>Query:</strong> {q.query}
                  </div>

                  {q.status === 'Published' ? (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-950">
                      <strong>Published Response:</strong> {q.response}
                    </div>
                  ) : (
                    <div className="space-y-2 pt-1">
                      <textarea
                        value={responseInputs[q.id] !== undefined ? responseInputs[q.id] : q.response}
                        onChange={(e) => setResponseInputs({ ...responseInputs, [q.id]: e.target.value })}
                        placeholder="Draft official response..."
                        className="w-full h-16 border border-[#D6D3CA] rounded p-2 text-xs focus:outline-none focus:border-[#0F6B6E]"
                      />
                      <div className="flex justify-end">
                        <button onClick={() => handlePublishResponse(q.id)} className="btn pri text-xs px-4 h-8">
                          Publish Response to Bidder Portal
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Issue Corrigendum Widget & History */}
        <div className="space-y-5">
          <div className="card p-5 space-y-4">
            <h2 className="ct flex items-center gap-2">
              <Sparkles size={18} className="text-[#E0A458]" /> Issue Official Corrigendum
            </h2>

            <div className="text-xs text-[#6B7079] leading-relaxed">
              Issuing a corrigendum creates a new immutable <strong>ConfigSnapshot v{snapshotVersion + 1}.0</strong> and notifies all registered bidders.
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#1A1D21]">Summary of Spec / Rule Changes:</label>
              <textarea
                value={corrigendumSummary}
                onChange={(e) => setCorrigendumSummary(e.target.value)}
                placeholder="e.g. Amended Clause 4.2 to accept WHO-GMP/NABL certificates in lieu of state GMP..."
                className="w-full h-24 border border-[#D6D3CA] rounded p-2.5 text-xs focus:outline-none focus:border-[#0F6B6E]"
              />
            </div>

            <button onClick={handleIssueCorrigendum} className="btn pri w-full text-xs h-9 justify-center">
              Publish Corrigendum (Freeze v{snapshotVersion + 1}.0)
            </button>
          </div>

          {/* Corrigenda History */}
          <div className="card p-5 space-y-3">
            <h3 className="ct flex items-center gap-2">
              <FileText size={16} className="text-[#6B7079]" /> Corrigenda History
            </h3>
            <div className="space-y-2 text-xs">
              {corrigendaHistory.map((c, i) => (
                <div key={i} className="p-3 bg-[#FAF9F6] border border-[#EFEDE6] rounded space-y-1">
                  <div className="flex justify-between font-bold text-[#1A1D21]">
                    <span>{c.version}</span>
                    <span className="text-[11px] font-normal text-[#6B7079]">{c.date}</span>
                  </div>
                  <div className="text-[11px] text-[#0F6B6E]">{c.issuedBy}</div>
                  <div className="text-[#4A4F57] text-[11px]">{c.summary}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
