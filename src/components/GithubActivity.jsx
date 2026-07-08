import React, { useEffect, useState } from 'react';

function fmtDate(iso) {
  try { return new Date(iso).toLocaleString(); } catch { return iso; }
}

export default function GithubActivity({ username = 'MariamAhmed004', limit = 6 }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers = { Accept: 'application/vnd.github.v3+json' };
    if (token) headers.Authorization = `token ${token}`;

    // attempt static file first
    fetch('/github-activity.json')
      .then(r => r.ok ? r.json() : Promise.reject('no-static'))
      .then(data => setEvents((data || []).slice(0, limit)))
      .catch(() => {
        // fallback to GitHub API (same code you have)
      })
      .finally(() => setLoading(false));

    return () => { mounted = false; };
  }, [username, limit]);

  if (loading) return <div className="github-activity">Loading GitHub activity…</div>;
  if (error) return <div className="github-activity">Error loading GitHub activity: {error}</div>;

  if (!events.length) return <div className="github-activity">No recent public activity found.</div>;

  return (
    <div className="github-activity page-shell">
      <div className="container py-4">
        <h2 className="h4 fw-bold mb-3">Recent GitHub activity</h2>
        <ul className="github-events list-unstyled mb-0">
          {events.map((ev) => (
            <li key={ev.id} className="github-event info-card mb-3 p-3">
              <div className="d-flex justify-content-between align-items-start gap-2">
                <div>
                  <div className="text-muted small">{fmtDate(ev.created_at)} · {ev.type.replace(/Event$/, '')}</div>
                  <div className="fw-semibold mt-1">{
                    ev.type === 'PushEvent'
                      ? `${ev.payload.commits?.[0]?.message || 'Pushed commits'} on ${ev.repo.name}`
                      : ev.type === 'CreateEvent'
                      ? `Created ${ev.payload.ref_type} ${ev.payload.ref || ''} in ${ev.repo.name}`
                      : ev.type === 'PullRequestEvent'
                      ? `${ev.payload.action} pull request in ${ev.repo.name}`
                      : ev.type === 'IssuesEvent'
                      ? `${ev.payload.action} issue in ${ev.repo.name}`
                      : `${ev.type} in ${ev.repo.name}`
                  }</div>
                  <div className="small text-light-emphasis mt-1">{ev.repo && <a href={`https://github.com/${ev.repo.name}`} target="_blank" rel="noreferrer">{ev.repo.name}</a>}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
