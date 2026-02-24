'use client';
import { useState } from 'react';

export default function CreateCampaign() {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [recipients, setRecipients] = useState('');

  const handleSubmit = async () => {
    const emailArray = recipients.split(',');

    await fetch('/api/campaigns', {
      method: 'POST',
      body: JSON.stringify({ subject, content, recipients: emailArray })
    });

    await fetch('/api/campaigns/send', {
      method: 'POST',
      body: JSON.stringify({ subject, content, recipients: emailArray })
    });

    alert('Campaign Sent Successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">Create Email Campaign</h2>

      <input
        className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400"
        placeholder="Subject"
        onChange={e => setSubject(e.target.value)}
      />

      <textarea
        className="w-full border p-3 rounded-lg mb-4 h-40 focus:ring-2 focus:ring-blue-400"
        placeholder="HTML Content"
        onChange={e => setContent(e.target.value)}
      />

      <input
        className="w-full border p-3 rounded-lg mb-6 focus:ring-2 focus:ring-blue-400"
        placeholder="Recipients (comma separated emails)"
        onChange={e => setRecipients(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
      >
        Send Campaign
      </button>
    </div>
  );
}