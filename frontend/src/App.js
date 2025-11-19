// frontend/src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./index.css";

/*
  Professional Promoter List UI
  - Looks up /api/promoters (GET). Expected shape:
    [{ _id, name, company, ratePct (0-100), accuracyPct (0-100), promotedCount, description, avatarUrl }]
  - Falls back to sample data if fetch fails.
  - Features: search, sort, filter by min accuracy, responsive cards + table, accessible controls.
*/

const SAMPLE_PROMOTERS = [
  {
    _id: "p1",
    name: "Rhea Kapoor",
    company: "BrightEvents",
    ratePct: 78,
    accuracyPct: 92,
    promotedCount: 42,
    description: "Expert in viral giveaways & micro-influencer promotions.",
    avatarUrl: ""
  },
  {
    _id: "p2",
    name: "Saurav Mehta",
    company: "SparkReach",
    ratePct: 65,
    accuracyPct: 84,
    promotedCount: 30,
    description: "Focused on student & campus campaigns with measurable ROI.",
    avatarUrl: ""
  },
  {
    _id: "p3",
    name: "Nisha Rao",
    company: "TrendLift",
    ratePct: 88,
    accuracyPct: 96,
    promotedCount: 75,
    description: "High-conversion creator partnerships and organic reach.",
    avatarUrl: ""
  },
  {
    _id: "p4",
    name: "Aman Verma",
    company: "UrbanPromo",
    ratePct: 54,
    accuracyPct: 71,
    promotedCount: 18,
    description: "Local market activations and event-focused promotions.",
    avatarUrl: ""
  }
];

export default function App() {
  const [promoters, setPromoters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI controls
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("accuracy"); // accuracy | rate | promoted
  const [minAccuracy, setMinAccuracy] = useState(0);
  const [viewMode, setViewMode] = useState("cards"); // cards | table

  useEffect(() => {
    let canceled = false;
    async function fetchPromoters() {
      setLoading(true);
      setError(null);
      try {
        const resp = await fetch((process.env.REACT_APP_API || "/api") + "/promoters");
        if (!resp.ok) throw new Error(`Server responded ${resp.status}`);
        const data = await resp.json();
        if (!canceled) {
          setPromoters(Array.isArray(data) ? data : SAMPLE_PROMOTERS);
        }
      } catch (err) {
        // fallback to sample data
        if (!canceled) {
          setError("Using sample data — couldn't reach backend.");
          setPromoters(SAMPLE_PROMOTERS);
        }
      } finally {
        if (!canceled) setLoading(false);
      }
    }
    fetchPromoters();
    return () => { canceled = true; };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return promoters
      .filter(p => p.accuracyPct >= Number(minAccuracy || 0))
      .filter(p => {
        if (!q) return true;
        return (
          p.name.toLowerCase().includes(q) ||
          (p.company || "").toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        if (sortBy === "accuracy") return b.accuracyPct - a.accuracyPct;
        if (sortBy === "rate") return b.ratePct - a.ratePct;
        if (sortBy === "promoted") return b.promotedCount - a.promotedCount;
        return 0;
      });
  }, [promoters, query, sortBy, minAccuracy]);

  return (
    <div className="promos-app">
      <header className="promos-header">
        <div className="brand">
          <div className="logo">P</div>
          <div>
            <h1>Promos — Promoter Marketplace</h1>
            <p className="muted">Compare promoters by promotion rate and accuracy</p>
          </div>
        </div>

        <div className="controls">
          <div className="control-row">
            <input
              aria-label="Search promoters"
              className="input"
              placeholder="Search by name, company or skill..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />

            <label className="small">
              Min accuracy
              <input
                type="range"
                min={0}
                max={100}
                value={minAccuracy}
                onChange={e => setMinAccuracy(e.target.value)}
              />
            </label>

            <select value={sortBy} onChange={e => setSortBy(e.target.value)} aria-label="Sort by">
              <option value="accuracy">Sort: Accuracy</option>
              <option value="rate">Sort: Promotion Rate</option>
              <option value="promoted">Sort: Promos</option>
            </select>

            <div className="view-toggle" role="tablist" aria-label="View mode">
              <button className={viewMode === "cards" ? "btn active" : "btn"} onClick={() => setViewMode("cards")}>Cards</button>
              <button className={viewMode === "table" ? "btn active" : "btn"} onClick={() => setViewMode("table")}>Table</button>
            </div>
          </div>

          <div className="stats-line">
            <div>{filtered.length} promoter{filtered.length !== 1 ? "s" : ""} found</div>
            <div className="muted">{error ? error : (loading ? "Loading…" : "Live data")}</div>
          </div>
        </div>
      </header>

      <main className="promos-main">
        {viewMode === "cards" ? (
          <section className="cards-grid" aria-live="polite">
            {filtered.map(p => <PromoterCard key={p._id} p={p} />)}
          </section>
        ) : (
          <section className="table-wrap" aria-live="polite">
            <table className="promos-table" role="table">
              <thead>
                <tr>
                  <th>Promoter</th>
                  <th>Company</th>
                  <th>Promotion Rate</th>
                  <th>Accuracy</th>
                  <th>Promos</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => (
                  <tr key={p._id}>
                    <td>
                      <div className="cell-person">
                        <div className="avatar" aria-hidden>{initials(p.name)}</div>
                        <div>
                          <div className="strong">{p.name}</div>
                          <div className="muted small">{p.description}</div>
                        </div>
                      </div>
                    </td>
                    <td>{p.company}</td>
                    <td>
                      <ProgressBar value={p.ratePct} label={`${p.ratePct}%`} />
                    </td>
                    <td>
                      <ProgressBar value={p.accuracyPct} label={`${p.accuracyPct}%`} accent />
                    </td>
                    <td>{p.promotedCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>

      <footer className="promos-footer">
        <div>© {new Date().getFullYear()} Promos</div>
        <div className="muted">Built for promoters & clients · Clean, auditable metrics</div>
      </footer>
    </div>
  );
}

/* ---------- Small components ---------- */

function PromoterCard({ p }) {
  return (
    <article className="card" role="article" aria-label={`${p.name} — ${p.company}`}>
      <header className="card-head">
        <div className="avatar big" aria-hidden>{initials(p.name)}</div>
        <div className="meta">
          <div className="strong">{p.name}</div>
          <div className="muted">{p.company}</div>
        </div>
      </header>

      <div className="card-body">
        <p className="desc">{p.description}</p>
        <div className="metrics">
          <div className="metric">
            <div className="label small muted">Promotion Rate</div>
            <ProgressBar value={p.ratePct} label={`${p.ratePct}%`} />
          </div>

          <div className="metric">
            <div className="label small muted">Accuracy</div>
            <ProgressBar value={p.accuracyPct} label={`${p.accuracyPct}%`} accent />
          </div>
        </div>
      </div>

      <footer className="card-foot">
        <div className="muted small">Promos run: <strong>{p.promotedCount}</strong></div>
        <div>
          <button className="btn primary">Invite</button>
          <button className="btn outline">View</button>
        </div>
      </footer>
    </article>
  );
}

function ProgressBar({ value = 0, label = "", accent = false }) {
  const safe = Math.max(0, Math.min(100, Number(value)));
  return (
    <div className={`progress ${accent ? "accent" : ""}`} aria-hidden>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${safe}%` }} />
      </div>
      <div className="progress-label small">{label}</div>
    </div>
  );
}

/* helpers */
function initials(name = "") {
  return name.split(" ").map(s => s[0] || "").slice(0, 2).join("").toUpperCase();
}
