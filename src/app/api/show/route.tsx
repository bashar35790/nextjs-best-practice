export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return new Response("console.log('Script loading')", {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}