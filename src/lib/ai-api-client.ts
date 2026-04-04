import type { Item } from '@/types';

const API_URL = 'http://localhost:8080/ai';

class AIApiClient {
    public async getDescription(item: Item) {
        return (
            await fetch(`${API_URL}/description`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'post',
                body: JSON.stringify({ item }),
            })
        ).json();
    }
    public async getMarketPrice(item: Item) {
        return (
            await fetch(`${API_URL}/price`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'post',
                body: JSON.stringify({ item }),
            })
        ).json();
    }
}

export const aiApiClient = new AIApiClient();
