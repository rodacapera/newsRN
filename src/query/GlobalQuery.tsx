import {NEWS_API_KEY} from '@src/globals/constants/fakeData';
import {useQuery} from '@tanstack/react-query';

// const queryClient = useQueryClient();

// Queries
export const GetAllNews = () => {
  const req = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=apple&from=2024-02-07&to=2024-02-07&sortBy=popularity&apiKey=${NEWS_API_KEY}`,
      );
      const data = await response.json();

      return {success: 'ok', data};
    },
  });
  return req;
};
