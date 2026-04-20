-- Seed data for FIFA World Cup 2026

INSERT INTO stadiums (name, city, country, capacity, description, image_url) VALUES
('Estadio Azteca', 'Mexico City', 'Mexico', 83264, 'The historic heart of Mexican football.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjx_r5C0ZPSr9XihWu_dB0cXx2BJXjbyUv_FTWs6FEz55lLWxfGor_eXuoQrYxm9A_loLkPQ1SBT64mXEh1bGiYZkNtsCXo8qp6AnD_B6Q4INBaAI6WIcvw7vnVZfVVO-R4evyxNhRnpwqwMF0tk-QuSHkiv1ufACCo4rZHpNi0MiLud21a-BQxzJRZk3jqzApmYuiHFVvbybdNkODGd-7eQJLsO0t4_vkBycVL9gvHPQvHfR-fWfpsUBHvzOTTg5Ut92MyJgZ3jc'),
('SoFi Stadium', 'Inglewood', 'USA', 70240, 'State-of-the-art masterpiece in Los Angeles.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfE5Vb07Lq20RL2Swb3E-l6mzOGewnk7TfeWxz1us0c3BulSAU0XByUDvYHfCm4Prb8co-SeSwmQSSa1sqbPkzLbwqmCqC9fTaa1Ma3pJ3LA4KJhgz6fASTerBk3-zoJ72copmi2GQgcJ-QdRoaSAYXy-Ou7xhSVRI2NvVVxKKE7lysro6UHrJRf0CMCQo-qECVSzI7im4UXKmtYNwZ6FeUj80F0eeSHrFJheEVkspSFx_pTQJZTCzTs78t_OsS-nOAeebiSn2Z64');

INSERT INTO matches (stadium_id, team1, team2, match_date, matchday, group_name) VALUES
(1, 'Mexico', 'England', '2026-06-11 15:00:00', 1, 'Group A'),
(2, 'USA', 'Spain', '2026-06-12 18:00:00', 1, 'Group B');

INSERT INTO stickers (name, category, rarity, image_url, description) VALUES
('Estadio Azteca', 'Stadium', 'GOLD', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsdR0Aw7Ydh9rW1zEmbye6VZYtBbGvGJHed5bY5Ab-2YihAsiFMuhIJvG-KwIzKi74aYf4SgW7BOnrBTosw1crVO5_SP2nUoLeKAp9O66WBQI7EK72g8jYBUUrnT2qP_cHlnwul0QuHlCgyxT3CroN-DjbL2Eq-HXUaSt7kzS5MMvbuf4lO7tLGHbpLo-rS7s-PkmCANZzqjgC0Nrbz0FllvIaGB4cTPyYbo2zR4Nxy61pztSDXhLQAjbbYllTNcUKgSEcckWpJD4', 'The iconic Azteca Arena.'),
('Official Ball', 'Equipment', 'COMMON', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_b91PzwkBb2DY569mCgJ2LhwrzkSYHRHZj5COOfsbQSXnbrvpzs4a2_PaKSgdrhI5yTNxRb7A7vtPTswMoKvqcnwKhytk0wVoZfI_sa2ZT-AfgX_nXiYLJEWXRT6gxfytsFycDaSzA5vUUszv-xihvL-wh2U3J4bnf1sppNGg6QAVqa3wjAH4IxCXwDkuMVwWq8jwkWfDV_bjyTLnprvZjCwcsHcBU5DU1wQnae8kFfyTNASniEa1JHEgbxsnZB3Ji9zQ6kmQsZ8', 'The official match ball of 2026.');

INSERT INTO users (username, email, password_hash, points, global_rank, favorite_team) VALUES
('Elena M.', 'elena@example.com', 'hash', 45920, 1248, 'Team Canada'),
('Marcus T.', 'marcus@example.com', 'hash', 8920, 2500, 'USA');
