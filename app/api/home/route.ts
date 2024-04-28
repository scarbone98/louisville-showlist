import { faker } from '@faker-js/faker';

function generateVenue() {
    return {
        name: faker.company.name(),
        location: `${faker.location.country()}`,
        time: faker.date.future().toISOString()
    };
}

export async function GET(request: Request) {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(2000);
    const data = Array.from(Array(50)).map(() => generateVenue());
    data.sort((a: any, b: any) => new Date(a.time).getTime() - new Date(b.time).getTime());
    return new Response(JSON.stringify(data), { status: 200 });
}