export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text, voice_id, provider, api_key } = req.body;

    if (!text || !api_key) {
      return res.status(400).json({ error: 'Missing text or api_key' });
    }

    let url, headers, body;

    if (provider === 'elevenlabs') {
      const voiceId = voice_id || 'EXAVITQu4vr4xnSDxMaL';
      url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
      headers = {
        'Content-Type': 'application/json',
        'xi-api-key': api_key,
        'Accept': 'audio/mpeg'
      };
      body = JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: { stability: 0.5, similarity_boost: 0.75 }
      });
    } else {
      // Smallest AI (default)
      url = 'https://api.smallest.ai/waves/v1/lightning-v3.1/get_speech';
      headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      };
      body = JSON.stringify({
        text,
        voice_id: voice_id || 'sophia',
        sample_rate: 24000,
        output_format: 'mp3'
      });
    }

    const response = await fetch(url, { method: 'POST', headers, body });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const audioBuffer = await response.arrayBuffer();

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(Buffer.from(audioBuffer));

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
