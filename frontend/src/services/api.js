const BASE_URL = 'http://localhost:8080/api';

export const stadiumService = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/stadiums`);
    if (!response.ok) throw new Error('Failed to fetch stadiums');
    return response.json();
  },
  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/stadiums/${id}`);
    if (!response.ok) throw new Error('Failed to fetch stadium');
    return response.json();
  }
};

export const matchService = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/matches`);
    if (!response.ok) throw new Error('Failed to fetch matches');
    return response.json();
  },
  getByMatchday: async (day) => {
    const response = await fetch(`${BASE_URL}/matches/matchday/${day}`);
    if (!response.ok) throw new Error('Failed to fetch matches for matchday');
    return response.json();
  }
};

export const predictionService = {
  submit: async (prediction) => {
    const response = await fetch(`${BASE_URL}/predictions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prediction)
    });
    if (!response.ok) throw new Error('Failed to submit prediction');
    return response.json();
  },
  getByUser: async (userId) => {
    const response = await fetch(`${BASE_URL}/predictions/user/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user predictions');
    return response.json();
  }
};

export const userService = {
  getLeaderboard: async () => {
    const response = await fetch(`${BASE_URL}/users/leaderboard`);
    if (!response.ok) throw new Error('Failed to fetch leaderboard');
    return response.json();
  },
  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  }
};

export const albumService = {
  getStickers: async () => {
    const response = await fetch(`${BASE_URL}/album/stickers`);
    if (!response.ok) throw new Error('Failed to fetch stickers');
    return response.json();
  },
  getCollection: async (userId) => {
    const response = await fetch(`${BASE_URL}/album/collection/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch collection');
    return response.json();
  }
};
