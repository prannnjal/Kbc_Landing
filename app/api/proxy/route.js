export async function POST(req) {
  try {
    const data = await req.json();

    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbw02ASCe6HDf1WscHlzwGXZpkRsAZo9ajW230SiErJ23dYanmQiQXb-OhIVY27oNE8XAg/exec";

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const text = await response.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      return new Response(JSON.stringify({ error: "Invalid JSON from Google Script", raw: text }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Proxy failed", message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
} 