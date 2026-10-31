import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Github, Star, GitFork, BookOpen, Code, ExternalLink, Activity } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

interface Repository {
  id: number; name: string; description: string | null;
  html_url: string; language: string | null;
  stargazers_count: number; forks_count: number; updated_at: string;
}

export const GitHubActivity: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [, setLoading] = useState(true);

  const fallbackRepos: Repository[] = [
    { id: 1, name: "Anime-EDA-Project", description: "Exploratory Data Analysis of anime dataset using Python, Pandas, NumPy, and Matplotlib.", html_url: "https://github.com/sharvilpawar123-source/Anime-EDA-Project", language: "Jupyter Notebook", stargazers_count: 1, forks_count: 0, updated_at: "2026-07-21" },
    { id: 2, name: "Country-Data-Analysis-Project-", description: "Real-world country data analysis using Python, Pandas, and NumPy to extract meaningful insights.", html_url: "https://github.com/sharvilpawar123-source/Country-Data-Analysis-Project-", language: "Jupyter Notebook", stargazers_count: 1, forks_count: 0, updated_at: "2026-07-21" },
    { id: 3, name: "CSI-Python-SIG-2025", description: "Official CSI Python SIG 2025 repository. Session slides, assignments, and AI/ML project materials.", html_url: "https://github.com/sharvilpawar123-source/CSI-Python-SIG-2025", language: "Python", stargazers_count: 2, forks_count: 1, updated_at: "2026-07-15" },
    { id: 4, name: "Clone-Of-Amazon", description: "Amazon.com layout clone built with HTML and CSS focusing on design replication techniques.", html_url: "https://github.com/sharvilpawar123-source/Clone-Of-Amazon", language: "HTML / CSS", stargazers_count: 0, forks_count: 0, updated_at: "2025-11-06" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${portfolioData.socials.github.handle}/repos?sort=updated&per_page=6`);
        if (res.ok) { const data = await res.json(); if (Array.isArray(data) && data.length > 0) { setRepos(data); setLoading(false); return; } }
      } catch {}
      setRepos(fallbackRepos); setLoading(false);
    };
    fetchData();
  }, []);

  const langData = [
    { name: 'Python', percentage: 45, color: '#f97316' },
    { name: 'C++', percentage: 25, color: '#fb923c' },
    { name: 'JavaScript', percentage: 18, color: '#272727' },
    { name: 'HTML/CSS', percentage: 12, color: '#333' },
  ];

  return (
    <section id="github" className="py-24 relative bg-[#f8f8f8] dark:bg-[#0d0d0d] border-t border-[#eee] dark:border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="07" label="GITHUB ANALYTICS" title="CODE IN THE WILD"
          subtitle="Live repository overview, language distribution, and open-source code metrics." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Stats card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#e5e5e5] dark:border-[#272727] flex flex-col justify-between shadow-sm dark:shadow-none">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 border border-[#f97316]/25 flex items-center justify-center text-[#f97316]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-white">github.com/{portfolioData.socials.github.handle}</h3>
                  <span className="font-mono text-xs text-[#f97316]">VERIFIED DEVELOPER PROFILE</span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#a3a3a3]">
                {[
                  { icon: BookOpen, label: 'Public Repositories', value: '10+' },
                  { icon: Code, label: 'Primary Language', value: 'Python / C++' },
                  { icon: Activity, label: 'Activity Focus', value: 'AI, Data & Web' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex justify-between items-center p-3 rounded-lg bg-[#1a1a1a] border border-[#272727]">
                    <span className="flex items-center gap-2"><Icon className="w-4 h-4 text-[#f97316]" />{label}</span>
                    <span className="font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1f1f1f]">
              <a href={portfolioData.socials.github.url} target="_blank" rel="noopener noreferrer" data-cursor
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] text-black font-mono text-xs font-bold tracking-wider hover:bg-[#ea6c0a] transition-colors shadow-orange-glow-sm">
                VIEW GITHUB PROFILE <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Language chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }} className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#272727]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-sm font-bold text-white uppercase">LANGUAGE DISTRIBUTION</h3>
              <span className="font-mono text-xs text-[#f97316]">ANALYSIS</span>
            </div>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={langData} layout="vertical" margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" tick={{ fill: '#a3a3a3', fontSize: 12, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} width={100} />
                  <Tooltip contentStyle={{ backgroundColor: '#141414', borderColor: '#272727', borderRadius: '8px', color: '#fff', fontFamily: 'JetBrains Mono', fontSize: '12px' }} formatter={(val: number) => [`${val}%`, 'Share']} />
                  <Bar dataKey="percentage" radius={[0, 6, 6, 0]} barSize={16}>
                    {langData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[#1f1f1f] font-mono text-[11px]">
              {langData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[#a3a3a3]">{item.name} <span className="text-white font-bold">{item.percentage}%</span></span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Repo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, idx) => (
            <motion.a key={repo.id || idx} href={repo.html_url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }} data-cursor
              className="p-6 rounded-2xl bg-[#141414] border border-[#272727] hover:border-[#f97316]/50 hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-mono text-sm font-bold text-white group-hover:text-[#f97316] transition-colors flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#f97316]" />{repo.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-[#555555] group-hover:text-[#f97316] transition-colors" />
                </div>
                <p className="font-sans text-xs text-[#a3a3a3] leading-relaxed mb-4 line-clamp-2">
                  {repo.description || 'Repository containing code, notes, and exploratory scripts.'}
                </p>
              </div>
              <div className="flex items-center justify-between font-mono text-[11px] text-[#555555] pt-3 border-t border-[#1f1f1f]">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#f97316]" />{repo.language || 'Code'}</div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-[#f97316]" />{repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" />{repo.forks_count}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
