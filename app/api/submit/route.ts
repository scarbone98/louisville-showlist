

export async function POST(request: Request) {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(2000);
    return new Response(JSON.stringify({ data: 'success' }), { status: 200 });
}